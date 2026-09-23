"""Crawl the running production build. Usage: python3 scripts/verify-seo.py [origin]."""
import concurrent.futures
import json
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path

ORIGIN = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3000'
CANONICAL = 'https://www.fusionfloorswi.com'
SERVICES = ['garage-floor-epoxy', 'basement-epoxy', 'commercial-epoxy', 'patio-outdoor-coatings']
CITIES = ['sparta', 'la-crosse', 'onalaska', 'west-salem', 'holmen', 'tomah']
EXPECTED = ['/', '/about', '/contact', '/work', '/services', '/locations'] + ['/services/'+s for s in SERVICES] + ['/locations/'+c for c in CITIES]
LEGACY = {
 '/service-garage-floors': '/services/garage-floor-epoxy',
 '/service-basement-floors': '/services/basement-epoxy',
 '/service-deck-patios': '/services/patio-outdoor-coatings',
 '/gallery-Flooring': '/work', '/showcases': '/work', '/gallery': '/work', '/reviews': '/work#reviews',
 **{f'/services/{s}/{c}': f'/services/{s}' for s in SERVICES for c in CITIES},
}
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self, *args): return None
opener = urllib.request.build_opener(NoRedirect)
def request(path, headers=None):
 try:
  r = opener.open(urllib.request.Request(ORIGIN+path, headers=headers or {}), timeout=30)
 except urllib.error.HTTPError as e: r = e
 return r.code, {k.lower(): v for k, v in r.headers.items()}, r.read().decode()
class Page(HTMLParser):
 def __init__(self, text):
  super().__init__(); self.title=''; self.h1=[]; self.canon=[]; self.meta={}; self.links=[]; self.images=[]; self.schema=[]; self.ids=set(); self.mode=None; self.buf=''; self.feed(text)
 def handle_starttag(self, tag, attrs):
  a=dict(attrs)
  if a.get('id'): self.ids.add(a['id'])
  if tag=='link' and a.get('rel')=='canonical': self.canon.append(a.get('href'))
  if tag=='meta': self.meta[a.get('name',a.get('property'))]=a.get('content')
  if tag=='a' and a.get('href'): self.links.append(a['href'])
  if tag=='img': self.images.append(a)
  if tag in ['title','h1'] or (tag=='script' and a.get('type')=='application/ld+json'): self.mode=tag; self.buf=''
 def handle_data(self, data):
  if self.mode: self.buf+=data
 def handle_endtag(self, tag):
  if tag!=self.mode: return
  if tag=='title': self.title=self.buf
  if tag=='h1': self.h1.append(' '.join(self.buf.split()))
  if tag=='script': self.schema.append(json.loads(self.buf))
  self.mode=None

def check_page(path):
 status,headers,html=request(path); assert status==200,(path,status)
 p=Page(html); assert p.canon==[CANONICAL+path],(path,p.canon)
 assert len(p.h1)==1 and p.h1[0],(path,p.h1)
 assert p.title.endswith(' | Fusion Floors') and p.title!='Fusion Floors',path
 assert p.meta.get('description'),path
 assert p.meta.get('og:title')==p.title,path
 assert p.meta.get('og:description')==p.meta['description'],path
 assert p.meta.get('og:url')==CANONICAL+path,path
 assert 'noindex' not in p.meta.get('robots',''),path
 assert len([x for x in p.schema if x.get('@type')=='HomeAndConstructionBusiness'])==1,path
 assert len([x for x in p.schema if x.get('@type')=='WebSite'])==1,path
 for schema in p.schema:
  assert schema.get('@context')=='https://schema.org'
  if schema['@type']=='HomeAndConstructionBusiness':
   assert not any(k in schema for k in ['geo','aggregateRating','priceRange','address']),schema
  if schema['@type']=='BreadcrumbList':
   assert [x['position'] for x in schema['itemListElement']]==list(range(1,len(schema['itemListElement'])+1))
 for img in p.images:
  assert 'alt' in img,(path,img)
  assert (img.get('width') and img.get('height')) or img.get('data-nimg')=='fill',(path,img)
  if img.get('data-nimg')=='fill': assert img.get('sizes'),(path,img)
 return path,p

status,_,xml=request('/sitemap.xml'); assert status==200
urls=[el.text for el in ET.fromstring(xml).findall('{*}url/{*}loc')]
assert len(urls)==len(set(urls))==len(EXPECTED),urls
assert set(urls)=={CANONICAL+p for p in EXPECTED},urls
status,_,robots=request('/robots.txt'); assert status==200 and f'Sitemap: {CANONICAL}/sitemap.xml' in robots
assert 'Disallow: /\n' not in robots and 'Disallow: /_next' not in robots
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool: pages=dict(pool.map(check_page,EXPECTED))
assert len({p.title for p in pages.values()})==len(pages),'Duplicate title'
assert len({p.meta['description'] for p in pages.values()})==len(pages),'Duplicate description'
# Every internal page link must point directly to an indexable page or valid fragment.
for path,p in pages.items():
 for href in p.links:
  url=urllib.parse.urlsplit(urllib.parse.urljoin(CANONICAL+path,href))
  if url.hostname not in ['fusionfloorswi.com','www.fusionfloorswi.com']: continue
  assert url.scheme=='https' and url.netloc=='www.fusionfloorswi.com',(path,href)
  assert url.path in pages,(path,href)
  if url.fragment: assert url.fragment in pages[url.path].ids,(path,href)
# Follow every direct destination to ensure no second redirect / loop.
for old,new in LEGACY.items():
 for source in [old,old+'/',old.upper()+'/']:
  status,headers,_=request(source+'?utm_source=seo-test&gclid=test')
  target=urllib.parse.urlsplit(headers.get('location',''))
  expected=urllib.parse.urlsplit(new)
  assert status==301 and target.path==expected.path and target.fragment==expected.fragment,(source,status,headers)
  assert target.query=='utm_source=seo-test&gclid=test',(source,target)
  assert request(target.path+'?'+target.query)[0]==200,source
  if target.fragment: assert target.fragment in pages[target.path].ids
# Simulate forwarded HTTP and alternate host requests against the actual middleware.
for host,protocol in [('fusionfloorswi.com','http'),('fusionfloorswi.com','https'),('www.fusionfloorswi.com','http'),('www.fusionfloorswi.com','https')]:
 for path in ['/', '/services/garage-floor-epoxy', '/SERVICE-GARAGE-FLOORS/', '/locations/La-Crosse/']:
  status,headers,_=request(path,{'Host':host,'X-Forwarded-Proto':protocol})
  final=LEGACY.get(path.lower().rstrip('/'),path.lower().rstrip('/') or '/')
  expected=CANONICAL+final
  needs_redirect=host!='www.fusionfloorswi.com' or protocol!='https' or path!=final
  assert status==(301 if needs_redirect else 200),(host,protocol,path,status)
  if needs_redirect: assert headers.get('location')==expected,(host,protocol,path,headers)
for path in ['/missing-seo-page','/service-sunrooms','/services/missing','/locations/missing','/services/garage-floor-epoxy/missing','/services/missing/sparta']:
 status,_,html=request(path); assert status==404,(path,status)
 p=Page(html); assert 'noindex' in p.meta.get('robots',''),(path,p.meta)
 assert not p.canon,(path,p.canon)
report=[{'path':path,'title':p.title,'h1':p.h1[0],'canonical':p.canon[0],'description':p.meta['description']} for path,p in pages.items()]
Path('/tmp/fusion-seo-metadata.json').write_text(json.dumps(report,indent=2))
print(f'PASS: {len(pages)} pages, metadata, canonical, schema, headings, image attributes, all internal links/fragments, sitemap, robots, {len(LEGACY)} redirect mappings with variants, 16 host/protocol cases, and 6 real 404s.')
