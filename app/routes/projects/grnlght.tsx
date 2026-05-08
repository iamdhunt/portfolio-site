import { ContentPageTemplate } from "~/components/page-templates/content-page-template";

const pageTitle = "grnlght » Dario Hunt, Full-Stack Digital Problem Solver";
const pageDescription =
  "grnlght is a full-stack SaaS platform built for freelancers, agencies, consultants, and modern service businesses looking for a cleaner way to manage client work.";

const pageContent = {
  title: "grnlght",
  role: "Founder · Creative Director · Full Stack Developer · UI/UX Designer · Brand Strategist · Marketing Strategist",
  tags: [
    "React",
    "Typescript",
    "Full-Stack Development",
    "UI/UX Design",
    "Saas",
    "Branding",
    "Creative Direction",
    "Marketing",
    "SEO",
  ],
  liveUrl: "https://grnlght.co/",
  imageSrc: "/imgs/projects/grnlght/grnlght-full-timeline.webp",
  imageAlt: "grnlght website",
  galleryImages: [
    {
      src: "/imgs/projects/grnlght/grnlght-full-timeline.webp",
      alt: "grnlght full project timeline",
      caption: "Full project timeline showcasing client workflow management.",
    },
    {
      src: "/imgs/projects/grnlght/grnlght-workspace.webp",
      alt: "grnlght workspace",
      caption: "Workspace view showcasing management features.",
    },
    {
      src: "/imgs/projects/grnlght/grnlght-task-management.webp",
      alt: "grnlght task management",
      caption: "Task management view showcasing a task lifecycle.",
    },
    {
      src: "/imgs/projects/grnlght/grnlght-revisions.webp",
      alt: "grnlght revisions",
      caption: "Revisions view showcasing task revision requests.",
    },
    {
      src: "/imgs/projects/grnlght/grnlght-notes.webp",
      alt: "grnlght notes",
      caption: "Notes view showcasing project notes between workspace members.",
    },
    {
      src: "/imgs/projects/grnlght/grnlght-create-a-project.webp",
      alt: "grnlght create a project",
      caption:
        "Project creation view showcasing the creation & client invitation process.",
    },
    {
      src: "/imgs/projects/grnlght/grnlght-client-portal.webp",
      alt: "grnlght client portal",
      caption: "Client portal view showcasing the user dashboard.",
    },
    {
      src: "/imgs/projects/grnlght/grnlght-transparent-timelines.webp",
      alt: "grnlght transparent timelines",
      caption:
        "Transparent timelines view showcasing project timelines with clarity.",
    },
  ],
  introHeading: "Overview",
  introParagraphs: [
    "grnlght is a full-stack SaaS platform built for freelancers, agencies, consultants, and modern service businesses looking for a cleaner way to manage client work. Designed around simplicity, collaboration, and workflow clarity, the platform brings projects, tasks, communication, onboarding, and client management into a single streamlined workspace.",
    "What started as a solution to frustrations with bloated project management tools evolved into a scalable platform focused on helping creative and service-based teams stay organized without sacrificing usability or design.",
    "As founder, designer, and full stack developer, I led every aspect of the product from brand identity and UX strategy to frontend architecture, backend systems, and marketing infrastructure.",
  ],
  sections: [
    {
      heading: "Branding + Design",
      paragraphs: [
        "The visual identity was designed to feel modern, lightweight, and intentional — balancing SaaS minimalism with personality and warmth.",
        "I created a modular design system centered around clean typography, soft spacing, subtle motion, and a muted color-accented palette that is instantly recognizable and adaptable across marketing and product touchpoints.",
        "The interface focuses heavily on reducing friction and cognitive overload, making the platform approachable for both teams and clients. Every layout and interaction was designed to prioritize clarity, speed, and usability while maintaining a polished premium feel.",
        "The branding extends consistently across the dashboard experience, onboarding flows, landing pages, and marketing materials to create a cohesive product ecosystem.",
      ],
    },
    {
      heading: "Web Development + Technical Architecture",
      paragraphs: [
        "grnlght was developed as a modern full-stack web application using React, React Router 7, TypeScript, Drizzle ORM, Better Auth, and Tailwind CSS, supported by a scalable backend architecture and relational database structure.",
        "I built the platform with a component-driven approach, allowing the UI and workflows to scale efficiently as new features are introduced.",
        "The frontend experience was optimized for responsiveness, performance, and accessibility across desktop and mobile devices, while the backend was structured to support future scalability and feature expansion.",
        "The platform is containerized with Docker and deployed on a self-hosted VPS environment, configured with cloudflare, reverse proxies, firewall rules, and server-level optimizations to ensure security, reliability, and control over infrastructure.",
        "This architecture enables high performance, controlled scaling, and long-term product flexibility without reliance on rigid third-party platforms.",
        { text: "Core systems include:", className: "font-bold text-light" },
      ],
      listItems: [
        "Multi-workspace architecture",
        "Client and team collaboration systems",
        "Task and project management workflows",
        "Authentication and role-based permissions",
        "Client onboarding and invitation flows",
        "File and asset management",
        "Subscription and SaaS infrastructure",
      ],
    },
    {
      heading: "Marketing + Growth",
      paragraphs: [
        "In addition to product development, I built the marketing foundation and growth strategy for the platform.",
        "The marketing direction focused heavily on positioning grnlght as a simpler, more client-friendly alternative to overly complex project management platforms, particularly for freelancers, agencies, and smaller service businesses.",
        { text: "Marketing strategy:", className: "font-bold text-light" },
      ],
      listItems: [
        "SEO-focused landing page architecture",
        "Industry-specific positioning pages",
        "Conversion-focused website copy",
        "Onboarding and pricing strategy",
        "Email marketing preparation",
        "Product messaging and brand positioning",
      ],
    },
  ],
  impactHeading: "Impact",
};

const impactItems = [
  "Designed and developed a scalable SaaS platform from the ground up",
  "Created a cohesive product and brand identity across app and marketing experiences",
  "Built a flexible system adaptable to freelancers, agencies, consultants, and creative teams",
  "Developed a modern client collaboration workflow focused on simplicity and transparency",
  "Established the foundation for future expansion into automation, CRM features, and workflow tools",
];

export function meta() {
  return [
    { title: pageTitle },
    { name: "title", content: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: "https://www.dariohunt.com/projects/grnlght",
    },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    {
      property: "og:image",
      content:
        "https://www.dariohunt.com/imgs/projects/grnlght/grnlght-full-timeline.webp",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: "https://www.dariohunt.com/projects/grnlght",
    },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    {
      name: "twitter:image",
      content:
        "https://www.dariohunt.com/imgs/projects/grnlght/grnlght-full-timeline.webp",
    },
  ];
}

export default function GrnlghtProjectRoute() {
  return <ContentPageTemplate {...pageContent} impactItems={impactItems} />;
}
