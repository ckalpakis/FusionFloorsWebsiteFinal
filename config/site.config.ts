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

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  paragraphs: string[];
};

// Single source of truth for one client site.
// To spin up a new client: copy this file's values, don't touch components.
//
// FUSION FLOORS — SPARTA, WI
// Core contact details, service categories and Sparta base come from the
// existing business site. Unverified demo project stories/testimonial have
// been removed. Confirm the existing service-area list and remaining business
// claims with the owner before expanding them; never invent local proof.

export const siteConfig = {
  siteUrl: "https://www.fusionfloorswi.com",

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
    headline:
      "Epoxy Floor Coatings for Western Wisconsin and the La Crosse Area",
    subhead:
      "Garage, basement, patio, outdoor, and commercial concrete coatings across Western Wisconsin and the La Crosse area. Based in Sparta. Free estimates.",
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
    heading: "Epoxy flooring, done right, across Western Wisconsin.",
    body: [
      "Based in Sparta, Wisconsin, Fusion Floors installs epoxy flooring and concrete floor coatings across Western Wisconsin. Our services include garage floor coatings, basement floor coatings, commercial coatings, and patio and outdoor coatings.",
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
      seoTitle: "Garage Floor Epoxy & Concrete Coatings",
      h1: "Garage Floor Epoxy & Concrete Coatings",
      shortDescription:
        "Durable epoxy coating for garage floors — resists hot tire pickup, stains, and chipping.",
      metaDescription:
        "Residential garage floor coatings in Sparta and Western Wisconsin. Explore epoxy garage floors and concrete coating options. Get a free estimate from Fusion Floors.",
      description: [
        "Your garage floor takes more abuse than almost any other surface in the house — hot tires, dropped tools, salt and gravel tracked in all winter. A properly installed epoxy system turns bare or painted concrete into a surface that shrugs all of that off, stays easy to clean, and actually looks finished.",
        "For residential garage floor coatings, the estimate should account for existing paint, cracks, surface preparation and how you use the garage. Ask about finish options and when the floor can return to foot and vehicle traffic.",
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
      recentProject: null as RecentProject | null,
      faq: [
        {
          q: "How long does epoxy take to cure before I can park in the garage?",
          a: "Cure time depends on the coating system and site conditions. Ask for the foot-traffic and vehicle-traffic timelines for your floor before installation.",
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
      seoTitle: "Basement Epoxy Flooring in Western Wisconsin",
      h1: "Basement Epoxy Flooring & Concrete Coatings",
      shortDescription:
        "Moisture-resistant epoxy flooring for basements and interior concrete slabs.",
      metaDescription:
        "Basement epoxy flooring and concrete coatings in Sparta and Western Wisconsin. Discuss your slab, moisture concerns and finish options with Fusion Floors.",
      description: [
        "Basement floor coatings start with the condition of the concrete. Tell us about damp areas, previous paint and how you plan to use the space so moisture concerns and preparation can be discussed before choosing an epoxy system.",
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
      recentProject: null as RecentProject | null,
      faq: [
        {
          q: "Is epoxy safe for a basement that's had moisture issues?",
          a: "Moisture concerns need to be evaluated before selecting a coating. Tell us about seepage, damp areas or previous coating failures when requesting your basement estimate.",
        },
      ],
      imageSrc: "/images/service-basement-epoxy.jpg",
    },
    {
      id: "commercial-epoxy",
      slug: "commercial-epoxy",
      number: "03",
      title: "Commercial & Industrial Epoxy",
      seoTitle: "Commercial Epoxy Flooring in Western Wisconsin",
      h1: "Commercial Epoxy Flooring & Concrete Coatings",
      shortDescription:
        "Heavy-duty epoxy coatings for commercial and industrial floors.",
      metaDescription:
        "Commercial epoxy flooring for shops, retail and warehouse spaces in Sparta, La Crosse and nearby Western Wisconsin communities. Request a free estimate.",
      description: [
        "Fusion Floors offers commercial epoxy flooring and concrete coatings in Sparta and Western Wisconsin, including La Crosse, Onalaska, West Salem, Holmen and Tomah. For retail floors, shops and warehouse spaces, discuss foot traffic, equipment, spills and cleaning needs when requesting an estimate. Installation timing and return to service depend on the space and selected system.",
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
            "Surface preparation and coating application, with the installation schedule discussed during the estimate.",
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
      recentProject: null as RecentProject | null,
      faq: [
        {
          q: "Can you install around our business hours?",
          a: "Tell us your operating hours and any downtime constraints when requesting an estimate. We can discuss scheduling and the cure time needed before the space returns to use.",
        },
      ],
      imageSrc: "/images/service-commercial-epoxy.jpg",
    },
    {
      id: "patio-outdoor-coatings",
      slug: "patio-outdoor-coatings",
      number: "04",
      title: "Patio & Outdoor Coatings",
      seoTitle: "Patio & Outdoor Concrete Coatings in Western Wisconsin",
      h1: "Patio & Outdoor Concrete Coatings",
      shortDescription:
        "Durable, slip-resistant concrete coatings for patios, walkways, steps, and outdoor living spaces.",
      metaDescription:
        "Concrete coatings for patios, walkways and exterior steps in Sparta and Western Wisconsin. Discuss surface condition and finish options with Fusion Floors.",
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

  // Existing published service areas; do not add towns without owner confirmation.
  locations: [
    {
      slug: "sparta",
      name: "Sparta",
      state: "WI",
      h1: "Epoxy Floor Coatings in Sparta, WI",
      metaDescription:
        "Epoxy floor coatings in Sparta, WI, where Fusion Floors is based. Garage, basement, patio, and commercial concrete coatings. Free estimates.",
      blurb:
        "Fusion Floors is based in Sparta and coats garages, basements, patios, outdoor spaces, and commercial floors here and across Western Wisconsin.",
      body: [
        "Fusion Floors is based in Sparta, so projects in town do not start with a drive from another city. Around Sparta are smaller communities such as Angelo to the north, Rockland to the south, and Bangor to the west, with Fort McCoy to the east along I-90.",
        "The floors we coat in Sparta are the services on this site: garage floors, basements, patios and other outdoor concrete, and commercial or shop floors. An estimate starts with how you use the space and the condition of the slab.",
        "West Salem is about 15 miles west on I-90, and Tomah is about 20 miles east. Onalaska is about 25 miles west. La Crosse and Holmen are about 30 miles west, with Holmen north of Onalaska. Each of those cities has its own page.",
      ],
      faq: [
        {
          q: "Is Fusion Floors based in Sparta?",
          a: "Yes. Fusion Floors is based in Sparta, Wisconsin, and also serves La Crosse, Onalaska, Holmen, Tomah, and West Salem.",
        },
        {
          q: "What floor coatings do you install in Sparta?",
          a: "Garage floor epoxy, basement floor coatings, patio and outdoor concrete coatings, and commercial coatings. Each service has its own page with the process and what to send for an estimate.",
        },
        {
          q: "How far are the other service areas from Sparta?",
          a: "West Salem is about 15 miles west and Tomah is about 20 miles east, both on I-90. Onalaska is about 25 miles west. La Crosse and Holmen are about 30 miles west.",
        },
        {
          q: "How do I request a Sparta estimate?",
          a: "Call or text (608) 633-4920, email fusionfloorsff@gmail.com, or use the contact form. Estimates are free.",
        },
      ],
      nearby: ["west-salem", "tomah", "la-crosse"],
      // Optional — falls back to the hero poster image if unset. Add a
      // real jobsite photo from Sparta specifically when you have one.
      imageSrc: undefined as string | undefined,
      neighborhoods: [] as string[],
      localConditions: [
        "Fusion Floors is based in Sparta. For a garage floor estimate, tell us about winter salt buildup, peeling paint and any cracks so preparation can be included in the project discussion.",
        "Planning a basement renovation as well as a garage coating? Describe each slab separately: basement moisture, garage traffic and the intended use of each space affect the choice of finish.",
      ],
      recentProject: null as RecentProject | null,
      testimonial: null as Testimonial | null,
    },
    {
      slug: "la-crosse",
      name: "La Crosse",
      state: "WI",
      h1: "Epoxy Floor Coatings in La Crosse, WI",
      metaDescription:
        "Epoxy floor coatings in La Crosse, WI, about 30 miles west of Sparta. Garages, basements, patios, and commercial floors. Free estimates from Fusion Floors.",
      blurb:
        "Fusion Floors coats garages, basements, patios, outdoor spaces, and commercial floors in La Crosse, about 30 miles west of our Sparta base.",
      body: [
        "La Crosse is about 30 miles west of our Sparta base, a direct drive on I-90. The city includes neighborhoods such as the North Side, the South Side, and downtown, plus French Island in the Town of Campbell. Onalaska and Holmen are just to the north.",
        "In La Crosse we coat garage floors, basements, patios and other outdoor concrete, and commercial floors such as shops and retail spaces. Those are the same four services listed on this site. Share how the space is used and the condition of the concrete when you ask for an estimate.",
        "Onalaska and Holmen sit just north of the city. West Salem is on I-90 between La Crosse and Sparta. Use the city pages linked on this page if the project is in one of those towns rather than in La Crosse itself.",
      ],
      faq: [
        {
          q: "How far is La Crosse from your Sparta base?",
          a: "La Crosse is about 30 miles west of Sparta on I-90.",
        },
        {
          q: "Which parts of the La Crosse area do you publish as service areas?",
          a: "La Crosse, Onalaska, Holmen, and West Salem each have a page. Sparta, where we are based, and Tomah are farther east on I-90.",
        },
        {
          q: "What kinds of floors do you coat in La Crosse?",
          a: "Garage floors, basements, patios and outdoor concrete, and commercial floors such as shops and retail spaces.",
        },
        {
          q: "How do I get a free estimate in La Crosse?",
          a: "Call (608) 633-4920 or send the details through the contact form. Include the neighborhood and what the floor is used for.",
        },
      ],
      nearby: ["onalaska", "holmen", "west-salem"],
      imageSrc: undefined as string | undefined,
      neighborhoods: [] as string[],
      localConditions: [
        "For a La Crosse basement with an older or previously painted slab, share photos of the existing finish and any damp areas. Surface condition and moisture concerns matter more than choosing a color first.",
        "If your garage is detached or unheated, mention that when requesting an estimate. Concrete temperature and the selected coating affect installation timing and cure time.",
        "For a retail or shop floor in La Crosse, include the space’s operating hours and typical traffic so the estimate can account for access and return to service.",
      ],
      recentProject: null as RecentProject | null,
      testimonial: null as Testimonial | null,
    },
    {
      slug: "onalaska",
      name: "Onalaska",
      state: "WI",
      h1: "Epoxy Floor Coatings in Onalaska, WI",
      metaDescription:
        "Epoxy floor coatings in Onalaska, WI, about 25 miles west of Sparta, near Lake Onalaska. Garage, basement, patio, and commercial concrete. Free estimates.",
      blurb:
        "Fusion Floors coats garages, basements, patios, outdoor spaces, and commercial floors in Onalaska, about 25 miles west of Sparta.",
      body: [
        "Onalaska is about 25 miles west of Sparta, between West Salem and La Crosse, along Lake Onalaska. Local areas include the village center along Main Street, the Sand Lake area, and Brice Prairie to the north.",
        "The floors we coat in Onalaska are garage floor coatings, basement epoxy, patio and outdoor concrete, and commercial floors. A larger attached garage and a smaller utility space can need different prep, so photos of the slab help the estimate.",
        "Holmen is the next town north, La Crosse is south, and West Salem is east on the way back to Sparta. All three are a short drive from Onalaska, and each has its own page.",
      ],
      faq: [
        {
          q: "How far is Onalaska from Sparta?",
          a: "Onalaska is about 25 miles west of Sparta, between West Salem and La Crosse.",
        },
        {
          q: "Do you coat garages and basements in Onalaska?",
          a: "Yes. Garage floor coatings and basement epoxy are both services we install in Onalaska, along with patio, outdoor, and commercial concrete coatings.",
        },
        {
          q: "Which nearby cities have their own pages?",
          a: "Holmen is north of Onalaska, La Crosse is south, and West Salem is east toward Sparta.",
        },
        {
          q: "What should I include with an Onalaska estimate request?",
          a: "Floor dimensions and photos of tire marks, stains, or existing paint help. Also say whether the garage is heated and when you need to park on the floor again.",
        },
      ],
      nearby: ["holmen", "la-crosse", "west-salem"],
      imageSrc: undefined as string | undefined,
      neighborhoods: [] as string[],
      localConditions: [
        "When planning an Onalaska garage floor coating, send the floor dimensions and photos of tire marks, stains or existing paint. A larger attached garage may need different preparation from a smaller utility space.",
        "Compare solid color and decorative flake finishes with the way you use the garage. Parking, storage and workshop areas can have different cleanup and appearance priorities.",
        "Let us know whether the garage is heated and when you need vehicle access again. Those details help frame the installation and curing discussion.",
      ],
      recentProject: null as RecentProject | null,
      testimonial: null as Testimonial | null,
    },
    {
      slug: "holmen",
      name: "Holmen",
      state: "WI",
      h1: "Epoxy Floor Coatings in Holmen, WI",
      metaDescription:
        "Epoxy floor coatings in Holmen, WI, about 30 miles west of Sparta. Garage, basement, patio, and shop floors in the La Crosse area. Request a free estimate.",
      blurb:
        "Fusion Floors serves Holmen, about 30 miles west of Sparta, with coatings for garages, basements, patios, outdoor spaces, shops, and commercial floors.",
      body: [
        "Holmen is about 30 miles west of Sparta, north of Onalaska in the La Crosse area. The village sits along Halfway Creek, with Onalaska and Brice Prairie to the south and La Crosse a short drive farther south.",
        "In Holmen we coat garages, basements, patios, walkways, and shop or commercial concrete. If a project includes both an indoor floor and outdoor concrete, list each surface. They can need different prep and a different coating.",
        "The drive from Sparta is west on I-90 toward the La Crosse area, then north into Holmen. West Salem and Onalaska are on that same corridor, closer to the interstate.",
      ],
      faq: [
        {
          q: "How far is Holmen from Sparta?",
          a: "Holmen is about 30 miles west of Sparta, north of Onalaska in the La Crosse area.",
        },
        {
          q: "What concrete do you coat in Holmen?",
          a: "Garages, basements, patios, walkways, and shop or commercial floors. List indoor and outdoor concrete separately when both are part of the project.",
        },
        {
          q: "Which neighboring cities do you also serve?",
          a: "Onalaska and La Crosse are the closest published service areas. West Salem and Sparta are back east on I-90.",
        },
        {
          q: "What should a Holmen garage estimate mention about winter?",
          a: "Tell us about road salt, slush, and whether the garage is heated. Those details are part of choosing a finish.",
        },
      ],
      nearby: ["onalaska", "la-crosse", "west-salem"],
      imageSrc: undefined as string | undefined,
      neighborhoods: [] as string[],
      localConditions: [
        "A Holmen garage or shop estimate should start with the slab, not just its square footage. Include close-up photos of cracks, pitting and previous coatings along with an overall view.",
        "If the project includes both indoor and outdoor concrete, list each surface separately. A garage, patio and walkway may need different preparation and coating choices.",
        "Tell us about road salt, slush and cleaning routines when discussing a garage finish, and whether the space is heated during colder months.",
      ],
      recentProject: null as RecentProject | null,
      testimonial: null as Testimonial | null,
    },
    {
      slug: "tomah",
      name: "Tomah",
      state: "WI",
      h1: "Epoxy Floor Coatings in Tomah, WI",
      metaDescription:
        "Epoxy floor coatings in Tomah, WI, about 20 miles east of Sparta on I-90. Garage, basement, patio, and commercial floors. Free estimates from Fusion Floors.",
      blurb:
        "Fusion Floors installs coatings in Tomah, about 20 miles east of Sparta, for garages, basements, patios, outdoor spaces, shops, and commercial floors.",
      body: [
        "Tomah is about 20 miles east of Sparta on I-90, near where I-90 and I-94 meet. Fort McCoy lies between Tomah and Sparta. Oakdale is farther east on I-90, and Warrens is north of town.",
        "Projects in Tomah include garage floors, basement coatings, patio and outdoor concrete, and commercial or shop floors. For a shop or retail floor, include the type of traffic, any equipment or spills, and how long the space can be out of use.",
        "Sparta is the next published service area to the west. West Salem, Onalaska, Holmen, and La Crosse continue west along I-90 if the floor is on that side of the region.",
      ],
      faq: [
        {
          q: "How far is Tomah from Sparta?",
          a: "Tomah is about 20 miles east of Sparta on I-90.",
        },
        {
          q: "Do you coat commercial floors in Tomah?",
          a: "Yes. Commercial epoxy is one of the services available in Tomah, along with garage, basement, patio, and outdoor coatings. Include traffic, equipment, and any downtime limits with the request.",
        },
        {
          q: "Which city pages are west of Tomah?",
          a: "Sparta is about 20 miles west. Farther west on I-90 are West Salem, then Onalaska, Holmen, and La Crosse.",
        },
        {
          q: "Can one Tomah estimate cover a garage and a basement?",
          a: "Yes. Describe each area and send photos. A residential request can include the garage, the basement, and outdoor concrete.",
        },
      ],
      nearby: ["sparta", "west-salem"],
      imageSrc: undefined as string | undefined,
      neighborhoods: [] as string[],
      localConditions: [
        "For a Tomah shop or commercial floor, include the type of traffic, equipment and spills the surface handles. A service area and a customer-facing retail floor have different priorities.",
        "Share operating hours, access constraints and how long the space can be out of use. Installation and curing need to be planned before moving stock or equipment.",
        "Residential projects in Tomah can include garage, basement and outdoor concrete. Send photos of each area and describe the intended use when requesting an estimate.",
      ],
      recentProject: null as RecentProject | null,
      testimonial: null as Testimonial | null,
    },
    {
      slug: "west-salem",
      name: "West Salem",
      state: "WI",
      h1: "Epoxy Floor Coatings in West Salem, WI",
      metaDescription:
        "Epoxy floor coatings in West Salem, WI, about 15 miles west of Sparta on I-90. Garage, basement, patio, and outbuilding coatings. Free estimates.",
      blurb:
        "Fusion Floors serves West Salem, about 15 miles west of Sparta on I-90, with coatings for garages, basements, patios, outdoor spaces, shops, and outbuildings.",
      body: [
        "West Salem is about 15 miles west of Sparta on I-90, between Sparta and the La Crosse area. Bangor is the next community east, back toward Sparta. Lake Neshonoc is on the west side of the village, with La Crosse and Onalaska farther west.",
        "Floors we coat in West Salem include garages, workshops, and outbuildings, plus basements, patios, and exterior steps. Say what uses the floor — cars, tools, storage, or other equipment — and whether the space is heated.",
        "From West Salem, Sparta is about 15 miles east on I-90. La Crosse, Onalaska, and Holmen are west and north. Each of those cities has its own page.",
      ],
      faq: [
        {
          q: "How far is West Salem from Sparta?",
          a: "West Salem is about 15 miles west of Sparta on I-90.",
        },
        {
          q: "What do you install in West Salem?",
          a: "Coatings for garages, basements, patios, outdoor steps, shops, and outbuildings.",
        },
        {
          q: "Is West Salem between Sparta and La Crosse?",
          a: "Yes. West Salem is on I-90 between Sparta to the east and La Crosse, Onalaska, and Holmen to the west.",
        },
        {
          q: "What should I mention about an unheated garage or outbuilding?",
          a: "Say if the space is unheated and whether paint or a sealer is already on the concrete. Slab condition and temperature affect prep and when the coating can be installed.",
        },
      ],
      nearby: ["sparta", "la-crosse", "onalaska"],
      imageSrc: undefined as string | undefined,
      neighborhoods: [] as string[],
      localConditions: [
        "For a West Salem garage, workshop or outbuilding, describe what uses the floor: passenger vehicles, tools, storage or other equipment. The intended use helps guide the concrete coating discussion.",
        "Mention unheated spaces and any existing paint or sealer before scheduling. The slab condition and temperature affect preparation and installation timing.",
        "For a patio or exterior steps, include photos showing the edges, drainage and worn areas. Outdoor concrete needs a finish selected for exposure and traction.",
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
      caption: "Full flake system, Onalaska",
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
      a: "Fusion Floors is based in Sparta and serves Western Wisconsin — including La Crosse, Onalaska, Holmen, Tomah, and West Salem. If your town isn't on that list, call us anyway; we may still be able to help.",
    },
    {
      q: "How do I get a free estimate?",
      a: "Contact via phone, text, email, or Facebook Messenger — (608) 633-4920, fusionfloorsff@gmail.com.",
    },
    {
      q: "How much does epoxy flooring cost?",
      a: "It depends on square footage, the condition of your existing concrete, and the finish you choose — solid color, flake, or metallic. Most residential garage floors fall in a fairly predictable range, but we'll give you an exact number after seeing the space, not a ballpark over the phone.",
    },
    {
      q: "How long does epoxy flooring actually last?",
      a: "Floor life depends on surface preparation, the coating system, traffic and maintenance. Discuss the expected use of your space and care requirements when choosing a finish.",
    },
    {
      q: "How long does an installation take?",
      a: "Timing depends on floor size, repairs, the selected coating and curing conditions. Ask for a project schedule and separate return-to-use times for foot and vehicle traffic with your estimate.",
    },
    {
      q: "Should I install epoxy myself or hire a professional?",
      a: "DIY epoxy kits can work for a small, low-traffic space, but most peeling and bubbling floors we get called to fix started as a DIY job where the concrete wasn't properly ground first. Professional installation costs more upfront but avoids redoing the whole floor in a year or two.",
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
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  // Real posts only. An empty list keeps /blog out of the sitemap.
  posts: [] as BlogPost[],

  ghl: {
    chatWidgetId: "",
    calendarId: "",
  },
};

export type SiteConfig = typeof siteConfig;
export type ServiceEntry = (typeof siteConfig.services)[number];
export type LocationEntry = (typeof siteConfig.locations)[number];
