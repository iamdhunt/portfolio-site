import { ActionButtons } from "./ui/action-buttons";
import { TagPills } from "./ui/tag-pills";
const workItems = [
  {
    title: "LIVING LIFE FEARLESS",
    image: "/imgs/work/llf-homepage.webp",
    imageAlt: "LIVING LIFE FEARLESS website",
    liveUrl: "https://livinglifefearless.co",
    detailsUrl: "/work/living-life-fearless",
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
  },
  {
    title: "ANOBS",
    image: "/imgs/work/anobs-homepage.webp",
    imageAlt: "ANOBS website",
    liveUrl: "https://anobs.co/",
    detailsUrl: "/work/anobs",
    tags: [
      "Branding",
      "Web Design",
      "Web Development",
      "Business Strategy",
      "Marketing",
      "SEO",
    ],
  },
  {
    title: "shop.llf",
    image: "/imgs/work/shop-llf-homepage.webp",
    imageAlt: "shop.llf website",
    liveUrl: "https://shop.livinglifefearless.co/",
    detailsUrl: "/work/shop-llf",
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
  },
  {
    title: "Uptymistx",
    image: "/imgs/work/uptymistx-homepage.webp",
    imageAlt: "Uptymistx website",
    liveUrl: "https://uptymistxcarwashing.services/",
    detailsUrl: "/work/uptymistx",
    tags: [
      "Web Development",
      "Web Design",
      "Branding",
      "Graphic Design",
      "SEO",
    ],
  },
];

export function WorkSection() {
  return (
    <section
      id="work"
      className="border-y border-white/10 bg-neutral-900/40 pt-20 pb-0"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-center text-5xl font-bold uppercase">My Work</h2>
        <h4 className="mx-auto mt-3 max-w-2xl text-center font-medium text-neutral-300">
          A few of the things I have built and grown:
        </h4>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
          {workItems.map((item) => (
            <article
              key={item.title}
              tabIndex={0}
              className="group relative overflow-hidden border border-white/10 focus:outline-none"
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-15 group-focus:scale-110 group-focus:opacity-15"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 transition duration-300 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100">
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl lg:text-5xl uppercase">
                    {item.title}
                  </h3>
                  <ActionButtons
                    liveUrl={item.liveUrl}
                    detailsUrl={item.detailsUrl}
                    liveOpensInNewTab={true}
                    containerClassName="mb-4 flex flex-wrap gap-1.5 text-sm"
                  />
                </div>
                <div>
                  <TagPills tags={item.tags} />
                </div>
              </div>
            </article>
          ))}

          <article className="relative overflow-hidden border border-white/10 bg-black/40 md:col-span-2">
            <img
              src="/imgs/gradient-bg2.webp"
              alt="Decorative gradient"
              className="h-80 lg:h-120 w-full object-cover opacity-65 transition duration-500 hover:scale-105 hover:opacity-30"
              loading="lazy"
            />
            <p className="absolute inset-0 flex items-center justify-center text-2xl md:text-4xl font-black uppercase text-white">
              More On The Way
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
