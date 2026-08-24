type RecentProject = {
  title: string;
  detail: string;
};

type Testimonial = {
  quote: string;
  author: string;
};

type Review = {
  quote: string;
  author: string;
  project: string;
  location: string;
  rating: number;
};

// Single source of truth for one client site.
// To spin up a new client: copy this file's values, don't touch components.
//
// FUSION FLOORS — SPARTA, WI
// DEMO CONTENT — this version is filled in for an internal presentation
// to show the company what the finished site can look like. Contact
// info, service categories, and location are real (confirmed via
// Facebook/Instagram); process details, cost factors, project write-ups,
// FAQ answers, and the testimonial below are realistic placeholder copy
// written to demonstrate the site, not confirmed facts from the owner.
// Swap them for the real thing — a short interview with the owner per
// service and per town — before this goes live. See the SOP doc for that
// workflow.

export const siteConfig = {
  siteUrl: "https://fusionfloorswi.com",

  business: {
    name: "Fusion Floors",
    legalName: "Fusion Floors LLC",
    tagline:
      "Professional garage, basement, patio, outdoor, and commercial concrete coatings across Western Wisconsin.",
    phone: "(608) 633-4920",
    phoneHref: "tel:+16086334920",
    email: "fusionfloorsff@gmail.com",
    streetAddress: "",
    city: "Sparta",
    region: "Western Wisconsin",
    state: "WI",
    postalCode: "54656",
    latitude: 43.9431,
    longitude: -90.8117,
    priceRange: "$$",
    foundedYear: "2019",
    logoSrc: "/images/logo.webp",
    schemaType: "HomeAndConstructionBusiness",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61561958431375",
      "https://www.instagram.com/fusion.floors/",
    ],
  },

  hero: {
    videoSrc: "/videos/hero.mp4",
    posterSrc: "/images/hero-poster-optimized.jpg",
    headline: "Epoxy Flooring Installation in Sparta, Wisconsin.",
    subhead:
      "Garage, basement, patio, outdoor, and commercial concrete coatings across Western Wisconsin. Free estimates.",
    ctaPrimary: { label: "Get a Free Estimate", href: "/contact" },
    badges: ["Free Estimates", "Western WI", "Sparta Based"],
    marqueeItems: [
      "Garage Floor Epoxy",
      "Basement Epoxy",
      "Patio & Outdoor Coatings",
      "Commercial Coatings",
    ],
  },

  about: {
    eyebrow: "About",
    heading: "Epoxy flooring, done right, in Sparta.",
    body: [
      "Fusion Floors installs concrete coating systems for garages, basements, patios, outdoor living spaces, and commercial properties across Western Wisconsin, based out of Sparta.",
      "Every job starts with a real conversation about what you want the space to do — park cars, host family outdoors, or run a business — and a coating system built for that use, not a one-size-fits-all product. We handle surface prep, repair, and installation ourselves from start to finish, so there's one crew accountable for the whole job.",
    ],
    stats: [
      { value: "2-3", label: "Local Crew" },
      { value: "100%", label: "Epoxy Focus" },
      { value: "Western WI", label: "Service Area" },
    ],
  },

  services: [
    {
      id: "garage-floor-epoxy",
      slug: "garage-floor-epoxy",
      number: "01",
      title: "Garage Floor Epoxy",
      h1: "Garage Floor Epoxy in Sparta, WI",
      shortDescription:
        "Durable epoxy coating for garage floors — resists hot tire pickup, stains, and chipping.",
      metaDescription:
        "Garage floor epoxy installation in Sparta, WI — free estimates, flake and solid color options. Call Fusion Floors.",
      description: [
        "Your garage floor takes more abuse than almost any other surface in the house — hot tires, dropped tools, salt and gravel tracked in all winter. A properly installed epoxy system turns bare or painted concrete into a surface that shrugs all of that off, stays easy to clean, and actually looks finished.",
        "We prep every floor the same way regardless of budget: full mechanical grinding down to bare concrete, not just an acid etch, because that's what actually makes a coating last instead of peeling in two winters.",
      ],
      process: [
        {
          step: "Surface prep",
          detail:
            "Diamond grinding or acid etching to properly profile the concrete for adhesion.",
        },
        {
          step: "Repair & prime",
          detail: "Cracks and pits filled, primer coat applied.",
        },
        {
          step: "Base coat + flake or color",
          detail:
            "Epoxy base applied, decorative flake or solid color broadcast if selected.",
        },
        {
          step: "Topcoat & cure",
          detail:
            "Protective topcoat applied; floor cures before vehicle traffic.",
        },
      ],
      costFactors: [
        "Garage square footage",
        "Condition of existing concrete (cracks, prior coatings to remove)",
        "Solid color vs. flake vs. metallic finish",
      ],
      signsYouNeedThis: [
        "Bare or painted concrete that's chipping, staining, or dusting",
        "Hot tire marks or peeling from a prior coating",
        "Cracks or pitting in the slab",
      ],
      recentProject: {
        title: "Two-car garage full flake system, Onalaska",
        detail:
          "Ground down an old peeling paint coating to bare concrete, repaired several cracks along the slab seams, and installed a full-broadcast flake system with a polyaspartic topcoat — done in a day and a half, ready for vehicle traffic within 48 hours.",
      } as RecentProject | null,
      faq: [
        {
          q: "How long does epoxy take to cure before I can park in the garage?",
          a: "Most floors are ready for light foot traffic the next day and full vehicle traffic within 24-72 hours, depending on the topcoat we use. We'll give you an exact timeline before we start.",
        },
        {
          q: "Can epoxy go over an existing painted floor?",
          a: "Usually no — old paint or a prior coating needs to be mechanically ground off first. Coating over it is the #1 reason DIY epoxy jobs peel within a year, so we always start from bare concrete.",
        },
      ],
      imageSrc: "/images/service-garage-epoxy.jpg",
    },
    {
      id: "basement-epoxy",
      slug: "basement-epoxy",
      number: "02",
      title: "Basement Floor Epoxy",
      h1: "Basement Floor Epoxy in Sparta, WI",
      shortDescription:
        "Moisture-resistant epoxy flooring for basements and interior concrete slabs.",
      metaDescription:
        "Basement epoxy flooring in Sparta, WI. Moisture-tested installation, free estimates from Fusion Floors.",
      description: [
        "Basement slabs behave differently than garage floors — moisture moves through concrete from below, and a coating system that ignores that will bubble and delaminate no matter how good the install looks on day one. We test before we coat, not after something goes wrong.",
        "The result is a bright, easy-to-clean floor for a rec room, home gym, or finished basement that holds up the way a painted slab never does.",
      ],
      process: [
        {
          step: "Moisture testing",
          detail:
            "Concrete moisture levels checked before committing to a coating system.",
        },
        { step: "Surface prep", detail: "Grinding/etching as needed." },
        {
          step: "Coating application",
          detail:
            "Epoxy system applied suited to interior/basement conditions.",
        },
      ],
      costFactors: [
        "Square footage",
        "Existing moisture conditions",
        "Finish selected",
      ],
      signsYouNeedThis: [
        "Dusty or spalling concrete basement floor",
        "Wanting a finished, easy-to-clean basement surface",
      ],
      recentProject: {
        title: "Finished basement floor, Sparta",
        detail:
          "Ran a moisture test on an older slab before quoting, confirmed it was within range for a standard system, and installed a light gray solid-color epoxy floor for a family finishing their basement into a rec room.",
      } as RecentProject | null,
      faq: [
        {
          q: "Is epoxy safe for a basement that's had moisture issues?",
          a: "It depends on the severity — we test moisture vapor emission before quoting any basement job. If levels are too high for a standard system, we'll tell you honestly and talk through options rather than install something that's likely to fail.",
        },
      ],
      imageSrc: "/images/service-basement-epoxy.jpg",
    },
    {
      id: "commercial-epoxy",
      slug: "commercial-epoxy",
      number: "03",
      title: "Commercial & Industrial Epoxy",
      h1: "Commercial Epoxy Flooring in Sparta, WI",
      shortDescription:
        "Heavy-duty epoxy coatings for commercial and industrial floors.",
      metaDescription:
        "Commercial and industrial epoxy flooring in Western Wisconsin. Contact Fusion Floors for a free estimate.",
      description: [
        "Retail floors, shop floors, and warehouse space all take a different kind of punishment than a residential garage — constant foot traffic, chemical exposure, heavier equipment. We spec the coating system to the actual use of the space, and we can schedule installation around your business hours so you're not losing operating days.",
      ],
      process: [
        {
          step: "Site assessment",
          detail:
            "Traffic load and chemical exposure evaluated to pick the right system.",
        },
        {
          step: "Prep & install",
          detail:
            "Industrial-grade surface prep and coating application, often scheduled around business hours.",
        },
      ],
      costFactors: [
        "Square footage",
        "Traffic/chemical exposure level",
        "Downtime constraints",
      ],
      signsYouNeedThis: [
        "Worn, stained, or hard-to-clean commercial concrete floor",
      ],
      recentProject: {
        title: "Retail shop floor, Sparta",
        detail:
          "Installed a slip-resistant solid-color epoxy system in a small retail space over a weekend so the business didn't have to close for a single business day.",
      } as RecentProject | null,
      faq: [
        {
          q: "Can you install around our business hours?",
          a: "Yes — most commercial jobs are scheduled evenings, overnight, or over a weekend specifically so you don't lose operating hours. We'll build the timeline around your schedule, not the other way around.",
        },
      ],
      imageSrc: "/images/service-commercial-epoxy.jpg",
    },
    {
      id: "patio-outdoor-coatings",
      slug: "patio-outdoor-coatings",
      number: "04",
      title: "Patio & Outdoor Coatings",
      h1: "Patio & Outdoor Coatings in Sparta, WI",
      shortDescription:
        "Durable, slip-resistant concrete coatings for patios, walkways, steps, and outdoor living spaces.",
      metaDescription:
        "Patio and outdoor concrete coatings in Sparta, WI. Durable finishes for patios, walkways, and steps from Fusion Floors. Free estimates.",
      description: [
        "Patios, walkways, and exterior steps have to handle sun, rain, snow, freeze-thaw cycles, and the grit that comes with a Wisconsin winter. We install outdoor concrete coating systems selected for exterior exposure, traction, and the way you use the space.",
        "A properly prepared and coated surface is easier to clean, more comfortable to live with, and gives worn concrete a finished look. We assess the slab, repair damage where appropriate, and help you choose a texture and color that work with your home and outdoor space.",
      ],
      process: [
        {
          step: "Outdoor assessment",
          detail:
            "We inspect the concrete, drainage, exposure, cracks, and existing coatings before recommending a system.",
        },
        {
          step: "Surface prep & repair",
          detail:
            "The surface is mechanically prepared and suitable cracks or damaged areas are repaired for reliable adhesion.",
        },
        {
          step: "Coating & texture",
          detail:
            "An exterior-suitable coating system is applied with the selected color and slip-resistant texture.",
        },
        {
          step: "Final cure",
          detail:
            "The coating cures before the patio, walkway, or steps return to normal use.",
        },
      ],
      costFactors: [
        "Square footage",
        "Condition of the concrete and repairs needed",
        "Surface layout, steps, edges, and existing coating removal",
        "Selected color, texture, and coating system",
      ],
      signsYouNeedThis: [
        "Worn, stained, or hard-to-clean patio concrete",
        "Peeling paint or a failed coating on an outdoor surface",
        "An outdoor living area that needs a more finished, slip-resistant surface",
      ],
      recentProject: null as RecentProject | null,
      faq: [
        {
          q: "Can concrete coatings be used outdoors in Wisconsin?",
          a: "Yes, when the coating system is selected for exterior exposure and the concrete is prepared correctly. We assess sun, moisture, drainage, and freeze-thaw conditions before recommending a system for your patio or walkway.",
        },
        {
          q: "Will an outdoor coating be slippery when wet?",
          a: "Outdoor surfaces can be finished with added texture for better traction. We'll recommend a slip-resistant finish based on whether the area is a patio, walkway, or set of steps.",
        },
      ],
      imageSrc: "/images/work-four.jpg",
    },
  ],

  flakeColorSprite: "/images/flake-color-catalogue.jpg",
  flakeColors: [
    { name: "Domino", column: 0, row: 0 },
    { name: "Tidal Wave", column: 1, row: 0 },
    { name: "Gravel", column: 2, row: 0 },
    { name: "Creekbed", column: 0, row: 1 },
    { name: "Outback", column: 1, row: 1 },
    { name: "Shoreline", column: 2, row: 1 },
    { name: "Wombat", column: 0, row: 2 },
    { name: "Orbit", column: 1, row: 2 },
    { name: "Nightfall", column: 2, row: 2 },
  ],

  // Sparta is confirmed as their actual base. The four towns after it are
  // the obvious local-SEO targets around it — all inside the "Western
  // Wisconsin" radius the business already advertises, all along the I-90
  // corridor, ordered by market size:
  //
  //   La Crosse   ~26 mi W  — biggest market in the region
  //   Onalaska    ~22 mi W  — newer subdivisions, big attached garages
  //   Tomah       ~13 mi E  — highway/rail hub, commercial + shop floors
  //   West Salem  ~15 mi W  — village + rural outbuildings, between the two
  //
  // IMPORTANT, per the SOP: get the owner to confirm they actually travel
  // to each of these before launch, and delete any they don't. A location
  // page for a town you won't drive to generates leads you have to turn
  // down, and Google eventually works out that the page is thin.
  //
  // localConditions below are written from genuine regional facts (freeze-
  // thaw, winter road salt, river-valley moisture, housing stock age), but
  // they're still agency copy, not the owner's words — same demo caveat as
  // the rest of this file. recentProject/testimonial are deliberately null
  // for the new towns rather than invented: those two fields are the ones
  // a visitor reads as a factual claim, so they stay empty until there's a
  // real job and a real customer quote to put in them.
  locations: [
    {
      slug: "sparta",
      name: "Sparta",
      state: "WI",
      h1: "Epoxy Flooring in Sparta, WI",
      metaDescription:
        "Fusion Floors installs garage, basement, patio, outdoor, and commercial concrete coatings in Sparta, WI. Free estimates.",
      blurb:
        "Fusion Floors is based in Sparta and serves Western Wisconsin with concrete coatings for garages, basements, patios, outdoor spaces, and commercial properties.",
      // Optional — falls back to the hero poster image if unset. Add a
      // real jobsite photo from Sparta specifically when you have one.
      imageSrc: undefined as string | undefined,
      neighborhoods: [] as string[],
      localConditions: [
        "Wisconsin's freeze-thaw winters are hard on unprotected concrete — moisture gets into hairline cracks, freezes, and expands them. A properly sealed epoxy system keeps water out of the slab in the first place, which matters more here than in a milder climate.",
        "Road salt tracked in all winter breaks down bare or painted concrete fast; a cured epoxy system is built to shrug it off instead of staining and pitting season after season.",
      ],
      recentProject: {
        title: "Two-car garage floor, Sparta",
        detail:
          "A full tear-out of an old peeling coating and reinstall with a flake system, timed for late fall before the first hard freeze.",
      } as RecentProject | null,
      // Demo testimonial — swap for a real customer quote before launch.
      testimonial: {
        quote:
          "They showed up when they said they would, the floor turned out better than I expected, and it's held up through a full Wisconsin winter with zero issues.",
        author: "Mike R.",
      } as Testimonial | null,
    },
    {
      slug: "la-crosse",
      name: "La Crosse",
      state: "WI",
      h1: "Epoxy Flooring in La Crosse, WI",
      metaDescription:
        "Garage, basement, patio, outdoor, and commercial concrete coatings in La Crosse, WI from Fusion Floors. Free estimates.",
      blurb:
        "Fusion Floors installs coatings for garages, basements, patios, outdoor spaces, and commercial floors throughout La Crosse — about a 25 minute drive west of our shop in Sparta.",
      imageSrc: undefined as string | undefined,
      // Verify against the city's own neighborhood map before launch —
      // naming a neighborhood wrong is worse than not naming one at all.
      neighborhoods: [
        "Downtown",
        "Lower Northside",
        "Southside",
        "Grandview-Emerson",
        "Washburn",
        "Bluffside",
      ] as string[],
      localConditions: [
        "La Crosse has a lot of pre-war housing stock, which means a lot of original basement slabs — often uneven, previously painted, and never properly profiled. Those floors need real grinding and crack repair before any coating goes down, which is most of the work on a typical La Crosse basement job.",
        "Sitting in the Mississippi river valley means a higher water table than the ridge towns, so basement moisture is the first thing we test for here rather than an afterthought. If the slab is pushing too much vapor, we'll say so before quoting instead of installing a floor that delaminates in a year.",
        "Downtown and Southside garages are frequently detached and unheated, which affects both cure time and which coating system makes sense — we schedule those jobs around temperature rather than fighting it.",
      ],
      recentProject: null as RecentProject | null,
      testimonial: null as Testimonial | null,
    },
    {
      slug: "onalaska",
      name: "Onalaska",
      state: "WI",
      h1: "Epoxy Flooring in Onalaska, WI",
      metaDescription:
        "Garage, basement, patio, and outdoor concrete coatings in Onalaska, WI from Fusion Floors. Free estimates.",
      blurb:
        "Fusion Floors coats garages, basements, patios, outdoor spaces, and commercial floors across Onalaska, roughly 20 minutes west of Sparta on I-90.",
      imageSrc: undefined as string | undefined,
      neighborhoods: [] as string[],
      localConditions: [
        "Much of Onalaska's housing went up in the last few decades, so the slabs we coat here are usually sound and relatively new — that means less repair work, and it also means catching the floor before a winter of salt and hot tires has a chance to pit it.",
        "Three-stall attached garages are common in these subdivisions, and the larger the floor, the more a full-broadcast flake system pays off: it hides everyday grit far better than solid color over that much square footage.",
        "Attached, often heated garages cure predictably year-round, so Onalaska jobs are some of the easiest to schedule in the middle of a Wisconsin winter.",
      ],
      recentProject: null as RecentProject | null,
      testimonial: null as Testimonial | null,
    },
    {
      slug: "tomah",
      name: "Tomah",
      state: "WI",
      h1: "Epoxy Flooring in Tomah, WI",
      metaDescription:
        "Garage, patio, outdoor, shop, and commercial concrete coatings in Tomah, WI from Fusion Floors in nearby Sparta. Free estimates.",
      blurb:
        "Fusion Floors installs coatings in Tomah for garages, patios, outdoor spaces, shops, and commercial floors — about 15 minutes east of our base in Sparta.",
      imageSrc: undefined as string | undefined,
      neighborhoods: [] as string[],
      localConditions: [
        "Tomah sits at the I-90/I-94 junction, so there's a lot more shop, service bay, and light industrial floor here than in a typical town this size. Those floors need a system specced to traffic and chemical exposure, not the same coating that goes in a residential garage.",
        "Commercial work in Tomah is almost always scheduled evenings or weekends — losing operating days costs a business more than the floor does, so we build the timeline around your hours.",
        "Between highway traffic and a long salt season, bare concrete here takes a beating from late November through March; sealing the slab keeps the salt out instead of letting it work into the surface year after year.",
      ],
      recentProject: null as RecentProject | null,
      testimonial: null as Testimonial | null,
    },
    {
      slug: "west-salem",
      name: "West Salem",
      state: "WI",
      h1: "Epoxy Flooring in West Salem, WI",
      metaDescription:
        "Garage, basement, patio, outdoor, pole barn, and shop floor coatings in West Salem, WI from Fusion Floors. Free estimates.",
      blurb:
        "Fusion Floors serves West Salem with coatings for garages, basements, patios, outdoor spaces, shops, and outbuildings — a short drive west of Sparta on I-90.",
      imageSrc: undefined as string | undefined,
      neighborhoods: [] as string[],
      localConditions: [
        "A lot of West Salem property is rural or semi-rural, which means pole barns, workshops, and outbuildings alongside the usual attached garage — bigger slabs, and often ones that were poured without a coating ever being part of the plan.",
        "Unheated shop and barn slabs are the main scheduling constraint out here: epoxy needs the concrete itself within a workable temperature range to cure properly, so those jobs get booked for the right stretch of the year rather than squeezed in during a cold snap.",
        "Gravel and field dirt tracked across a bare slab acts like sandpaper over a few seasons. A cured topcoat takes that abrasion instead of the concrete, and sweeps clean rather than dusting.",
      ],
      recentProject: null as RecentProject | null,
      testimonial: null as Testimonial | null,
    },
  ],

  fieldVideos: [
    {
      videoSrc: "/videos/field-one.mp4",
      label: "Commercial Top Coat",
    },
    {
      videoSrc: "/videos/field-two.mp4",
      label: "Garage Top Coat",
    },
    {
      videoSrc: "/videos/field-three.mp4",
      label: "Flake Broadcast",
    },
    {
      videoSrc: "/videos/field-four.mp4",
      label: "Base Coat Pour",
    },
  ],

  gallery: [
    {
      imageSrc: "/images/work-one.jpg",
      category: "Garage",
      caption: "Full flake system, Sparta",
    },
    {
      imageSrc: "/images/work-two.jpg",
      category: "Outdoor",
      caption: "Creekbed finish, walkway and stairs",
    },
    {
      imageSrc: "/images/work-three.jpg",
      category: "Flake",
      caption: "Domino blend broadcast",
    },
    {
      imageSrc: "/images/work-four.jpg",
      category: "Patio",
      caption: "Outdoor Patio with Loon Flake",
    },
    {
      imageSrc: "/images/work-five.jpg",
      category: "Basement",
      caption: "Finished basement flooring",
    },
    {
      imageSrc: "/images/work-six.jpg",
      category: "Flake",
      caption: "Opal flake blend",
    },
    {
      imageSrc: "/images/work-seven.jpg",
      category: "Garage",
      caption: "Loon flake finish",
    },
    {
      imageSrc: "/images/work-eight.jpg",
      category: "Garage",
      caption: "Two-car garage full install",
    },
    {
      imageSrc: "/images/work-nine.jpg",
      category: "Flake",
      caption: "Showroom-style flake floor",
    },
  ],

  reviews: {
    eyebrow: "Owner feedback",
    heading: "Floors that earn their keep.",
    subhead:
      "What homeowners and business owners say after the tools are packed up and the floor goes to work.",
    // Demo reviews — replace with verified customer wording and names
    // before launch. Ratings must remain between 1 and 5.
    items: [
      {
        quote:
          "Had epoxy coatings done on both my basement and garage floors and couldn't be happier with the results. The work was excellent, but what really stood out was the communication. They kept me informed throughout the whole process, which in my experience is rare in the trades. Highly recommend if you're looking for quality work from people who actually follow through.",
        author: "Matt H.",
        project: "Garage Floor Epoxy Coating",
        location: "Sparta, WI",
        rating: 5,
      },
      {
        quote:
          "Their professional care in prepping and completion was most appreciated. They aren't just focused on getting the job done, they were particular in completing it correctly. Exceptional clean up. Along with there work skills they're upbeat attitude despite the HOT weather they were easy to work with. We absolutely love our new garage floor.",
        author: "Dolly S.",
        project: "Garage Floor Epoxy Coating",
        location: "La Crosse, WI",
        rating: 5,
      },
      {
        quote:
          "Without reservation, I would highly recommend Fusion Floors. Brothers Ethan and Emmett run a trustworthy professional business, and they genuinely care about the quality of their work and satisfying their customers. They are courteous, easy to work with, and a pleasure to do business with. I have already recommended Fusion Floors to several of my friends.",
        author: "Jerome and Pam L.",
        project: "Commercial coating",
        location: "Tomah, WI",
        rating: 5,
      },
    ] as Review[],
  },

  faq: [
    {
      q: "What areas do you serve?",
      // Naming the towns here (not just the region) is deliberate: this
      // answer is eligible for an FAQ rich result, and "do you serve
      // [town]" is one of the most common searches in this trade.
      a: "Fusion Floors is based in Sparta and serves Western Wisconsin — including La Crosse, Onalaska, Tomah, and West Salem. If your town isn't on that list, call us anyway; we may still be able to help.",
    },
    {
      q: "How do I get a free estimate?",
      a: "Contact via phone, text, email, or Facebook Messenger — (608) 633-4920, fusionfloorsff@gmail.com.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes — Fusion Floors carries liability insurance for both residential and commercial installation work.",
    },
    {
      q: "How much does epoxy flooring cost?",
      a: "It depends on square footage, the condition of your existing concrete, and the finish you choose — solid color, flake, or metallic. Most residential garage floors fall in a fairly predictable range, but we'll give you an exact number after seeing the space, not a ballpark over the phone.",
    },
    {
      q: "How long does epoxy flooring actually last?",
      a: "A properly prepped and installed epoxy system typically holds up for 10-20+ years depending on traffic and how it's maintained. The single biggest factor isn't the epoxy itself — it's whether the concrete was fully ground down before coating, which is why we never skip that step.",
    },
    {
      q: "How long does an installation take?",
      a: "Most single or two-car garage floors are done in one to two days, with the floor cured enough for vehicle traffic within 24-72 hours. Larger commercial jobs or basement projects vary — we'll give you a firm timeline as part of the estimate.",
    },
    {
      q: "Should I install epoxy myself or hire a professional?",
      a: "DIY epoxy kits can work for a small, low-traffic space, but most peeling and bubbling floors we get called to fix started as a DIY job where the concrete wasn't properly ground first. Professional installation costs more upfront but avoids redoing the whole floor in a year or two.",
    },
    {
      q: "Do you offer a warranty on your work?",
      a: "Yes — ask us for the specifics for your project type when you get your estimate, since coverage can vary slightly between residential and commercial installs.",
    },
  ],

  quoteForm: {
    heading: "Tell us about your floor.",
    subhead: "Send the details and we'll follow up. Free estimates.",
    serviceOptions: [
      "Garage Floor Epoxy",
      "Basement Floor Epoxy",
      "Commercial & Industrial Epoxy",
      "Patio & Outdoor Coatings",
      "Other",
    ],
    sourceOptions: [
      "Google search",
      "Facebook",
      "Instagram",
      "Referral from a friend",
      "Saw a truck or sign",
      "Repeat customer",
      "Other",
    ],
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Locations", href: "/locations" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ],

  ghl: {
    chatWidgetId: "",
    calendarId: "",
  },
};

export type SiteConfig = typeof siteConfig;
export type ServiceEntry = (typeof siteConfig.services)[number];
export type LocationEntry = (typeof siteConfig.locations)[number];
