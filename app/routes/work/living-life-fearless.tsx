import { ContentPageTemplate } from "~/components/page-templates/content-page-template";

const pageTitle =
  "LIVING LIFE FEARLESS » Dario Hunt, Full-Stack Digital Problem Solver";
const pageDescription =
  "LIVING LIFE FEARLESS is an independent media platform and creative studio exploring music, film, art, and culture. I led the branding, design, and web development.";

const pageContent = {
  title: "LIVING LIFE FEARLESS",
  role: "Founder · Creative Director · Designer · Developer · Editor-in-Chief",
  tags: [
    "Branding",
    "Graphic Design",
    "Web Design",
    "Web Development",
    "Marketing",
    "SEO",
    "Ad Management",
    "Creative Writing",
    "Content Creation",
  ],
  liveUrl: "https://livinglifefearless.co",
  imageSrc: "/imgs/work/llf-homepage.webp",
  imageAlt: "LLF website",
  introHeading: "Overview",
  introParagraphs: [
    "LIVING LIFE FEARLESS is an independent media platform and creative studio exploring the intersection of music, film, art, and culture. What started as a side project became a multi-channel brand and community built around bold design, thoughtful storytelling, and independent voices.",
    "As founder and creative director, I have shaped every aspect from the brand identity and website experience to the content strategy, marketing funnels, and editorial voice. The result is a living ecosystem that moves seamlessly between creative content, commerce, and community.",
  ],
  sections: [
    {
      heading: "Branding + Design",
      paragraphs: [
        "The brand visual language balances minimalism with movement: strong typography, offbeat layouts, and a focus on storytelling through design.",
        "I developed a modular system that keeps the brand cohesive across editorials, zines, apparel, and digital campaigns, allowing it to scale while staying instantly recognizable.",
        "The aesthetic blends underground energy with modern clarity inspired by indie culture, DIY zines, and digital editorial design.",
      ],
    },
    {
      heading: "Web Development",
      paragraphs: [
        "The entire platform was built on WordPress, using a custom theme and layout developed from scratch and styled through extensive custom CSS. Every detail from the content hierarchy to the motion of each hover state was designed for clarity, speed, and personality.",
        "The result is a flexible publishing system that looks and feels handcrafted, while remaining easy to scale for new features, campaigns, and brand extensions.",
      ],
    },
    {
      heading: "Marketing + Growth",
      paragraphs: [
        "Through consistent SEO, email marketing, and social campaigns, the brand organically grew to reach tens of thousands of readers and listeners per week across multiple channels.",
        "I have built and managed marketing funnels for both the media platform and its shop, leveraging analytics to inform strategy and maintain growth without paid ad dependency.",
      ],
    },
  ],
  impactHeading: "Impact",
};

const impactItems = [
  "Millions of pageviews across media and shop platforms combined",
  "7K+ published articles and interviews with creators worldwide",
  "Established the foundation for multiple brand extensions: shop.llf, Secret Stash, Surf Club, Fearless FC, and more",
];

export function meta() {
  return [
    { title: pageTitle },
    { name: "title", content: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: "https://www.dariohunt.com/work/living-life-fearless",
    },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    {
      property: "og:image",
      content: "https://www.dariohunt.com/imgs/work/llf-homepage.webp",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: "https://www.dariohunt.com/work/living-life-fearless",
    },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    {
      name: "twitter:image",
      content: "https://www.dariohunt.com/imgs/work/llf-homepage.webp",
    },
  ];
}

export default function LivingLifeFearlessWorkRoute() {
  return <ContentPageTemplate {...pageContent} impactItems={impactItems} />;
}
