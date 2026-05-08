import { ContentPageTemplate } from "~/components/page-templates/content-page-template";

const pageTitle = "Collectivv » Dario Hunt, Full-Stack Digital Problem Solver";
const pageDescription =
  "Collectivv is a creator-first community platform designed to prioritize intentional discovery, curated content, and meaningful interaction.";

const pageContent = {
  title: "Collectivv",
  role: "Founder · Creative Director · Full Stack Developer · UI/UX Designer · Brand Strategist · Marketing Strategist",
  tags: [
    "React",
    "Typescript",
    "Full-Stack Development",
    "UI/UX Design",
    "Branding",
    "Creative Direction",
    "Marketing",
    "SEO",
  ],
  liveUrl: "https://collectivv.co/",
  imageSrc: "/imgs/projects/collectivv-app-1.webp",
  imageAlt: "Collectivv website",
  introHeading: "Overview",
  introParagraphs: [
    "Collectivv is a creator-first community platform designed to prioritize intentional discovery, curated content, and meaningful interaction over algorithm-driven feeds.",
    "What began as a concept to rethink digital community evolved into a scalable product ecosystem - blending publishing tools, dynamic feeds, messaging, robust tagging, following and saving features, and structured workflows into one cohesive platform.",
    "As founder and product lead, I architected and developed the platform end-to-end - from UX systems and database design to deployment infrastructure and long-term scalability planning.",
  ],
  sections: [
    {
      heading: "Product Strategy + Architecture",
      paragraphs: [
        "From collections and tagging systems to community spaces and workflow templates, each feature was intentionally mapped to drive meaningful interaction rather than passive scrolling.",
        "The system architecture was designed for modular expansion - allowing chat, audio streaming, workflow builders, and monetization tools to integrate seamlessly without technical debt.",
      ],
    },
    {
      heading: "Full-Stack Development + Technical Infrastructure",
      paragraphs: [
        "Collectivv was developed as a full-stack application using a modern, production-grade technology stack.",
        "The frontend was built with React, React Router 7, TypeScript, and Tailwind CSS to create a scalable, type-safe, and component-driven interface. Validation and schema enforcement were handled with Zod, while Drizzle ORM managed structured database interactions.",
        "Authentication and user management were powered by Better Auth and Supabase. Performance optimization and edge-ready caching were supported through Upstash and Redis.",
        "The platform is containerized with Docker and deployed on a self-hosted VPS environment, configured with reverse proxies, firewall rules, and server-level optimizations to ensure security, reliability, and control over infrastructure.",
        "This architecture enables high performance, controlled scaling, and long-term product flexibility without reliance on rigid third-party platforms.",
      ],
    },
    {
      heading: "Growth + Monetization Framework",
      paragraphs: [
        "Collectivv was architected with sustainable growth in mind. Monetization pathways include premium tools, creator-driven ecosystems, and subscription-ready infrastructure.",
        "The marketing foundation centers on positioning, organic discoverability, and community-driven growth - designed to scale without heavy dependency on paid acquisition.",
      ],
    },
  ],
  impactHeading: "Impact",
};

const impactItems = [
  "Built and deployed a production-ready full-stack platform from concept to infrastructure",
  "Designed modular architecture supporting robust features and scalable expansion",
  "Established a secure, self-hosted deployment environment for full technical ownership",
  "Created a creator-first ecosystem centered on intentional discovery and structured engagement",
];

export function meta() {
  return [
    { title: pageTitle },
    { name: "title", content: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: "https://www.dariohunt.com/projects/collectivv",
    },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    {
      property: "og:image",
      content: "https://www.dariohunt.com/imgs/projects/collectivv-app-1.webp",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: "https://www.dariohunt.com/projects/collectivv",
    },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    {
      name: "twitter:image",
      content: "https://www.dariohunt.com/imgs/projects/collectivv-app-1.webp",
    },
  ];
}

export default function CollectivvProjectRoute() {
  return <ContentPageTemplate {...pageContent} impactItems={impactItems} />;
}
