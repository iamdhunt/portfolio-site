import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ActionButtons } from "~/components/ui/action-buttons";
import { TagPills } from "~/components/ui/tag-pills";

type ContentSection = {
  heading: string;
  paragraphs: Array<string | { text: string; className?: string }>;
  listItems?: string[];
};

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ContentPageTemplateProps = {
  title: string;
  role: string;
  tags: string[];
  liveUrl: string;
  imageSrc: string;
  imageAlt: string;
  galleryImages?: GalleryImage[];
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
  galleryImages,
  introHeading,
  introParagraphs,
  sections,
  impactHeading,
  impactItems,
}: ContentPageTemplateProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(
    null,
  );

  const hasGalleryImages = (galleryImages?.length ?? 0) > 0;
  const activeGalleryImage =
    activeGalleryIndex === null ? null : galleryImages?.[activeGalleryIndex];

  const openGalleryImage = (index: number) => {
    setActiveGalleryIndex(index);
  };

  const closeGallery = () => {
    setActiveGalleryIndex(null);
  };

  const showPreviousGalleryImage = () => {
    if (!galleryImages?.length || activeGalleryIndex === null) return;
    const previousIndex =
      (activeGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    setActiveGalleryIndex(previousIndex);
  };

  const showNextGalleryImage = () => {
    if (!galleryImages?.length || activeGalleryIndex === null) return;
    const nextIndex = (activeGalleryIndex + 1) % galleryImages.length;
    setActiveGalleryIndex(nextIndex);
  };

  useEffect(() => {
    if (activeGalleryImage) {
      const previousBodyOverflow = document.body.style.overflow;
      const previousHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = previousBodyOverflow;
        document.documentElement.style.overflow = previousHtmlOverflow;
      };
    }
  }, [activeGalleryImage]);

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

      {hasGalleryImages ? (
        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {galleryImages!.map((image, index) => (
                <li key={`${image.src}-${index}`} className="space-y-2">
                  <button
                    type="button"
                    onClick={() => openGalleryImage(index)}
                    className="group block w-full overflow-hidden rounded-xl border border-white/10 bg-black/30"
                    aria-label={`Open gallery image ${index + 1}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-28 w-full object-cover object-top transition duration-300 group-hover:scale-105 sm:h-32"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {activeGalleryImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8 sm:px-6 lg:px-8">
          <div className="fixed right-4 top-4 z-10 sm:right-6 sm:top-6 lg:right-8 lg:top-8">
            <button
              type="button"
              onClick={closeGallery}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-black/60 p-2 text-white transition hover:cursor-pointer hover:bg-white/10"
              aria-label="Close gallery"
            >
              <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
            </button>
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
            <div className="flex w-full items-center justify-center gap-3 sm:gap-5">
              {(galleryImages?.length ?? 0) > 1 ? (
                <div className="hidden shrink-0 sm:block">
                  <button
                    type="button"
                    onClick={showPreviousGalleryImage}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-black/60 p-3 text-white transition hover:cursor-pointer hover:bg-white/10"
                    aria-label="Previous image"
                  >
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="h-5! w-5!"
                    />
                  </button>
                </div>
              ) : null}

              <div className="w-full max-w-5xl sm:max-w-[calc(100%-6rem)] lg:max-w-5xl">
                <img
                  src={activeGalleryImage.src}
                  alt={activeGalleryImage.alt}
                  className="max-h-[75vh] w-full rounded-xl object-contain"
                />
              </div>

              {(galleryImages?.length ?? 0) > 1 ? (
                <div className="hidden shrink-0 sm:block">
                  <button
                    type="button"
                    onClick={showNextGalleryImage}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-black/60 p-3 text-white transition hover:cursor-pointer hover:bg-white/10"
                    aria-label="Next image"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-5! w-5!"
                    />
                  </button>
                </div>
              ) : null}
            </div>

            {activeGalleryImage.caption ? (
              <p className="mt-4 w-full max-w-5xl text-center text-sm lg:text-base text-neutral-300">
                {activeGalleryImage.caption}
              </p>
            ) : null}

            {(galleryImages?.length ?? 0) > 1 ? (
              <div className="mt-4 flex items-center justify-center gap-4 sm:hidden">
                <button
                  type="button"
                  onClick={showPreviousGalleryImage}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-black/60 p-3 text-white transition hover:cursor-pointer hover:bg-white/10"
                  aria-label="Previous image"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="h-5! w-5!" />
                </button>

                <button
                  type="button"
                  onClick={showNextGalleryImage}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-black/60 p-3 text-white transition hover:cursor-pointer hover:bg-white/10"
                  aria-label="Next image"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-5! w-5!"
                  />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

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

              {section.paragraphs.map((paragraph, index) => {
                const paragraphText =
                  typeof paragraph === "string" ? paragraph : paragraph.text;
                const paragraphClassName =
                  typeof paragraph === "string"
                    ? undefined
                    : paragraph.className;

                return (
                  <p
                    key={`${section.heading}-paragraph-${index}`}
                    className={paragraphClassName}
                  >
                    {paragraphText}
                  </p>
                );
              })}

              {section.listItems?.length ? (
                <ul className="list-disc space-y-2 pl-6">
                  {section.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
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
