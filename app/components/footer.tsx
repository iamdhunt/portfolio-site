import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faUpwork,
  faInstagram,
  faYoutube,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/iamdhunt",
    icon: faGithub,
  },
  {
    title: "Upwork",
    url: "https://www.upwork.com/freelancers/~01d04d9000cee4b9eb",
    icon: faUpwork,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/iamdhunt",
    icon: faInstagram,
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/@iamdhunt",
    icon: faYoutube,
  },
  {
    title: "Twitch",
    url: "https://www.twitch.tv/iamdhunt",
    icon: faTwitch,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-neutral-900 px-4 py-12 text-center sm:px-6 lg:px-8"
    >
      <a
        href="mailto:hello@dariohunt.com"
        className="mx-auto block w-full transition hover:opacity-80"
      >
        <img
          src="/logos/email-text-2.svg"
          alt="Email Dario Hunt"
          className="h-auto w-full"
        />
      </a>

      <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-8">
        {socialLinks.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-accent font-black uppercase tracking-widest text-3xl transition ease-in-out hover:opacity-80"
          >
            <span className="hidden lg:inline-flex">{link.title}</span>
            <span className="lg:hidden">
              <FontAwesomeIcon icon={link.icon} />
            </span>
          </a>
        ))}
      </div>

      <p className="mt-8 text-accent">{`© ${year} Dario LLC. All rights reserved.`}</p>
    </footer>
  );
}
