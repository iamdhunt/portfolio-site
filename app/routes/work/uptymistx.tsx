import { ContentPageTemplate } from "~/components/page-templates/content-page-template";

const pageTitle =
  "Uptymistx Car Washing Services » Dario Hunt, Full-Stack Digital Problem Solver";
const pageDescription =
  "Uptymistx is a car washing service. As developer, I led design, web development, and optimization.";

const pageContent = {
  title: "Uptymistx",
  role: "Developer · Designer · SEO Strategist · Branding Consultant",
  tags: ["Web Development", "Web Design", "Branding", "Graphic Design", "SEO"],
  liveUrl: "https://uptymistxcarwashing.services/",
  imageSrc: "/imgs/work/uptymistx-homepage.webp",
  imageAlt: "Uptymistx website",
  introHeading: "Overview",
  introParagraphs: [
    "Uptymistx Car Washing Services is a local car care business focused on delivering reliable, high-quality car cleaning services with convenience and professionalism at the core.",
    "The goal was to transform a basic, offline-first operation into a credible digital presence that could attract new customers, clearly communicate services, and convert visitors into bookings.",
    "I led the full digital setup, from infrastructure to brand refinement; creating a streamlined, conversion-focused website that positions the business for local growth.",
  ],
  sections: [
    {
      heading: "Branding + Design",
      paragraphs: [
        "The Uptymistx brand was refined to feel clean, modern, and trustworthy, key traits for a service-based business where perception drives purchasing decisions.",
        "I updated the existing logo into a more scalable and versatile design, ensuring it works across web, mobile, and future marketing materials.",
        "The visual direction emphasizes clarity and simplicity, using strong contrast, clear typography, and service-focused layouts to guide users toward action.",
      ],
    },
    {
      heading: "Web Development",
      paragraphs: [
        "The Uptymistx website was built on WordPress, with full setup of hosting and domain configuration to establish a reliable and scalable foundation.",
        "The site was designed to be fully responsive, delivering a seamless experience across desktop, tablet, and mobile devices.",
        "The structure focuses on clarity and speed: streamlined navigation, clear service breakdowns, and prominent calls-to-action that make it easy for visitors to understand offerings and take the next step.",
      ],
    },
    {
      heading: "SEO + Conversion Optimization",
      paragraphs: [
        "I rewrote and structured all on-site copy with SEO and conversions in mind, targeting relevant local search intent while keeping messaging direct and customer-focused.",
        "Each section of the site is designed to answer key customer questions quickly: what services are offered, why choose Uptymistx, and how to get started.",
        "The result is a site that not only ranks better in search but also converts traffic into real inquiries by reducing friction and building trust.",
      ],
    },
  ],
  impactHeading: "Impact",
};

const impactItems = [
  "Established a professional online presence for a previously offline-focused business",
  "Improved local discoverability through SEO-optimized structure and copy",
  "Increased customer inquiries through clearer messaging and stronger calls-to-action",
  "Built a scalable digital foundation for future marketing efforts and service expansion",
];

export function meta() {
  return [
    { title: pageTitle },
    { name: "title", content: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:type", content: "article" },
    { property: "og:url", content: "https://www.dariohunt.com/work/uptymistx" },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    {
      property: "og:image",
      content: "https://www.dariohunt.com/imgs/work/uptymistx-homepage.webp",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: "https://www.dariohunt.com/work/uptymistx",
    },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    {
      name: "twitter:image",
      content: "https://www.dariohunt.com/imgs/work/uptymistx-homepage.webp",
    },
  ];
}

export default function UptymistxWorkRoute() {
  return <ContentPageTemplate {...pageContent} impactItems={impactItems} />;
}
