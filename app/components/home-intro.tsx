export function HomeIntro() {
  return (
    <section id="home" className="intro px-4 pb-16 pt-20 sm:px-6 lg:px-8">
      <h1 className="section__title section__title--intro text-5xl md:text-6xl">
        Hey, I'm <br />
        <span className="font-black uppercase">Dario Hunt</span>
      </h1>
      <h4 className="section__subtitle section__subtitle--intro font-medium text-light text-2xl md:text-3xl py-2 px-2 md:px-5">
        Full-stack digital problem solver
      </h4>
      <img
        src="/imgs/headshot1.webp"
        alt="a picture of Dario Hunt"
        className="intro__img border border-white/10 shadow-bs"
      />
    </section>
  );
}
