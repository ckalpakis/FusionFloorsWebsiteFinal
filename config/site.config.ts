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
    headline: "Epoxy Flooring & Garage Floor Coatings in Sparta, WI",
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
      h1: "Epoxy Flooring & Garage Floor Coating Services in Sparta, WI",
      metaDescription:
        "Based in Sparta, Fusion Floors offers epoxy flooring for garages, basements, patios and commercial spaces. Discuss your concrete coating project and get a free estimate.",
      blurb:
        "Fusion Floors is based in Sparta and serves Western Wisconsin with concrete coatings for garages, basements, patios, outdoor spaces, and commercial properties.",
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
      h1: "Epoxy Flooring & Garage Floor Coatings in La Crosse, WI",
      metaDescription:
        "Explore garage floor coatings, basement epoxy and commercial concrete coatings in La Crosse, WI. Contact Sparta-based Fusion Floors for a free estimate.",
      blurb:
        "Fusion Floors installs coatings for garages, basements, patios, outdoor spaces, and commercial floors throughout La Crosse from our base in Sparta.",
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
      h1: "Epoxy Flooring & Garage Floor Coatings in Onalaska, WI",
      metaDescription:
        "Plan an epoxy garage floor, basement coating or patio finish in Onalaska, WI. Fusion Floors serves the area from Sparta. Request a free concrete coating estimate.",
      blurb:
        "Fusion Floors coats garages, basements, patios, outdoor spaces, and commercial floors across Onalaska from our base in Sparta.",
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
      h1: "Epoxy Flooring & Garage Floor Coatings in Holmen, WI",
      metaDescription:
        "Discuss garage, basement, patio and shop floor coatings in Holmen, WI with Fusion Floors. Explore epoxy finishes and request a free estimate for your concrete.",
      blurb:
        "Fusion Floors serves Holmen with durable concrete coatings for garages, basements, patios, outdoor spaces, shops, and commercial floors.",
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
      h1: "Epoxy Flooring & Garage Floor Coatings in Tomah, WI",
      metaDescription:
        "Garage and commercial epoxy flooring in Tomah, WI from Sparta-based Fusion Floors. Discuss shop floors, basement coatings or outdoor concrete and get a free estimate.",
      blurb:
        "Fusion Floors installs coatings in Tomah for garages, patios, outdoor spaces, shops, and commercial floors from our base in Sparta.",
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
      h1: "Epoxy Flooring & Garage Floor Coatings in West Salem, WI",
      metaDescription:
        "Residential garage floor coatings, basement epoxy and outdoor concrete coatings in West Salem, WI. Contact Fusion Floors to discuss your floor and get a free estimate.",
      blurb:
        "Fusion Floors serves West Salem with coatings for garages, basements, patios, outdoor spaces, shops, and outbuildings — a short drive west of Sparta on I-90.",
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
