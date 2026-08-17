/* =============================================================================
 *  ✏️  EDIT THIS ONE FILE TO PERSONALIZE YOUR ENTIRE WEBSITE
 * =============================================================================
 *  Every piece of content on the site lives here — your name, bio, social
 *  links, contact details, resume path, stats, skills... everything.
 *
 *  ✅ This file is ALREADY FILLED with your real details (Muhammad Mohsin Raza).
 *     Review the values below — anything you want to change is a one-line edit.
 *
 *  HOW TO EDIT
 *  -----------
 *  1. Change the text between the quotes below (keep the quotes!).
 *  2. Save the file — the dev server hot-reloads instantly.
 *  3. To hide a platform or feature, set its `url` / value to "" (empty quotes)
 *     and it disappears from the page automatically.
 * ========================================================================== */

export const siteConfig = {
  /* ---------------------------------------------------------------- */
  /* 1. IDENTITY                                                       */
  /* ---------------------------------------------------------------- */
  name: "Muhammad Mohsin Raza", // ✏️ shown in navbar, hero, footer, SEO
  firstName: "Muhammad Mohsin", // ✏️ hero heading, line 1
  lastName: "Raza", //             ✏️ hero heading, line 2 (rendered in gold)
  initials: "MR", //               ✏️ logo badge, favicon & resume card
  title: "Senior Industrial Engineer & Data Analyst", // ✏️ your professional title
  tagline: "Industrial Engineer who builds the tools the floor actually needs.", // ✏️ one-liner

  bio: "Industrial engineer with 10 years across operations, lean manufacturing and supply chain — and the builder of the AI-assisted web apps, dashboards and mini-ERP tools that make the floor run smarter. Based in Dammam, Saudi Arabia.", // ✏️ hero paragraph

  availability: "Open to new opportunities", // ✏️ small badge text in the hero

  /* ---------------------------------------------------------------- */
  /* 2. SEO / SITE URL                                                 */
  /* ---------------------------------------------------------------- */
  /* 🔗 After deploying to Vercel, replace this with your real URL
   *    (e.g. "https://mohsin-raza.vercel.app" or your own domain). */
  siteUrl: "https://www.your-domain.com",
  description:
    "Portfolio of Muhammad Mohsin Raza — Senior Industrial Engineer & Data Analyst with 10+ years in operations, lean manufacturing and supply chain, building AI-assisted web apps and dashboards from Dammam, Saudi Arabia.", // ✏️ meta description shown in Google results
  keywords: [
    "industrial engineer",
    "data analyst",
    "lean manufacturing",
    "operations",
    "supply chain",
    "continuous improvement",
    "dashboards",
    "portfolio",
    "Dammam",
  ],

  /* ---------------------------------------------------------------- */
  /* 3. NAVIGATION                                                     */
  /* ---------------------------------------------------------------- */
  nav: [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "resume", label: "Resume", href: "#resume" },
    { id: "connect", label: "Connect", href: "#connect" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],

  /* ---------------------------------------------------------------- */
  /* 4. RESUME (PDF)                                                   */
  /* ---------------------------------------------------------------- */
  /* 📄 HOW TO UPDATE YOUR RESUME:
   *    1. Overwrite the file at:   /public/resume.pdf
   *       (keep the filename, or change `path` below)
   *    2. Update `updated` with the date of your latest revision.
   *    ✅ Your real resume is already installed (2 pages). */
  resume: {
    path: "/resume.pdf", //                    ✏️ [RESUME_FILE_PATH]
    fileName: "Muhammad-Mohsin-Raza-Resume.pdf", // ✏️ name used for the download
    updated: "August 2026", //                 ✏️ e.g. "January 2026"
    pages: "2 pages", //                       ✅ matches your resume
  },

  /* ---------------------------------------------------------------- */
  /* 5. SOCIAL LINKS — edit each `url` (set to "" to hide a network)   */
  /* ---------------------------------------------------------------- */
  socials: [
    {
      id: "linkedin",
      name: "LinkedIn",
      handle: "in/engrmohsinraza05",
      url: "https://www.linkedin.com/in/engrmohsinraza05/", // ✅ your LinkedIn
      brand: "linkedin",
    },
    /* Hidden for now — add your URL to bring any of these back: */
    {
      id: "github", //                 ✏️ [GITHUB_URL]
      name: "GitHub",
      handle: "",
      url: "",
      brand: "github",
    },
    {
      id: "x", //                      ✏️ [TWITTER_URL] (Twitter / X)
      name: "Twitter / X",
      handle: "",
      url: "",
      brand: "x",
    },
    {
      id: "instagram", //              ✏️ [INSTAGRAM_URL]
      name: "Instagram",
      handle: "",
      url: "",
      brand: "instagram",
    },
    {
      id: "facebook", //               ✏️ [FACEBOOK_URL]
      name: "Facebook",
      handle: "",
      url: "",
      brand: "facebook",
    },
    {
      id: "behance", //                optional — set url to "" to hide
      name: "Behance",
      handle: "",
      url: "",
      brand: "behance",
    },
    {
      id: "dribbble", //               optional — set url to "" to hide
      name: "Dribbble",
      handle: "",
      url: "",
      brand: "dribbble",
    },
  ],

  /* ---------------------------------------------------------------- */
  /* 6. CONTACT DETAILS                                                */
  /* ---------------------------------------------------------------- */
  contact: {
    email: "rmohsin16@gmail.com", //      ✅ your email
    phone: "+966 56 070 5142", //         ✅ displayed number
    phoneHref: "tel:+966560705142", //    ✅ digits only, for the tel: link
    whatsapp: "966560705142", //          ✅ digits only (country code + number) — set "" to hide the WhatsApp card
    whatsappDisplay: "+966 56 070 5142", // ✅ how the WhatsApp card displays the number
    address: "2nd Industrial City", // ✅ your address (matches your resume)
    addressLine2: "Dammam 34333, Eastern Province, Saudi Arabia", // ✅ line 2
    mapUrl: "https://maps.google.com/?q=2nd+Industrial+City,+Dammam,+Saudi+Arabia", // ✏️ link opened when the address card is clicked

    /* 🗺️ OPTIONAL GOOGLE MAPS EMBED:
     *   Paste a Google Maps embed URL below and a live map appears in the
     *   Contact section. Get one at: google.com/maps → Share → "Embed a map"
     *   → copy the URL inside src="...". Leave "" to hide the map. */
    mapEmbedUrl: "",

    /* 📮 HOW THE CONTACT FORM REACHES YOU — three modes:
     *   "mailto"   → opens the visitor's email app, pre-filled to your
     *                address (current setup, zero configuration)
     *   "endpoint" → POST to a service like Formspree — paste its endpoint
     *                in formEndpoint below (free form at formspree.io)
     *   "demo"     → simulates a successful send (for previewing the UI)  */
    formMode: "mailto" as "mailto" | "endpoint" | "demo",
    formEndpoint: "", // e.g. "https://formspree.io/f/abcdwxyz"
  },

  /* ---------------------------------------------------------------- */
  /* 7. HERO STATS                                                     */
  /* ---------------------------------------------------------------- */
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "15+", label: "Web Apps & Dashboards" },
    { value: "5", label: "ERP Areas Automated" },
    { value: "2025", label: "Based in Dammam Since" },
  ],

  /* ---------------------------------------------------------------- */
  /* 8. ABOUT SECTION                                                  */
  /* ---------------------------------------------------------------- */
  about: {
    paragraphs: [
      "I'm an Industrial Engineer with nearly ten years of experience across operations, lean manufacturing, operational excellence, continuous improvement, planning and supply chain.",
      "What sets me apart is that I also build the tools: proficient in MS Excel, ERP systems and Google Sheets, I've developed many AI-assisted web apps — a mini-ERP covering production, planning, attendance, dashboards and supply chain — that replaced manual chaos with a single source of truth.",
      "Since January 2025 I've been working as an Industrial Engineer in Dammam, Saudi Arabia — turning processes into systems, and data into decisions.",
    ],
    facts: [
      { icon: "map-pin", label: "Location", value: "Dammam, Saudi Arabia" },
      { icon: "briefcase", label: "Experience", value: "10+ Years" },
      { icon: "languages", label: "Languages", value: "English · Urdu" },
      { icon: "globe", label: "Availability", value: "Open to New Roles" },
    ],
    strengths: [
      { icon: "target", title: "Operational Excellence", text: "Lean thinking applied end-to-end — cut waste, lift throughput, sustain the gains." },
      { icon: "bar-chart-3", title: "Data-Driven Decisions", text: "Dashboards and analysis that turn shop-floor data into clear, confident action." },
      { icon: "layers", title: "Practical Digital Tools", text: "I design and build the web apps, trackers and mini-ERP systems the floor actually needs." },
      { icon: "clock", title: "Dependable Delivery", text: "Clear scope, realistic timelines and follow-through — shipped, trained, adopted." },
    ],
    skills: [
      {
        title: "Industrial Engineering",
        items: [
          { name: "Operations Management", level: 95 },
          { name: "Lean Manufacturing", level: 92 },
          { name: "Continuous Improvement", level: 90 },
          { name: "Supply Chain & Planning", level: 88 },
        ],
      },
      {
        title: "Data & Digital Tools",
        items: [
          { name: "MS Excel & Google Sheets", level: 95 },
          { name: "Dashboards & Reporting", level: 92 },
          { name: "ERP Systems", level: 90 },
          { name: "Web Apps & AI Tools", level: 85 },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* 9. RESUME SECTION (text around the card)                          */
  /* ---------------------------------------------------------------- */
  resumeSection: {
    description:
      "A complete record of my experience, projects, education and certifications — typeset for easy reading and ready to share.",
    highlights: [
      "10+ years of professional experience",
      "Operations, Lean & Supply Chain",
      "ERP & web app projects",
      "Education & certifications",
    ],
  },

  /* ---------------------------------------------------------------- */
  /* 10. SOCIAL SECTION (text around the cards)                        */
  /* ---------------------------------------------------------------- */
  connectSection: {
    description:
      "I share professional updates, projects and industry insights on LinkedIn — let's connect there, or email me anytime.",
  },

  /* ---------------------------------------------------------------- */
  /* 11. CONTACT SECTION (text around the form)                        */
  /* ---------------------------------------------------------------- */
  contactSection: {
    description:
      "Have a role in mind, an operations challenge, or an idea for a tool your team needs? My inbox is always open — I usually reply within 24 hours.",
  },
};

export type Social = (typeof siteConfig.socials)[number];
