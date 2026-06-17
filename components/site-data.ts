export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  tone: string;
};

export type BuildTier = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  variant: "standard" | "featured" | "elevated" | "dashed";
};

export type MaintenancePlan = {
  name: string;
  monthly: string;
  annual: string;
  features: string[];
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export const trustChips = [
  "Conversion-first structure",
  "Elevate brand visibility",
  "Modern, responsive design",
] as const;

export const projects = [
  {
    title: "StartupList Africa",
    description:
      "StartupList Africa is a data intelligence platform focused on connecting the African startup ecosystem to foster investment and growth.",
    image: "/images/SLA.jpg",
    href: "https://www.startuplist.africa/",
    tone: "Data intelligence platform",
  },
  {
    title: "Pampered by Yuni",
    description:
      "Pampered By Yuni is a self-care beauty brand focused on healing through intentional, personalized wellness.",
    image: "/images/Pampered%20by%20Yuni%20Hero.jpg",
    href: "https://pamperedbyyuni.com/",
    tone: "Self-care beauty brand",
  },
  {
    title: "DispatchOps",
    description:
      "DispatchOps is an AI automation platform helping logistics and 3PL teams capture freight, route exceptions, and sync clean TMS data 24/7.",
    image: "/images/DispatchOps.jpg",
    href: "https://www.dispatchops.io/",
    tone: "AI logistics automation",
  },
  {
    title: "Eunoia",
    description:
      "Eunoia is an AI journal app for reflective writing, guided prompts, mood insights, and personal growth; it is still being actively refined.",
    image: "/images/Eunoia%20Landing.jpg",
    href: "https://www.myeunoia.online/",
    tone: "AI journal app, in progress",
  },
] as const satisfies Project[];

export const industryTags = [
  "Clothing brands",
  "Restaurants",
  "Barbershops & salons",
  "Local services",
  "Ecommerce brands",
  "Startups",
] as const;

export const buildTiers = [
  {
    name: "Launch",
    price: "$500 - $1,000",
    tagline: "Clean, fast, and ready to launch",
    features: [
      "1-page site",
      "Contact form",
      "Mobile-ready",
      "Basic SEO setup",
      "1 revision round",
    ],
    cta: "Ask about Launch",
    variant: "standard",
  },
  {
    name: "Studio",
    price: "$1,100 - $2,500",
    tagline: "The most common fit for small businesses",
    features: [
      "3-5 pages",
      "Google Maps integration",
      "Booking/contact flow",
      "Google Analytics",
      "2 revision rounds",
    ],
    cta: "Get a Free Quote",
    variant: "featured",
  },
  {
    name: "Brand Build",
    price: "$3,500 - $6,000",
    tagline: "For brands ready to go deeper",
    features: [
      "5-10 pages",
      "Ecommerce or booking system",
      "Custom integrations",
      "Full SEO foundation",
      "3 revision rounds",
    ],
    cta: "Plan a Brand Build",
    variant: "elevated",
  },
  {
    name: "Custom",
    price: "Scoped quote",
    tagline: "Complex builds scoped per project",
    features: ["Catalogs, dashboards", "Web apps", "Redesigns"],
    cta: "Let's scope it",
    variant: "dashed",
  },
] as const satisfies BuildTier[];

export const maintenancePlans = [
  {
    name: "Basic",
    monthly: "$50",
    annual: "$510/yr",
    features: [
      "Hosting (Vercel/Netlify)",
      "SSL",
      "Uptime monitoring",
      "1 content update/mo",
    ],
  },
  {
    name: "Care",
    monthly: "$120",
    annual: "$1,224/yr",
    features: [
      "Everything in Basic",
      "Security patches",
      "Dependency updates",
      "Google Analytics reports",
      "3 content updates/mo",
    ],
  },
  {
    name: "Growth",
    monthly: "$250",
    annual: "$2,550/yr",
    features: [
      "Everything in Care",
      "Monthly performance audit",
      "SEO check",
      "24hr priority response",
      "Unlimited minor content updates",
    ],
  },
  {
    name: "Priority",
    monthly: "$400",
    annual: "$4,080/yr",
    features: [
      "Everything in Growth",
      "Dedicated support",
      "A/B test recommendations",
      "Quarterly design refresh",
      "2hr response SLA",
    ],
  },
] as const satisfies MaintenancePlan[];
