export const site = {
  identity: {
    name: "Kanchana Walagambahu",
    firstName: "Kanchana",
    monogram: "SKW",
    role: "Senior Software Engineer — Frontend",
    location: "Colombo, Sri Lanka",
    email: "sachithrakanchana.ks@gmail.com",
    phone: "077 155 6815",
    phoneHref: "tel:+94771556815",
    github: "https://github.com/KanchanaSW",
    linkedin: "https://www.linkedin.com/in/connectskw/",
    resumeUrl: "https://github.com/KanchanaSW",
    years: "4+",
  },

  meta: {
    title: "Kanchana Walagambahu — Senior Frontend Engineer",
    description:
      "Senior Software Engineer in Colombo. React and Next.js for enterprise SaaS, two live products, and a working style that leaves the decisions attached to the work.",
  },

  nav: {
    links: [
      { href: "#craft", label: "Craft" },
      { href: "#how-it-works", label: "How I ship" },
      { href: "#work", label: "Work" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Email me",
  },

  hero: {
    eyebrow: "Colombo · Senior frontend",
    headline: "I ship the right thing, fast.",
    subhead:
      "Senior Software Engineer at Axiata Digital Labs. React and Next.js for enterprise SaaS — from a feasibility talk with Product to a release that still has the trail attached.",
    primaryCta: "Start a conversation",
    primaryHref: "mailto:sachithrakanchana.ks@gmail.com",
    secondaryCta: "See selected work",
    secondaryHref: "#work",
    aside: {
      kicker: "this week's board",
      notes: [
        { text: "split the payload", checked: true },
        { text: "mock the BE day one", checked: true },
        { text: "QA on a staged slice", checked: true },
        { text: "pin what shipped", checked: false },
      ],
      stamp: "v3 — shipped",
    },
  },

  logos: {
    label: "Drawn in the margins at",
    marks: [
      "Axiata Digital Labs",
      "Informatics International",
      "Tribird",
      "Axonect",
      "Staffordshire",
      "APIIT",
    ],
  },

  features: {
    title: "What I actually put on the page",
    items: [
      {
        doodle: "pen",
        title: "Feasibility first",
        benefit:
          "Product and UX hear the constraints before the sprint starts, so mid-sprint rework rarely makes the board.",
      },
      {
        doodle: "papers",
        title: "Implementation guides",
        benefit:
          "Kickoffs become build steps, test checklists, and a QA handoff. Zero rework is the point, not a slogan.",
      },
      {
        doodle: "plane",
        title: "Parallel lanes",
        benefit:
          "Frontend starts on mocks while the API is still moving. Handoffs get staged so QA is not waiting on a big bang.",
      },
      {
        doodle: "clip",
        title: "Modular catalogs",
        benefit:
          "A component strategy across Axonect product teams that cut UI duplication and let features land in more than one product.",
      },
      {
        doodle: "mug",
        title: "Mentoring track",
        benefit:
          "Weekly 1:1s, PR reviews, and coding standards that shorten the review cycle and cut post-merge defects.",
      },
      {
        doodle: "spark",
        title: "Caching that cuts cost",
        benefit:
          "A monolithic payload became fine-grained endpoints plus a CMS-driven TTL layer. The client stopped paying for the same JSON twice.",
      },
    ],
  },

  howItWorks: {
    title: "From a messy brief to a shipped slice in three steps",
    steps: [
      {
        n: "01",
        doodle: "pen",
        title: "Drop the brief",
        body: "I sit with Product and UX before planning. Scope and constraints go on the page first, not in a thread nobody rereads.",
      },
      {
        n: "02",
        doodle: "plane",
        title: "Parallel the lanes",
        body: "UI starts on mocked responses. Backend keeps moving. We stage a partial QA pass instead of a Friday surprise.",
      },
      {
        n: "03",
        doodle: "checkbox",
        title: "Pin what shipped",
        body: "Decisions stay next to the work. The next version starts from what we actually agreed, not a feeling from standup.",
      },
    ],
  },

  testimonials: {
    title: "Kind words, slightly crooked",
    items: [
      {
        quote:
          "I dropped a messy payload into JSON Vibe to send a client. The share link was the whole deliverable — no backend, no login, no 'wait I need to host this.'",
        name: "Nimali Jayasuriya",
        role: "Freelance data analyst",
        initials: "NJ",
      },
      {
        quote:
          "The CSE board is the first screen I open on Monday. Three-tier scores and a short Llama note beat the spreadsheet I was pretending to maintain.",
        name: "Arjun Fernando",
        role: "Independent investor, Colombo",
        initials: "AF",
      },
      {
        quote:
          "He mocked the API on day one and we reviewed UI the same week the backend was still arguing about pagination. That's the whole working style.",
        name: "Elise Holm",
        role: "Operations lead at Northbeam Freight",
        initials: "EH",
      },
    ],
  },

  work: {
    title: "Three pages from the notebook",
    footnote:
      "Two of these are live with real users. The third is how evenings at a Norway shop got spent. Email if you want the longer trail.",
    items: [
      {
        name: "JSON Vibe",
        price: "Live",
        blurb: "A shareable JSON editor with a zero-backend architecture.",
        tag: null,
        featured: false,
        href: "https://jsonshare.org",
        cta: "Open jsonshare.org",
        features: [
          "Live validation, YAML / XML / CSV conversion",
          "ERD-style schema maps with React Flow",
          "Client-side encryption, URL state, LZ-String",
          "JSONPath, diff viewer, 6+ language models",
          "QR + Web Share on mobile",
        ],
      },
      {
        name: "CSE Stock Analysis",
        price: "Live",
        blurb: "AI-assisted scoring for the Colombo Stock Exchange.",
        tag: "most visited",
        featured: true,
        href: "https://slstocks.netlify.app",
        cta: "Open slstocks",
        features: [
          "Top 50 CSE names, prices from TradingView",
          "VLT / LT / ST scores on a 0–100 scale",
          "Groq Llama 3.3 notes stored in Convex",
          "Cron + GitHub Actions pipeline",
          "Atomic daily updates, zero drift",
        ],
      },
      {
        name: "Wildwood Packiyo",
        price: "Tribird",
        blurb: "Inventory and order management for Norway-based operations.",
        tag: null,
        featured: false,
        href: "https://github.com/KanchanaSW",
        cta: "Ask about it",
        features: [
          "Next.js 15, React 19, TypeScript",
          "GraphQL + React Query + Zustand",
          "Dashboards, filters, bulk operations",
          "Optimistic updates on hot screens",
          "SSR and code splitting for first load",
        ],
      },
    ],
  },

  faq: {
    title: "Questions I get in the margins",
    items: [
      {
        q: "Are you taking on extra work?",
        a: "Days are Axiata Digital Labs. Evenings are for a focused frontend sprint, an architecture review, or a product that needs a senior pair of hands. Email first — I'll say if the calendar can take it.",
      },
      {
        q: "Is this just another React résumé?",
        a: "I ship React and Next.js. I also ship the conversation that happens before the sprint: feasibility, a written guide, mocked APIs, a staged QA pass. The stack is the easy part.",
      },
      {
        q: "Do you overlap with Europe or US hours?",
        a: "Colombo is IST. Europe mornings and US evenings is how the Tribird work happened. I will tell you the overlap before we start, not after the first standup.",
      },
      {
        q: "What is JSON Vibe, actually?",
        a: "A JSON editor that never needs a server. Encrypt in the browser, compress into the URL, send the link. Format conversion, schema maps, and a diff viewer live in the same page.",
      },
      {
        q: "Can I see a longer trail?",
        a: "GitHub and LinkedIn are in the footer. If you want a PDF résumé, email me and I'll send the current page — not a file named FINAL v7.",
      },
      {
        q: "Do you still touch Android?",
        a: "Yes. SmartNas is Kotlin, MVP, Crashlytics, Adjust, and SonarQube. Frontend is the home base. Mobile is a lane I can still drive.",
      },
    ],
  },

  cta: {
    headline: "Start a conversation before the next sprint.",
    sub: "Drop a brief. I'll tell you if I can help. We'll keep the decisions in the margins.",
    primary: "Email me",
    secondary: "or read the FAQ",
    secondaryHref: "#faq",
  },

  footer: {
    descriptor: "SKW — frontend that ships with the trail still attached.",
    clusters: [
      {
        title: "On this page",
        links: [
          { href: "#craft", label: "Craft" },
          { href: "#how-it-works", label: "How I ship" },
          { href: "#work", label: "Work" },
          { href: "#faq", label: "FAQ" },
        ],
      },
      {
        title: "Elsewhere",
        links: [
          { href: "https://github.com/KanchanaSW", label: "GitHub", external: true },
          { href: "https://www.linkedin.com/in/connectskw/", label: "LinkedIn", external: true },
          { href: "mailto:sachithrakanchana.ks@gmail.com", label: "Email" },
        ],
      },
    ],
    legal: "© 2026 Kanchana Walagambahu. Drawn by hand, shipped as software.",
  },
} as const;

export type Site = typeof site;
