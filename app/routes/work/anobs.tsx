import { TagPills } from "~/components/ui/tag-pills";
import { ActionButtons } from "~/components/ui/action-buttons";

const pageTitle = "ANOBS » Dario Hunt, Full-Stack Digital Problem Solver";
const pageDescription =
  "ANOBS is a consulting and business services firm. As lead consultant, I revamped the brand identity, built the digital infrastructure, and developed growth systems.";

const projectTags = [
  "Branding",
  "Web Design",
  "Web Development",
  "Business Strategy",
  "Marketing",
  "SEO",
];

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
  return (
    <main className="bg-dark text-light">
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-5xl flex flex-col items-center justify-center gap-10">
          <div className="text-center">
            <h1 className="font-black text-4xl lg:text-6xl">
              All-N-One Business Services (ANOBS)
            </h1>
            <p className="mt-4 text-xl text-neutral-200">
              <strong>Role:</strong> Lead Consultant · Designer · Developer ·
              Marketing Strategist
            </p>

            <TagPills
              tags={projectTags}
              containerClassName="mt-5 flex flex-wrap items-center justify-center gap-2"
              tagClassName="rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-wide"
            />

            <ActionButtons
              liveUrl="https://anobs.co/"
              liveOpensInNewTab
              showDetailsButton={false}
              containerClassName="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm"
              linkClassName="inline-flex items-start rounded-full bg-light px-5 py-2.5 font-semibold uppercase tracking-wider text-dark transition hover:opacity-90"
            />
          </div>

          <div className="overflow-hidden rounded-2xl bg-dark shadow-[0_0_60px_rgba(140,22,224,0.35)]">
            <img
              src="/imgs/work/anobs-homepage.webp"
              alt="ANOBS website"
              className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl space-y-7 text-lg leading-relaxed text-neutral-200">
          <h3 className="font-heading text-3xl uppercase text-light">
            Overview
          </h3>
          <p>
            ANOBS is a multidisciplinary consulting and business services firm
            built to help entrepreneurs and small businesses scale smarter.
          </p>
          <p>
            What started as a local service has grown into a full digital brand
            that merges creative design, financial systems, and business
            strategy into one seamless experience.
          </p>
          <p>
            As lead consultant, I revamped and re-designed the brand identity,
            built the digital infrastructure, and developed growth systems to
            help clients move from idea to execution all under one roof.
          </p>

          <h3 className="font-heading pt-4 text-3xl uppercase text-light">
            Branding + Design
          </h3>
          <p>
            The ANOBS brand was built around clarity and confidence:
            professional, modern, and human. I developed a clean visual identity
            with a modular design system that could flex across business
            verticals, marketing materials, and service bundles.
          </p>
          <p>
            From pitch decks and capability statements to ad campaigns and
            client portals, every design choice reinforces the brand
            positioning: accessible sophistication built for growth.
          </p>

          <h3 className="font-heading pt-4 text-3xl uppercase text-light">
            Web Development
          </h3>
          <p>
            The ANOBS website was developed on WordPress using a custom theme
            and layout, supported by extensive custom CSS styling to create a
            modern, intuitive user experience.
          </p>
          <p>
            The site functions as both a service hub and a lead generation
            system, integrating contact funnels, service breakdowns, and
            conversion-focused design.
          </p>
          <p>
            It is built to be fast, adaptable, and search-optimized, capable of
            supporting everything from consulting packages to resource libraries
            and client onboarding portals.
          </p>

          <h3 className="font-heading pt-4 text-3xl uppercase text-light">
            SEO + Marketing
          </h3>
          <p>
            I built ANOBS digital presence around organic growth, developing a
            full SEO strategy, content architecture, and data-driven marketing
            funnels.
          </p>
          <p>
            Every service page and article is optimized for discovery,
            connecting directly to client pain points while showcasing
            expertise. Complemented by targeted campaigns and automated email
            flows, the system turns visibility into consistent lead generation
            without relying on heavy ad spend.
          </p>

          <h3 className="font-heading pt-4 text-3xl uppercase text-light">
            Impact
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            {impactItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
