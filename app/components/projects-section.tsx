import { useRef, useState, type MouseEvent, type UIEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ActionButtons } from "./ui/action-buttons";
import { TagPills } from "./ui/tag-pills";

const projects = [
  {
    title: "grnlght",
    image: "/imgs/projects/grnlght/grnlght-full-timeline.webp",
    imageAlt: "grnlght website",
    liveUrl: "https://grnlght.co",
    detailsUrl: "/projects/grnlght",
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
  },
  {
    title: "Collectivv",
    image: "/imgs/projects/collectivv-app-1.webp",
    imageAlt: "Collectivv website",
    liveUrl: "https://collectivv.co",
    detailsUrl: "/projects/collectivv",
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
  },
  {
    title: "Infinite Meme Machine 3000",
    image: "/imgs/projects/meme-machine-1.webp",
    imageAlt: "Infinite Meme Machine 3000 website",
    liveUrl: "https://mememachine3000.com/",
    detailsUrl: "/projects/mememachine3000",
    tags: ["Next.js", "Web Design", "Web Development", "Creative Direction"],
  },
];

export function ProjectsSection() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollAmount = 650;

  const scrollProjects = (direction: "left" | "right") => {
    const slider = projectsRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleProjectsClick = (event: MouseEvent<HTMLDivElement>) => {
    const slider = projectsRef.current;
    if (!slider) return;

    const target = event.target as HTMLElement;
    if (target.closest("a, button")) {
      return;
    }

    const rect = slider.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    const leftZone = width * 0.25;
    const rightZone = width * 0.75;
    if (x < leftZone) {
      scrollProjects("left");
    } else if (x > rightZone) {
      scrollProjects("right");
    }
  };

  const handleProjectsMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const slider = projectsRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    slider.style.cursor =
      x < width * 0.25 || x > width * 0.75 ? "pointer" : "default";
  };

  const scrollToSlide = (index: number) => {
    const slider = projectsRef.current;
    if (!slider) return;

    const card = slider.children[index] as HTMLElement | undefined;
    if (!card) return;

    const cardCenter = card.offsetLeft + card.clientWidth / 2;
    const left = cardCenter - slider.clientWidth / 2;

    slider.scrollTo({ left, behavior: "smooth" });
    setActiveSlide(index);
  };

  const handleSliderScroll = (event: UIEvent<HTMLDivElement>) => {
    const slider = event.currentTarget;
    const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(slider.children).forEach((child, index) => {
      const card = child as HTMLElement;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(sliderCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveSlide(closestIndex);
  };

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="uppercase font-bold text-5xl">My Projects</h2>
        <h4 className="mx-auto mt-3 max-w-2xl text-neutral-300 font-medium">
          A few of the projects I have built:
        </h4>
      </div>

      <div className="relative mt-8">
        <button
          type="button"
          aria-label="Scroll projects left"
          className="absolute left-5 top-1/2 z-10 hidden md:inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/30 p-3 text-white backdrop-blur transition hover:bg-white/50 hover:cursor-pointer"
          onClick={() => scrollProjects("left")}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="h-8! w-8!" />
        </button>

        <button
          type="button"
          aria-label="Scroll projects right"
          className="absolute right-5 top-1/2 z-10 hidden md:inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/30 p-3 text-white backdrop-blur transition hover:bg-white/50 hover:cursor-pointer"
          onClick={() => scrollProjects("right")}
        >
          <FontAwesomeIcon icon={faChevronRight} className="h-8! w-8!" />
        </button>

        <div
          ref={projectsRef}
          className="no-scrollbar flex gap-6 overflow-x-auto px-4 pb-3 sm:px-6 lg:px-8"
          onClick={handleProjectsClick}
          onMouseMove={handleProjectsMouseMove}
          onScroll={handleSliderScroll}
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="w-[80vw] lg:w-[60vw] shrink-0 rounded-3xl border border-white/15 bg-neutral-900 p-3"
            >
              <div className="h-60 overflow-hidden rounded-2xl bg-black sm:h-120">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="font-heading text-4xl uppercase">
                  {project.title}
                </h3>
                <ActionButtons
                  liveUrl={project.liveUrl}
                  detailsUrl={project.detailsUrl}
                  liveOpensInNewTab
                  containerClassName="mt-3 flex flex-wrap gap-2 text-sm"
                />
                <TagPills
                  tags={project.tags}
                  containerClassName="mt-4 flex flex-wrap gap-1.5"
                  tagClassName="rounded-full border border-white/25 px-3 py-1 text-xs uppercase tracking-wide"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            aria-label={`Go to ${project.title} slide`}
            aria-current={activeSlide === index}
            className={`h-4 rounded-full hover:cursor-pointer transition-all ${
              activeSlide === index
                ? "w-8 bg-white"
                : "w-4 bg-white/40 hover:bg-white/90"
            }`}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
