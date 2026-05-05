import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dario Hunt, Full-Stack Digital Problem Solver" },
    {
      name: "description",
      content:
        "Hey, I'm Dario Hunt, a Full-Stack Developer and Creative Director specializing in React, branding, and web design.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://dariohunt.com/",
    },
    {
      property: "og:title",
      content: "Dario Hunt, Full-Stack Digital Problem Solver",
    },
    {
      property: "og:description",
      content:
        "Hey, I'm Dario Hunt, a Full-Stack Developer and Creative Director specializing in React, branding, and web design.",
    },
    {
      property: "og:image",
      content: "https://www.dariohunt.com/imgs/og-image.jpg",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:url",
      content: "https://dariohunt.com/",
    },
    {
      name: "twitter:title",
      content: "Dario Hunt, Full-Stack Digital Problem Solver",
    },
    {
      name: "twitter:description",
      content:
        "Hey, I'm Dario Hunt, a Full-Stack Developer and Creative Director specializing in React, branding, and web design.",
    },
    {
      name: "twitter:image",
      content: "https://www.dariohunt.com/imgs/og-image.jpg",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
