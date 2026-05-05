export function AboutSection() {
  return (
    <section
      id="about"
      className="about-me mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <h2 className="section__title section__title--about uppercase font-bold text-4xl md:text-5xl">
        Who I Am
      </h2>
      <h4 className="section__subtitle section__subtitle--about mt-3 inline-block bg-accent py-2 px-2! w-full text-xl md:text-2xl font-medium text-light md:px-4">
        A decade of turning ideas into impact
      </h4>

      <div className="about-me__body md:mt-6 mb-4 space-y-4 text-neutral-300">
        <p>
          A 13-year professional basketball player, who has also spent more than
          a decade building things that blend art, business, and culture.
        </p>
        <p>
          I have built my own media platform, LIVING LIFE FEARLESS, from the
          ground up, leading everything from creative direction to full-stack
          development.
        </p>
        <p>
          Now I bring that same mix of creativity and structure to brands,
          businesses, and creators who want more than template solutions.
        </p>
      </div>

      <img
        src="/imgs/headshot3.webp"
        alt="Dario Hunt portrait"
        className="about-me__img w-full border border-white/10"
      />
    </section>
  );
}
