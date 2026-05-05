const reviews = [
  {
    client: "Chad Morgan-Brown",
    business: "Uptymistx Car Washing Services",
    text: "Dario is the man! His expertise is unmatched, and appreciated his timely response to any questions I may have. Awesome and solid customer interactions as well.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-t border-white/10 bg-neutral-950/80 py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-5xl font-bold uppercase">My Clients</h2>
        <h4 className="mx-auto mt-3 max-w-2xl text-center font-medium text-neutral-300">
          Real testimonials from my recent clients:
        </h4>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {reviews.map((item) => (
            <article
              key={item.client}
              className="group relative w-full max-w-2xl overflow-hidden rounded-2xl border border-fuchsia-300/30 bg-linear-to-br from-fuchsia-700/35 via-rose-600/30 to-red-600/30 p-6 shadow-[0_0_25px_rgba(217,70,239,0.22)] transition duration-300 md:max-w-none md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)] hover:-translate-y-1 hover:border-fuchsia-200/50 hover:shadow-[0_0_35px_rgba(244,63,94,0.35)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)] opacity-70 transition group-hover:opacity-100" />
              <div className="relative space-y-4">
                <p className="text-7xl leading-none font-heading text-fuchsia-100/95">
                  "
                </p>
                <p className="text-lg leading-relaxed text-neutral-100">
                  {item.text}
                </p>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                    {item.client}
                  </p>
                  <p className="text-xs font-semibold tracking-[0.14em] text-rose-100/75">
                    {item.business}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
