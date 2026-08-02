export type Service = {
  id: string;
  num: string;
  title: string;
  tagline: string;
  desc: string;
  deliverables: string[];
};

export type CaseStudy = {
  id: string;
  client: string;
  scope: string;
  result: string;
  url?: string;
  tags: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const services: Service[] = [
  {
    id: "sales-pages",
    num: "01",
    title: "Sales pages",
    tagline: "Pages that convert, not decorate",
    desc: "High-converting landing pages for launches, funnels and single offers. Copy, structure, and design built around one job: turning visitors into orders.",
    deliverables: ["Funnel-ready landing pages", "Order bump + upsell flows", "Copywriting + A/B variants"],
  },
  {
    id: "websites-cms",
    num: "02",
    title: "Websites & CMS",
    tagline: "Fast, maintainable company sites",
    desc: "Company and product websites that load fast, rank, and stay easy to update. Headless CMS or static, depending on how your team works.",
    deliverables: ["Company / product sites", "Headless CMS setup", "SEO foundations + analytics"],
  },
  {
    id: "ecommerce",
    num: "03",
    title: "E-commerce with 3-step COD",
    tagline: "COD checkout that converts on mobile",
    desc: "Full e-commerce with cash-on-delivery checkout built for Thai buyers: 3-step mobile flow, order tracking, and an admin panel your ops team can run.",
    deliverables: ["3-step COD checkout", "Order + lead admin panel", "Payment / delivery integrations"],
  },
  {
    id: "lms",
    num: "04",
    title: "LMS & digital products",
    tagline: "Sell knowledge, deliver it instantly",
    desc: "Course platforms and digital product delivery: secure access, entitlements, student dashboards, and automated fulfillment that works after the sale.",
    deliverables: ["Course platform", "Access control + entitlements", "Automated fulfillment webhooks"],
  },
  {
    id: "integrations",
    num: "05",
    title: "Integrations & automations",
    tagline: "Systems that stop doing busywork",
    desc: "n8n and custom integrations that connect your store, CRM, docs and AI tools, so orders, leads and data flow without someone copying them by hand.",
    deliverables: ["n8n workflow automations", "CRM / store / AI connections", "Data pipelines + reporting"],
  },
  {
    id: "platforms",
    num: "06",
    title: "Platform buildouts",
    tagline: "Product work for serious projects",
    desc: "Full platform development when a website is not enough: multi-tenant apps, dashboards, and product builds scoped, shipped and supported end to end.",
    deliverables: ["Product strategy + scoping", "Full-stack development", "Ongoing maintenance"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "drjade",
    client: "Dr.Jade",
    scope: "E-commerce + sales pages",
    result: "COD storefront live with 3-step checkout and order management",
    url: "https://shop.drjadeofficial.com",
    tags: ["E-commerce", "COD", "Sales pages"],
  },
  {
    id: "barbestro",
    client: "Barbestro",
    scope: "Sales funnel workspace",
    result: "Sales page, checkout, admin, order bump and upsell flow shipped",
    tags: ["Funnel", "Checkout", "Admin"],
  },
  {
    id: "bossnoi",
    client: "Bossnoi",
    scope: "Masterclass landing page",
    result: "Photography masterclass page rebuilt in Next.js, pixel-faithful",
    tags: ["Landing page", "Next.js"],
  },
  {
    id: "camellia",
    client: "Camellia",
    scope: "Influencer + sales program",
    result: "Sales pages and influencer tracking program in planning",
    tags: ["Sales pages", "Tracking"],
  },
  {
    id: "networkz",
    client: "Networkz Platform",
    scope: "Platform product",
    result: "Platform application running on managed infrastructure",
    tags: ["Platform", "Infra"],
  },
  {
    id: "zintelligence",
    client: "Z Intelligence",
    scope: "Website + product build",
    result: "Company website and product build for the Z line",
    tags: ["Website", "Product"],
  },
  {
    id: "digital-lms",
    client: "Digital Product + LMS",
    scope: "Course delivery system",
    result: "LMS backend with entitlements, refund webhooks and student access",
    tags: ["LMS", "Backend", "Automation"],
  },
];

export const team: TeamMember[] = [
  {
    name: "Techatham Nakinkul",
    role: "Founder & lead",
    bio: "Sets direction, owns the bar, and keeps every project shippable.",
    initials: "TN",
  },
  {
    name: "Krit",
    role: "Full-stack engineer",
    bio: "Builds the systems: checkouts, backends, and everything that has to survive production.",
    initials: "KR",
  },
  {
    name: "Pathomphop",
    role: "Data engineer",
    bio: "Turns scraped data and messy logs into reports and dashboards the business can act on.",
    initials: "PP",
  },
];

export const contactEmail = "czteam6868@gmail.com";
export const telegramHandle = "@cznakinkul";
