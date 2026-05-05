import { ContentPageTemplate } from "~/components/page-templates/content-page-template";

const pageTitle = "ANOBS » Dario Hunt, Full-Stack Digital Problem Solver";
const pageDescription =
  "ANOBS is a consulting and business services firm. As lead consultant, I revamped the brand identity, built the digital infrastructure, and developed growth systems.";

const pageContent = {
  title: "All-N-One Business Services (ANOBS)",
  role: "Lead Consultant · Designer · Developer · Marketing Strategist",
  tags: [
    "Branding",
    "Web Design",
    "Web Development",
    "Business Strategy",
    "Marketing",
    "SEO",
  ],
  liveUrl: "https://anobs.co/",
  imageSrc: "/imgs/work/anobs-homepage.webp",
  imageAlt: "ANOBS website",
  introHeading: "Overview",
  introParagraphs: [
    "ANOBS is a multidisciplinary consulting and business services firm built to help entrepreneurs and small businesses scale smarter.",
    "What started as a local service has grown into a full digital brand that merges creative design, financial systems, and business strategy into one seamless experience.",
    "As lead consultant, I revamped and re-designed the brand identity, built the digital infrastructure, and developed growth systems to help clients move from idea to execution all under one roof.",
  ],
  sections: [
    {
      heading: "Branding + Design",
      paragraphs: [
        "The ANOBS brand was built around clarity and confidence: professional, modern, and human. I developed a clean visual identity with a modular design system that could flex across business verticals, marketing materials, and service bundles.",
        "From pitch decks and capability statements to ad campaigns and client portals, every design choice reinforces the brand positioning: accessible sophistication built for growth.",
      ],
    },
    {
      heading: "Web Development",
      paragraphs: [
        "The ANOBS website was developed on WordPress using a custom theme and layout, supported by extensive custom CSS styling to create a modern, intuitive user experience.",
        "The site functions as both a service hub and a lead generation system, integrating contact funnels, service breakdowns, and conversion-focused design.",
        "It is built to be fast, adaptable, and search-optimized, capable of supporting everything from consulting packages to resource libraries and client onboarding portals.",
      ],
    },
    {
      heading: "SEO + Marketing",
      paragraphs: [
        "I built ANOBS digital presence around organic growth, developing a full SEO strategy, content architecture, and data-driven marketing funnels.",
        "Every service page and article is optimized for discovery, connecting directly to client pain points while showcasing expertise. Complemented by targeted campaigns and automated email flows, the system turns visibility into consistent lead generation without relying on heavy ad spend.",
      ],
    },
  ],
  impactHeading: "Impact",
};

const impactItems = [
  "Established a consistent client pipeline through organic SEO and strategic partnerships",
  "Built a full suite of service bundles covering consulting, bookkeeping, tax, and brand development",
  "Unified all service offerings under one cohesive brand and platform",
];

export function meta() {
  return [
    { title: pageTitle },
    { name: "title", content: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:type", content: "article" },
    { property: "og:url", content: "https://www.dariohunt.com/work/anobs" },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    {
      property: "og:image",
      content: "https://www.dariohunt.com/imgs/work/anobs-homepage.webp",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://www.dariohunt.com/work/anobs" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    {
      name: "twitter:image",
      content: "https://www.dariohunt.com/imgs/work/anobs-homepage.webp",
    },
  ];
}

export default function AnobsWorkRoute() {
  return <ContentPageTemplate {...pageContent} impactItems={impactItems} />;
}
