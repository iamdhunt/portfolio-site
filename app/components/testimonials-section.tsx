import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    client: "Chad Morgan-Brown",
    business: "Uptymistx Car Washing Services",
    text: "Dario is the man! His expertise is unmatched, and appreciated his timely response to any questions I may have. Awesome and solid customer interactions as well.",
  },
  {
    client: "Randall",
    business: "ANOBS (All-N-One Business Services)",
    text: "All-N-One continues to utilize the services of Dario to help improve our web site design, marketing, branding, and revolutionize what we do as a company. The results have been outstanding as the number of page views increased by 56%, session duration is up 76%, which has led to an increase in the number of private and commercial customers that we are now serving. We without hesitation recommend Dario as a valuable collaborator, creativity, effectiveness, efficient, and seamless integrator with All-N-One and anyone looking for that right teaming partner in any industry.",
  },
];

type Review = (typeof reviews)[number];

export function TestimonialsSection() {
  const [activeReview, setActiveReview] = useState<Review | null>(null);

  useEffect(() => {
    if (!activeReview) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveReview(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [activeReview]);

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
            <motion.article
              key={item.client}
              layout
              layoutId={`testimonial-card-${item.client}`}
              role="button"
              tabIndex={0}
              onClick={() => setActiveReview(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveReview(item);
                }
              }}
              transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
              className="group relative h-86 w-full max-w-2xl overflow-hidden rounded-2xl border border-fuchsia-300/30 bg-linear-to-br from-fuchsia-700/35 via-rose-600/30 to-red-600/30 p-6 shadow-[0_0_25px_rgba(217,70,239,0.22)] transition duration-300 md:max-w-none md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)] hover:-translate-y-1 hover:cursor-pointer hover:border-fuchsia-200/50 hover:shadow-[0_0_35px_rgba(244,63,94,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-200/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              <motion.div
                layout
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)] opacity-70 transition group-hover:opacity-100"
              />
              <motion.div layout className="relative space-y-4">
                <motion.p
                  layout
                  className="font-heading text-7xl leading-none text-fuchsia-100/95"
                >
                  "
                </motion.p>
                <motion.p
                  layout
                  className="line-clamp-5 text-lg leading-relaxed text-neutral-100"
                >
                  {item.text}
                </motion.p>
                <motion.div layout>
                  <motion.p
                    layout
                    className="text-sm font-bold uppercase tracking-[0.14em] text-white"
                  >
                    {item.client}
                  </motion.p>
                  <motion.p
                    layout
                    className="text-xs font-semibold tracking-[0.14em] text-rose-100/75"
                  >
                    {item.business}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {activeReview ? (
            <motion.div
              layoutRoot
              className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/75 px-4 py-8 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveReview(null)}
            >
              <motion.article
                layout
                layoutId={`testimonial-card-${activeReview.client}`}
                transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
                onClick={(event) => event.stopPropagation()}
                className="group relative max-h-[85vh] w-full max-w-3xl rounded-2xl border border-fuchsia-200/60 bg-linear-to-br from-fuchsia-700/50 via-rose-600/45 to-red-600/45 p-6 shadow-[0_0_45px_rgba(244,63,94,0.45)] sm:p-8"
              >
                <motion.button
                  layout
                  type="button"
                  onClick={() => setActiveReview(null)}
                  className="absolute top-4 right-4 z-10 rounded-full border border-white/25 bg-black/25 p-3 h-8 w-8 text-sm font-semibold text-white transition hover:bg-black/45 flex items-center justify-center hover:cursor-pointer"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </motion.button>

                <motion.div layout className="relative space-y-4 pr-12">
                  <motion.p
                    layout
                    className="font-heading text-7xl leading-none text-fuchsia-100/95"
                  >
                    "
                  </motion.p>
                  <motion.p
                    layout
                    className="text-lg leading-relaxed text-neutral-100"
                  >
                    {activeReview.text}
                  </motion.p>
                  <motion.div layout>
                    <motion.p
                      layout
                      className="text-sm font-bold uppercase tracking-[0.14em] text-white"
                    >
                      {activeReview.client}
                    </motion.p>
                    <motion.p
                      layout
                      className="text-xs font-semibold tracking-[0.14em] text-rose-100/75"
                    >
                      {activeReview.business}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.article>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
