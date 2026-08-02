export type L = "th" | "en";

export type Bi = { th: string; en: string };

export type Service = {
  id: string;
  num: string;
  title: Bi;
  tagline: Bi;
  desc: Bi;
  forWhom: Bi;
  deliverables: Bi[];
  proof: { client: string; link?: string; note: Bi };
  starting: Bi;
  url: string;
};

export type CaseStudy = {
  id: string;
  client: string;
  scope: Bi;
  problem: Bi;
  built: Bi;
  result: Bi;
  stack: string[];
  url?: string;
  status: Bi;
};

export type PricingTier = {
  id: string;
  name: Bi;
  price: string;
  unit: Bi;
  desc: Bi;
  includes: Bi[];
  excludes: Bi[];
  cta: Bi;
  featured?: boolean;
};

export type TeamMember = {
  name: string;
  role: Bi;
  bio: Bi;
  initials: string;
};

export const site = {
  name: { th: "เอชดับเบิลยู ทีม", en: "HW Team" },
  tagline: {
    th: "ทีมเว็บไซต์ที่สร้างเพจที่ขายได้",
    en: "The web team that builds pages that sell",
  },
  contactEmail: "czteam6868@gmail.com",
  telegram: "@cznakinkul",
  line: "czteam6868@gmail.com",
};

export const nav = [
  { href: "/", label: { th: "หน้าแรก", en: "Home" } },
  { href: "/services", label: { th: "บริการ", en: "Services" } },
  { href: "/work", label: { th: "ผลงาน", en: "Work" } },
  { href: "/process", label: { th: "กระบวนการ", en: "Process" } },
  { href: "/pricing", label: { th: "แพ็กเกจ", en: "Pricing" } },
  { href: "/about", label: { th: "เกี่ยวกับเรา", en: "About" } },
  { href: "/contact", label: { th: "ติดต่อ", en: "Contact" } },
];

export const services: Service[] = [
  {
    id: "sales-pages",
    num: "01",
    title: { th: "เพจขายของ", en: "Sales pages" },
    tagline: { th: "เพจขายกับช่องทางขายครบวงจร", en: "Pages + funnels that convert" },
    desc: {
      th: "เพจขายสินค้าและแฟนเนลสำหรับยิงโฆษณา วางโครงสร้างตามหลัก Conversion :  จากหัวข้อ ข้อเสนอ จนถึงปุ่มสั่งซื้อ ออกแบบมาให้เปลี่ยนคนดูเป็นออเดอร์จริง",
      en: "Conversion-first landing pages and funnels built for paid traffic. Structure, copy and design aligned around one job: turning visitors into orders.",
    },
    forWhom: {
      th: "เจ้าของสินค้าที่อยากขายออนไลน์ผ่านเพจเดียวจบ :  เหมาะกับสินค้าใหม่ หรือโปรโมชันตามฤดูกาล",
      en: "Brands that want a single high-converting page for launches, campaigns, or a flagship offer.",
    },
    deliverables: [
      { th: "เพจขาย + หน้า Thank you", en: "Sales page + thank-you page" },
      { th: "ฟอร์มสั่งซื้อ / COD 3 ขั้น", en: "Order form / 3-step COD flow" },
      { th: "วางพิกเซล + ติดตั้ง GA4", en: "Pixel + GA4 setup" },
      { th: "คัดลอกข้อความโฆษณา", en: "Ad copy variants" },
    ],
    proof: {
      client: "Barbestro, Bossnoi",
      note: { th: "เพจขายที่เปิดตัวแล้ว วัดผลยอดสั่งซื้อจริง", en: "Live sales pages with real order data" },
    },
    starting: { th: "เริ่มต้น ฿10,000", en: "From ฿10,000" },
    url: "/services/sales-pages",
  },
  {
    id: "websites",
    num: "02",
    title: { th: "เว็บไซต์บริษัท", en: "Websites & CMS" },
    tagline: { th: "เว็บเร็ว โหลดไว ดูแลเองได้", en: "Fast, maintainable company sites" },
    desc: {
      th: "เว็บไซต์บริษัทแบบหลายหน้า สร้างด้วย Astro / Next.js เชื่อม CMS อย่าง Sanity ให้ทีมแก้ไขเนื้อหาเองได้ เน้นความเร็วและติดอันดับ SEO",
      en: "Multi-page company sites on Astro / Next.js with a headless CMS (Sanity) your team can edit. Built for speed and SEO.",
    },
    forWhom: {
      th: "บริษัทที่ต้องการเว็บไซต์เป็นหน้าร้านออนไลน์ของแบรนด์ :  ดูแลเนื้อหาเองได้ ไม่ต้องง้อช่าง",
      en: "Companies that want a credible online presence they can update without a developer.",
    },
    deliverables: [
      { th: "เว็บไซต์หลายหน้า + ระบบภาษา", en: "Multi-page site + i18n" },
      { th: "ติดตั้ง Sanity CMS", en: "Sanity CMS setup" },
      { th: "SEO พื้นฐาน + sitemap", en: "SEO foundations + sitemap" },
      { th: "โฮสต์ในไทย (Coolify)", en: "Thai-hosted deployment" },
    ],
    proof: {
      client: "Dr.Jade",
      link: "https://drjadeofficial.com",
      note: { th: "เว็บจริงที่ใช้งานจริงพร้อม CMS", en: "Live production site with CMS" },
    },
    starting: { th: "เริ่มต้น ฿25,000", en: "From ฿25,000" },
    url: "/services/websites",
  },
  {
    id: "ecommerce",
    num: "03",
    title: { th: "ร้านค้าออนไลน์ + COD", en: "E-commerce + COD" },
    tagline: { th: "ระบบสั่งซื้อเก็บเงินปลายทาง 3 ขั้น", en: "3-step COD checkout that converts" },
    desc: {
      th: "ร้านค้าออนไลน์ครบวงจรพร้อมช่องทางชำระเงินปลายทาง (COD) หน้าสั่งซื้อ 3 ขั้นตอนจบ ใช้งานง่ายบนมือถือ มีหน้าระบบหลังให้ทีมดูแลออเดอร์",
      en: "Full e-commerce with cash-on-delivery checkout built for Thai buyers: a 3-step mobile flow plus an admin panel your ops team can run.",
    },
    forWhom: {
      th: "แบรนด์ที่ขายผ่าน TikTok / Facebook แล้วอยากมีร้านค้าเป็นของตัวเอง ลดการพึ่งเพจโฆษณาอย่างเดียว",
      en: "Brands selling via social that want an owned storefront with COD as the default payment.",
    },
    deliverables: [
      { th: "หน้าสั่งซื้อ COD 3 ขั้นตอน", en: "3-step COD checkout" },
      { th: "หน้าระบบหลังจัดการออเดอร์", en: "Order admin panel" },
      { th: "เชื่อมต่อขนส่ง + พิกเซล", en: "Shipping + pixel integrations" },
      { th: "ระบบติดตามออเดอร์", en: "Order tracking" },
    ],
    proof: {
      client: "Dr.Jade",
      link: "https://shop.drjadeofficial.com",
      note: { th: "ร้านค้า COD ที่ขายจริง", en: "Live COD storefront" },
    },
    starting: { th: "เริ่มต้น ฿45,000", en: "From ฿45,000" },
    url: "/services/ecommerce",
  },
  {
    id: "lms",
    num: "04",
    title: { th: "คอร์สออนไลน์ + LMS", en: "Digital products & LMS" },
    tagline: { th: "ขายความรู้ ส่งมอบอัตโนมัติ", en: "Sell knowledge, deliver it instantly" },
    desc: {
      th: "แพลตฟอร์มคอร์สออนไลน์และสินค้าดิจิทัล ระบบสมาชิก จัดการสิทธิ์การเข้าถึง และส่งมอบสินค้าอัตโนมัติหลังชำระเงิน :  นักเรียนได้ของทันที",
      en: "Course platforms and digital product delivery: memberships, entitlements, and automated fulfillment that works after the sale.",
    },
    forWhom: {
      th: "อินฟลูเอนเซอร์ โค้ช และเจ้าของคอร์สที่อยากขายความรู้เป็นระบบ ไม่ต้องส่งไฟล์ด้วยมือ",
      en: "Coaches and creators who want to sell courses at scale without manual delivery.",
    },
    deliverables: [
      { th: "แพลตฟอร์มคอร์ส + หน้าสมาชิก", en: "Course platform + member area" },
      { th: "ระบบสิทธิ์การเข้าถึง", en: "Access control + entitlements" },
      { th: "ส่งมอบอัตโนมัติหลังชำระเงิน", en: "Automated fulfillment" },
      { th: "ฐานข้อมูล Supabase ของตัวเอง", en: "Own Supabase backend" },
    ],
    proof: {
      client: "Classroom 24",
      link: "https://learn.aiflowlab.co",
      note: { th: "LMS ที่ใช้งานจริง", en: "Live LMS in production" },
    },
    starting: { th: "เริ่มต้น ฿50,000", en: "From ฿50,000" },
    url: "/services/lms",
  },
  {
    id: "platforms",
    num: "05",
    title: { th: "แพลตฟอร์ม / เว็บแอป", en: "Platforms & web apps" },
    tagline: { th: "ระบบหลังบ้านที่โตตามธุรกิจ", en: "Product work for serious projects" },
    desc: {
      th: "พัฒนาแพลตฟอร์มและเว็บแอปพลิเคชัน ระบบสมาชิก แดชบอร์ด แอปแบบมีบทบาทผู้ใช้งาน :  วางสโคปให้ชัด สร้างเสร็จ พร้อมดูแลต่อเนื่อง",
      en: "Full platform development: member systems, dashboards, role-based apps :  scoped, shipped, and supported end to end.",
    },
    forWhom: {
      th: "ธุรกิจที่เพจเดียวไม่พอ ต้องมีระบบหลังบ้านเป็นของตัวเอง",
      en: "Businesses that outgrew a website and need a real product.",
    },
    deliverables: [
      { th: "วางสโคป + สถาปัตยกรรม", en: "Scoping + architecture" },
      { th: "ระบบสมาชิก / บทบาทผู้ใช้", en: "Auth + role-based access" },
      { th: "แดชบอร์ด + รายงาน", en: "Dashboards + reporting" },
      { th: "ดูแลและอัปเดตต่อเนื่อง", en: "Ongoing maintenance" },
    ],
    proof: {
      client: "Networkz, Z Intelligence",
      note: { th: "แพลตฟอร์มที่กำลังพัฒนา", en: "Platforms in active development" },
    },
    starting: { th: "เริ่มต้น ฿150,000", en: "From ฿150,000" },
    url: "/services/platforms",
  },
  {
    id: "ai-data",
    num: "06",
    title: { th: "AI + ข้อมูล", en: "AI, data & automation" },
    tagline: { th: "ทีม AI ทำงานแทนงานซ้ำ", en: "AI agents that kill busywork" },
    desc: {
      th: "สคริปเปอร์ข้อมูล เทรนด์ตลาด ระบบอัตโนมัติ n8n และ AI agents :  เก็บข้อมูล สรุปผล ส่งรายงาน ให้คนในทีมไม่ต้องคัดลอกข้อมูลด้วยมือ",
      en: "Scrapers, market data, n8n automations and AI agents that collect, summarize and report :  so your team stops copying data by hand.",
    },
    forWhom: {
      th: "ธุรกิจที่ต้องการข้อมูลคู่แข่ง เทรนด์ตลาด หรือลดงานเอกสารซ้ำซ้อนด้วยระบบอัตโนมัติ",
      en: "Teams that need market intel, competitor data, or automation of repetitive work.",
    },
    deliverables: [
      { th: "สคริปเปอร์ + ฐานข้อมูล", en: "Scrapers + database" },
      { th: "แดชบอร์ดเทรนด์ตลาด", en: "Market trend dashboards" },
      { th: "ระบบอัตโนมัติ n8n", en: "n8n automations" },
      { th: "AI agents + แชทบอท", en: "AI agents + chatbots" },
    ],
    proof: {
      client: "Camellia, Toy Data",
      note: { th: "สคริปเปอร์ข้อมูล + แดชบอร์ดที่ใช้งานจริง", en: "Live data scrapers + dashboards" },
    },
    starting: { th: "เริ่มต้น ฿30,000", en: "From ฿30,000" },
    url: "/services/ai-data",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "dr-jade",
    client: "Dr.Jade",
    scope: { th: "เว็บไซต์ + ร้านค้า COD", en: "Full web + COD commerce" },
    problem: {
      th: "แบรนด์สุขภาพที่ต้องการทั้งเว็บไซต์บริษัทที่ดูน่าเชื่อถือ และร้านค้าออนไลน์ที่สั่งซื้อง่ายบนมือถือ",
      en: "A health brand that needed a credible company site plus a storefront that converts on mobile.",
    },
    built: {
      th: "เว็บไซต์บริษัทหลายหน้าบน Astro + Sanity CMS พร้อมร้านค้า COD 3 ขั้นตอน แยกโดเมน shop",
      en: "Multi-page Astro site with Sanity CMS, plus a 3-step COD storefront on its own subdomain.",
    },
    result: {
      th: "ร้านค้าออนไลน์ใช้งานจริง รับออเดอร์ COD ทุกวัน ทีมดูแลเนื้อหาเองผ่าน CMS",
      en: "Live COD storefront taking daily orders; content managed in-house via CMS.",
    },
    stack: ["Astro", "Sanity", "Next.js", "Coolify"],
    url: "https://shop.drjadeofficial.com",
    status: { th: "ใช้งานจริง", en: "Live" },
  },
  {
    id: "barbestro",
    client: "Barbestro",
    scope: { th: "เพจขาย + แฟนเนล", en: "Sales page + funnel" },
    problem: {
      th: "ต้องการเพจขายที่ยิงโฆษณาแล้ววัดผลเป็นออเดอร์ได้ทันที",
      en: "Needed a paid-traffic sales page that converts to measurable orders.",
    },
    built: {
      th: "เพจขาย + หน้าเช็คเอาต์ + ระบบหลังบ้านจัดการออเดอร์ + order bump / upsell",
      en: "Sales page, checkout, admin panel, order bump and upsell flow.",
    },
    result: {
      th: "แฟนเนลครบวงจรส่งมอบแล้ว พร้อมขยายตามแคมเปญ",
      en: "Full funnel shipped and ready to scale with campaigns.",
    },
    stack: ["Next.js", "COD", "Admin"],
    status: { th: "ส่งมอบแล้ว", en: "Shipped" },
  },
  {
    id: "bossnoi",
    client: "Bossnoi",
    scope: { th: "เพจขายคอร์ส", en: "Course sales page" },
    problem: {
      th: "มาสเตอร์คลาสถ่ายภาพต้องการเพจขายที่ถ่ายทอดคุณค่าคอร์สได้ชัด",
      en: "A photography masterclass needed a page that sells the course's value clearly.",
    },
    built: {
      th: "เพจขายมาสเตอร์คลาสสร้างใหม่ด้วย Next.js ตรงตามดีไซน์ต้นฉบับทุกพิกเซล",
      en: "Masterclass landing page rebuilt in Next.js, pixel-faithful to the original design.",
    },
    result: {
      th: "เพจโหลดเร็วขึ้น รองรับการยิงแคมเปญใหม่",
      en: "Faster page, ready for new campaigns.",
    },
    stack: ["Next.js", "Landing"],
    status: { th: "ส่งมอบแล้ว", en: "Shipped" },
  },
  {
    id: "camellia",
    client: "Camellia",
    scope: { th: "เพจขาย + ข้อมูล", en: "Sales page + data" },
    problem: {
      th: "แบรนด์เครื่องสำอางต้องการทั้งเพจขายและระบบติดตามอินฟลูเอนเซอร์",
      en: "A beauty brand needed sales pages plus influencer tracking.",
    },
    built: {
      th: "เพจขาย + โปรแกรมติดตามอินฟลูเอนเซอร์ เก็บข้อมูลการโปรโมตเป็นระบบ",
      en: "Sales pages plus an influencer tracking program.",
    },
    result: {
      th: "วางแผนและพัฒนาอยู่ในเฟส 1-2 ตามโรดแมป",
      en: "Phase 1-2 in progress per roadmap.",
    },
    stack: ["Next.js", "Tracking", "Data"],
    status: { th: "กำลังพัฒนา", en: "In progress" },
  },
  {
    id: "networkz",
    client: "Networkz Platform",
    scope: { th: "แพลตฟอร์ม", en: "Platform build" },
    problem: {
      th: "ต้องการแพลตฟอร์มเป็นของตัวเอง ไม่ใช่เว็บไซต์หน้าเดียว",
      en: "Needed a real platform product, not a brochure site.",
    },
    built: {
      th: "พัฒนาแพลตฟอร์มเต็มรูปแบบบนโครงสร้างพื้นฐานที่จัดการผ่าน Coolify",
      en: "Full platform application running on managed infrastructure.",
    },
    result: {
      th: "แอปพลิเคชันรันบนเซิร์ฟเวอร์จริง พร้อมขยายฟีเจอร์ต่อเนื่อง",
      en: "Application running in production, expanding continuously.",
    },
    stack: ["Next.js", "Supabase", "Coolify"],
    status: { th: "กำลังพัฒนา", en: "In progress" },
  },
  {
    id: "z-intelligence",
    client: "Z Intelligence",
    scope: { th: "เว็บไซต์ + AI", en: "Website + AI engine" },
    problem: {
      th: "แบรนด์สาย Z ต้องการเว็บไซต์ที่แสดงความสามารถด้าน AI ได้จริง",
      en: "Wanted a website that demonstrates real AI capability.",
    },
    built: {
      th: "เว็บไซต์บริษัท + ระบบ AI เบื้องหลัง เชื่อมต่อข้อมูลและแสดงผลอัตโนมัติ",
      en: "Company website plus AI engine wired to live data.",
    },
    result: {
      th: "เว็บไซต์และระบบ AI อยู่ระหว่างพัฒนา",
      en: "Website and AI system in development.",
    },
    stack: ["Next.js", "AI", "n8n"],
    status: { th: "กำลังพัฒนา", en: "In progress" },
  },
  {
    id: "lms",
    client: "Digital Product + LMS",
    scope: { th: "ระบบคอร์สออนไลน์", en: "Course delivery system" },
    problem: {
      th: "ต้องขายคอร์สออนไลน์และส่งมอบสิทธิ์การเข้าถึงอัตโนมัติหลังชำระเงิน",
      en: "Needed to sell courses with automatic access delivery after payment.",
    },
    built: {
      th: "LMS backend ระบบสิทธิ์การเข้าถึง webhook ยกเลิก/คืนเงิน และหน้าสมาชิก",
      en: "LMS backend with entitlements, refund webhooks and student access.",
    },
    result: {
      th: "ใช้งานจริงที่ learn.aiflowlab.co (Classroom 24)",
      en: "Live at learn.aiflowlab.co (Classroom 24).",
    },
    stack: ["NestJS", "Supabase", "LMS"],
    url: "https://learn.aiflowlab.co",
    status: { th: "ใช้งานจริง", en: "Live" },
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: "standard",
    name: { th: "Standard", en: "Standard" },
    price: "฿10,000",
    unit: { th: "/ แพ็กเกจ", en: "/ package" },
    desc: {
      th: "เพจขาย 1-3 หน้า สำหรับยิงแคมเปญเดียวจบ",
      en: "1-3 sales pages for a single campaign.",
    },
    includes: [
      { th: "เพจขาย 1-3 หน้า", en: "1-3 sales pages" },
      { th: "ฟอร์มสั่งซื้อ / COD", en: "Order form / COD" },
      { th: "วางพิกเซล + GA4", en: "Pixel + GA4" },
      { th: "ส่งงานใน 7-14 วัน", en: "Delivery in 7-14 days" },
    ],
    excludes: [
      { th: "ระบบหลังบ้าน", en: "Admin panel" },
      { th: "ดีไซน์สั่งทำพิเศษ", en: "Custom design" },
    ],
    cta: { th: "เริ่มโปรเจกต์", en: "Start a project" },
  },
  {
    id: "pro",
    name: { th: "Pro", en: "Pro" },
    price: "฿15,000",
    unit: { th: "/ แฟนเนล", en: "/ funnel" },
    desc: {
      th: "แฟนเนลครบวงจร + หน้า UI สำหรับอินฟลูเอนเซอร์",
      en: "Full funnel plus influencer-facing UI.",
    },
    includes: [
      { th: "เพจขาย + หน้า Thank you", en: "Sales + thank-you pages" },
      { th: "หน้า UI สำหรับอินฟลูเอนเซอร์", en: "Influencer UI pages" },
      { th: "order bump / upsell", en: "Order bump / upsell" },
      { th: "คัดลอกข้อความโฆษณา", en: "Ad copy variants" },
    ],
    excludes: [
      { th: "ระบบหลังบ้านเต็มรูปแบบ", en: "Full admin backend" },
    ],
    cta: { th: "เริ่มโปรเจกต์", en: "Start a project" },
    featured: true,
  },
  {
    id: "custom",
    name: { th: "Custom", en: "Custom" },
    price: "ตามสโคป",
    unit: { th: "", en: "" },
    desc: {
      th: "ร้านค้า COD, LMS, แพลตฟอร์ม, ระบบ AI :  คิดราคาตามขอบเขตงาน",
      en: "COD stores, LMS, platforms, AI systems :  quoted per scope.",
    },
    includes: [
      { th: "วางสโคปและประมาณการฟรี", en: "Free scoping + estimate" },
      { th: "แผนการพัฒนาเป็นเฟส", en: "Phased delivery plan" },
      { th: "สัญญาและเงื่อนไขชัดเจน", en: "Clear contract" },
      { th: "ดูแลหลังส่งมอบ", en: "Post-launch support" },
    ],
    excludes: [],
    cta: { th: "ขอใบเสนอราคา", en: "Request a quote" },
  },
];

export const processSteps = [
  {
    num: "01",
    title: { th: "วินิจฉัย", en: "Diagnose" },
    desc: {
      th: "วิเคราะห์สินค้า กลุ่มเป้าหมาย และข้อเสนอ หาข่องโหว่ก่อนเขียนโค้ด :  คุณได้สโคปและราคาที่ชัดเจนตั้งแต่ต้น",
      en: "We audit the offer, audience and funnel before writing a line of code. You get a fixed scope and price upfront.",
    },
  },
  {
    num: "02",
    title: { th: "ออกแบบ", en: "Design" },
    desc: {
      th: "ออกแบบตามมาตรฐานงานจริง ไม่มีเทมเพลตสำเร็จรูป :  คุณเห็นตัวอย่างก่อนเริ่มสร้างจริง",
      en: "Design that clears the anti-slop bar. No templates; you see direction before we build.",
    },
  },
  {
    num: "03",
    title: { th: "สร้าง", en: "Build" },
    desc: {
      th: "พัฒนาเป็นเฟสตาม GSD มีตรวจเช็ครายสัปดาห์ ดูตัวอย่างจริงระหว่างทาง ไม่ใช่แค่สไลด์",
      en: "Built in GSD phases with weekly check-ins. You watch a live preview ship, not a slide deck.",
    },
  },
  {
    num: "04",
    title: { th: "เปิดตัว", en: "Launch" },
    desc: {
      th: "ดีพลอยผ่าน Coolify ตรวจ QA จริง วางพิกเซลและติดตามผล :  ส่งมอบหน้าที่ใช้งานได้ ไม่ใช่เพจพัง",
      en: "Deployed on Coolify, QA-checked, tracking wired. We do not hand over a broken page.",
    },
  },
];

export const team: TeamMember[] = [
  {
    name: "Techatham Nakinkul",
    role: { th: "หัวหน้าทีม", en: "Founder & lead" },
    bio: {
      th: "กำหนดทิศทาง มาตรฐานงาน และดูแลให้ทุกโปรเจกต์ส่งมอบได้จริง",
      en: "Sets direction, owns the bar, keeps every project shippable.",
    },
    initials: "TN",
  },
  {
    name: "Krit",
    role: { th: "ฟูลสแต็กดีเวลอปเปอร์", en: "Full-stack engineer" },
    bio: {
      th: "สร้างระบบหลังบ้าน เช็คเอาต์ และทุกอย่างที่ต้องอยู่รอดในโปรดักชัน",
      en: "Builds checkouts, backends, and everything that has to survive production.",
    },
    initials: "KR",
  },
  {
    name: "Pathomphop",
    role: { th: "ดาต้าเอ็นจิเนียร์", en: "Data engineer" },
    bio: {
      th: "เปลี่ยนข้อมูลจากสคริปเปอร์และล็อกให้เป็นรายงานที่ธุรกิจใช้ตัดสินใจได้",
      en: "Turns scraped data and logs into reports the business can act on.",
    },
    initials: "PP",
  },
  {
    name: "Rook",
    role: { th: "AI โอเปอเรเตอร์", en: "AI operator" },
    bio: {
      th: "ทีม AI ขับเคลื่อนงานประจำวัน ตั้งแต่โค้ด ดีไซน์ จนถึงการตรวจ QA",
      en: "The AI squad that runs the daily work: code, design, QA.",
    },
    initials: "RK",
  },
];

export const proofStats = [
  { k: "10+", v: { th: "โปรเจกต์ลูกค้าที่ส่งมอบ", en: "client projects shipped" } },
  { k: "7", v: { th: "เว็บและร้านค้าที่ใช้งานจริง", en: "live websites & stores" } },
  { k: "3", v: { th: "ขั้นตอนจบที่หน้า COD", en: "steps in our COD checkout" } },
  { k: "1", v: { th: "ทีม + AI สควอด", en: "team + AI squad" } },
];
