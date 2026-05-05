import { ActionButtons } from "~/components/ui/action-buttons";
import { TagPills } from "~/components/ui/tag-pills";

type ContentSection = {
  heading: string;
  paragraphs: string[];
};

type ContentPageTemplateProps = {
  title: string;
  role: string;
  tags: string[];
  liveUrl: string;
  imageSrc: string;
  imageAlt: string;
  introHeading: string;
  introParagraphs: string[];
  sections: ContentSection[];
  impactHeading: string;
  impactItems: string[];
};

export function ContentPageTemplate({
  title,
  role,
  tags,
  liveUrl,
  imageSrc,
  imageAlt,
  introHeading,
  introParagraphs,
  sections,
  impactHeading,
  impactItems,
}: ContentPageTemplateProps) {
  return (
    <main className="bg-dark text-light pb-20">
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-10">
          <div className="text-center">
            <h1 className="font-black text-4xl lg:text-6xl">{title}</h1>
            <p className="mt-4 text-xl text-neutral-200">
              <strong>Role:</strong> {role}
            </p>

            <TagPills
              tags={tags}
              containerClassName="mt-5 flex flex-wrap items-center justify-center gap-2"
              tagClassName="rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-wide"
            />

            <ActionButtons
              liveUrl={liveUrl}
              liveOpensInNewTab
              showDetailsButton={false}
              containerClassName="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm"
              linkClassName="inline-flex items-start rounded-full bg-light px-5 py-2.5 font-semibold uppercase tracking-wider text-dark transition hover:opacity-90"
            />
          </div>

          <div className="overflow-hidden rounded-2xl bg-dark shadow-[0_0_60px_rgba(140,22,224,0.35)]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl space-y-7 text-lg leading-relaxed text-neutral-200">
          <h3 className="font-heading text-3xl uppercase text-light">
            {introHeading}
          </h3>

          {introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {sections.map((section) => (
            <div key={section.heading} className="space-y-7">
              <h3 className="font-heading pt-4 text-3xl uppercase text-light">
                {section.heading}
              </h3>

              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}

          <h3 className="font-heading pt-4 text-3xl uppercase text-light">
            {impactHeading}
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
