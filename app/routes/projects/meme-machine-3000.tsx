import { ContentPageTemplate } from "~/components/page-templates/content-page-template";

const pageTitle =
  "Infinite Meme Machine 3000 » Dario Hunt, Full-Stack Digital Problem Solver";
const pageDescription =
  "Infinite Meme Machine 3000 is an AI-powered meme generation platform designed to produce context-aware, culturally relevant memes at scale.";

const pageContent = {
  title: "Infinite Meme Machine 3000",
  role: "Creative Director · Designer · Developer",
  tags: ["Next.js", "Web Design", "Web Development", "Creative Direction"],
  liveUrl: "https://mememachine3000.com/",
  imageSrc: "/imgs/projects/meme-machine-1.webp",
  imageAlt: "Infinite Meme Machine 3000 website",
  introHeading: "Overview",
  introParagraphs: [
    "Infinite Meme Machine 3000 is an AI-powered meme generation platform designed to produce context-aware, culturally relevant memes at scale.",
    "The project was built as both an experimental creative tool and a proof-of-concept for automated content engines - blending generative AI, prompt systems, and lightweight UX to create an endlessly scalable humor machine.",
    "As product lead and developer, I developed the concept, designed the product architecture, engineered the AI workflow and frontend experience, and deployed to Vercel for fast, scalable hosting.",
  ],
  sections: [
    {
      heading: "Product Strategy + Concept Development",
      paragraphs: [
        "The core idea behind Infinite Meme Machine 3000 was simple: memes are one of the most efficient forms of digital communication - but creation is inconsistent and manual.",
        "I developed a structured generation system that combines prompt engineering, contextual inputs, and templated visual formatting to generate memes dynamically while maintaining tone and relevance.",
        "The product was intentionally positioned as both a creative playground and a scalable content engine - capable of supporting social growth, marketing experiments, and viral testing loops.",
      ],
    },
    {
      heading: "UX/UI + Interaction Design",
      paragraphs: [
        "The interface was intentionally minimal and frictionless. Users can generate memes instantly without complex onboarding or configuration.",
        "Built with Next.js, the UI is fast, responsive, and optimized for shareability. Outputs are formatted for social distribution, enabling quick downloads and reposting.",
        "The design prioritizes speed, clarity, and playful interaction while maintaining clean structure.",
      ],
    },
    {
      heading: "AI Integration + Deployment",
      paragraphs: [
        "The application integrates with OpenAI ChatGPT API to generate structured meme content based on engineered prompts and contextual inputs.",
        "Prompt logic was carefully designed to control tone and formatting consistency while allowing creative flexibility.",
        "The app was deployed on Vercel, leveraging serverless functions for API handling and scalable performance without infrastructure overhead. This setup enabled rapid iteration, secure environment variable management, and efficient production deployment.",
      ],
    },
    {
      heading: "Growth + Monetization Potential",
      paragraphs: [
        "The platform was designed with scalable extensions in mind, including tiered usage models, API-based meme automation tools, and social growth integrations.",
        "It demonstrates how lightweight AI integrations can quickly evolve into monetizable digital products.",
      ],
    },
  ],
  impactHeading: "Impact",
};

const impactItems = [
  "Built and deployed an AI-powered content generation tool using Next.js and Vercel",
  "Engineered structured prompt systems for consistent meme output",
  "Created a share-ready content workflow optimized for social platforms",
  "Demonstrated rapid AI product prototyping and deployment",
];

export function meta() {
  return [
    { title: pageTitle },
    { name: "title", content: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: "https://www.dariohunt.com/projects/meme-machine-3000",
    },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    {
      property: "og:image",
      content: "https://www.dariohunt.com/imgs/projects/meme-machine-1.webp",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: "https://www.dariohunt.com/projects/meme-machine-3000",
    },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    {
      name: "twitter:image",
      content: "https://www.dariohunt.com/imgs/projects/meme-machine-1.webp",
    },
  ];
}

export default function MemeMachine3000ProjectRoute() {
  return <ContentPageTemplate {...pageContent} impactItems={impactItems} />;
}
