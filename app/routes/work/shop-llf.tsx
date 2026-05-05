import { ContentPageTemplate } from "~/components/page-templates/content-page-template";

const pageTitle = "shop.llf » Dario Hunt, Full-Stack Digital Problem Solver";
const pageDescription =
  "shop.llf is an apparel/e-commerce website. As creative director and developer, I led branding, design, web development, and marketing.";

const pageContent = {
  title: "shop.llf",
  role: "Creative Director · Designer · Developer · Marketing Strategist",
  tags: [
    "Branding",
    "Graphic Design",
    "Web Design",
    "Web Development",
    "eCommerce",
    "Marketing",
    "SEO",
    "Ad Management",
  ],
  liveUrl: "https://shop.livinglifefearless.co/",
  imageSrc: "/imgs/work/shop-llf-homepage.webp",
  imageAlt: "shop.llf website",
  introHeading: "Overview",
  introParagraphs: [
    "shop.llf is the apparel and merchandise arm of LIVING LIFE FEARLESS - a creative brand where streetwear meets storytelling.",
    "Each drop is more than just clothing; it is a piece of the larger LLF universe - merging design, identity, and culture into limited-edition collections built around ideas, not trends.",
    "As creative director and developer, I led everything from concept and design to website development and marketing execution, creating a cohesive eCommerce ecosystem that connects product, media, and community.",
  ],
  sections: [
    {
      heading: "Branding + Design",
      paragraphs: [
        "The visual identity of shop.llf extends the LLF aesthetic - clean yet bold, experimental yet intentional. Every product design, campaign layout, and graphic element is built around narrative: each drop tells a story. I handled the full creative direction for apparel design, photography, packaging, and brand visuals - blending streetwear culture with digital editorial energy.",
      ],
    },
    {
      heading: "Web Development",
      paragraphs: [
        "Built on WordPress and WooCommerce, shop.llf features a custom theme and layout, enhanced with extensive custom CSS styling to create a minimal yet immersive shopping experience.",
        "The interface was designed for clarity and flow - emphasizing storytelling and product presentation over traditional storefront clutter.",
        "Integrated with the LLF ecosystem, the site connects seamlessly with editorial content, email marketing, and social campaigns to drive both engagement and sales.",
      ],
    },
    {
      heading: "SEO + Marketing",
      paragraphs: [
        "I developed the full SEO strategy, marketing funnels, and email campaigns for shop.llf, focused on organic visibility and community-driven growth.",
        "Drops are launched through coordinated campaigns that combine social storytelling, full-funnel email campaigns, and clean visuals.",
        "A major part of the system is the extensive affiliate program I built from the ground up - designed to reward fans, creators, and partners for sharing the brand organically. The result is a self-sustaining growth loop where community, content, and commerce feed into each other - no heavy ad spend required.",
        "This approach blends hype-driven culture with data-backed strategy - balancing creativity and conversion.",
      ],
    },
  ],
  impactHeading: "Impact",
};

const impactItems = [
  "Designed and launched multiple apparel collections from concept to fulfillment",
  "Integrated shop.llf into the wider LLF media ecosystem for seamless brand storytelling",
  "Increased organic traffic and conversion through on-page SEO and email automation",
  "Built and launched a comprehensive affiliate program with tiered commissions, creator partnerships, and automated tracking - turning loyal customers into active promoters",
  "Established a repeat-customer base driven by limited drops and exclusive content",
];

export function meta() {
  return [
    { title: pageTitle },
    { name: "title", content: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:type", content: "article" },
    { property: "og:url", content: "https://www.dariohunt.com/work/shop-llf" },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    {
      property: "og:image",
      content: "https://www.dariohunt.com/imgs/work/shop-llf-homepage.webp",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: "https://www.dariohunt.com/work/shop-llf",
    },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    {
      name: "twitter:image",
      content: "https://www.dariohunt.com/imgs/work/shop-llf-homepage.webp",
    },
  ];
}

export default function ShopLlfWorkRoute() {
  return <ContentPageTemplate {...pageContent} impactItems={impactItems} />;
}
