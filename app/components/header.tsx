import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";

export function Header() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(88);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!navOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNavOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [navOpen]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    const updateHeaderHeight = () => {
      setHeaderHeight(Math.round(headerEl.getBoundingClientRect().height));
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(headerEl);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  const isHomeRoute = location.pathname === "/";
  const homeSectionHref = (hash: string) => (isHomeRoute ? hash : `/${hash}`);

  const navItems = [
    { href: "/", label: "Home" },
    { href: homeSectionHref("#services"), label: "My Services" },
    { href: homeSectionHref("#about"), label: "About Me" },
    { href: homeSectionHref("#skills"), label: "My Skills" },
    { href: homeSectionHref("#projects"), label: "My Projects" },
    { href: homeSectionHref("#work"), label: "My Work" },
    { href: homeSectionHref("#testimonials"), label: "My Clients" },
    { href: "#contact", label: "Contact Me" },
  ];

  const desktopNavItems = navItems.filter((item) =>
    [
      homeSectionHref("#services"),
      homeSectionHref("#projects"),
      homeSectionHref("#work"),
      "#contact",
    ].includes(item.href),
  );

  const headerStateClasses = navOpen
    ? "shadow-none"
    : isScrolling
      ? "shadow-lg shadow-black/40 border-b border-white/10"
      : "shadow-none";

  const modalTopOffset = Math.max(headerHeight - 1, 0);

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 bg-dark/95 backdrop-blur transition-shadow duration-300 px-4 ${headerStateClasses}`}
      >
        <div className="mx-auto flex w-full container items-center justify-between py-4">
          <a href="/" aria-label="Go to top" className="w-16 sm:w-20">
            <img
              src="/logos/name-logo-light-stacked.webp"
              alt="Dario Hunt Logo"
              className="h-auto w-full"
            />
          </a>

          <button
            type="button"
            className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition lg:hidden"
            aria-label={navOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  navOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-300 ${
                  navOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  navOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>

          <nav className="hidden lg:flex lg:items-center lg:gap-3">
            <ul className="flex list-none items-center gap-3">
              {desktopNavItems.map((item) => (
                <li key={item.href} className="group">
                  <a
                    href={item.href}
                    onClick={() => setNavOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] transition hover:border-white hover:bg-white hover:text-dark"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="relative z-50 hidden h-11 w-11 lg:h-9.5 lg:w-9.5 items-center justify-center rounded-full border border-white/25 text-white hover:text-dark hover:bg-light transition lg:inline-flex hover:cursor-pointer"
              aria-label={navOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={navOpen}
              onClick={() => setNavOpen((open) => !open)}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                    navOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-300 ${
                    navOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                    navOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </span>
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {navOpen ? (
          <motion.div
            key="mobile-menu"
            className="fixed inset-x-0 bottom-0 z-40 bg-dark/95 backdrop-blur p-8"
            style={{
              top: `${modalTopOffset}px`,
              height: `calc(100dvh - ${modalTopOffset}px)`,
            }}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex h-full items-center justify-end">
              <ul className="flex list-none flex-col items-end gap-3 ">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setNavOpen(false)}
                      className="group inline-flex items-start gap-2 pl-4 pr-2 py-3 text-3xl md:text-4xl font-black uppercase tracking-[0.12em] transition hover:border-white hover:bg-light hover:text-dark"
                    >
                      <span>{item.label}</span>
                      <span className="text-xl md:text-2xl opacity-60 -mt-2 group-hover:opacity-100 transition">
                        {index + 1}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
