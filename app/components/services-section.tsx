const services = [
  {
    title: "Branding + Design",
    description:
      "I create cohesive visual systems that capture who you are and make people feel something. From brand identities and creative direction to campaigns and visuals, everything is built to be consistent, flexible, and timeless.",
  },
  {
    title: "Web Development",
    description:
      "I build fast, functional websites that connect design with performance. Whether it is a custom portfolio, eCommerce store, or digital experience, my goal is to make it look good and work even better.",
  },
  {
    title: "Marketing + SEO",
    description:
      "I develop strategies that help brands stand out online, from SEO and keyword strategy to content systems and marketing funnels that convert. I'm all about creating structure and storytelling that resonates.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-neutral-950/90 py-28 bg-blend-color bg-cover bg-top-left bg-[url('/imgs/services-bg.webp')]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="uppercase font-bold text-center text-4xl md:text-5xl">
          What I Do
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm text-center"
            >
              <h3 className="text-2xl font-semibold text-white">
                {service.title === "Marketing + SEO" ? (
                  <>
                    Marketing
                    <br className="hidden md:block lg:hidden" />
                    <span className="lg:ml-1">+ SEO</span>
                  </>
                ) : (
                  service.title
                )}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-neutral-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#work"
            className="mt-10 inline-flex rounded bg-accent px-10 py-3 font-heading font-bold text-xl uppercase tracking-wider text-dark transition duration-300 ease-in-out hover:scale-105 hover:bg-accent/80"
          >
            My Work
          </a>
        </div>
      </div>
    </section>
  );
}
