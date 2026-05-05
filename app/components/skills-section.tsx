const skills = [
  {
    fileName: "wordpress-color.webp",
    alt: "WordPress logo",
    title: "WordPress",
  },
  {
    fileName: "javascript-color.webp",
    alt: "JavaScript logo",
    title: "JavaScript",
  },
  {
    fileName: "typescript-color.webp",
    alt: "TypeScript logo",
    title: "TypeScript",
  },
  {
    fileName: "react-color.webp",
    alt: "React logo",
    title: "React",
  },
  {
    fileName: "nextjs-color.webp",
    alt: "Next.js logo",
    title: "Next.js",
  },
  {
    fileName: "react-router-7-color.webp",
    alt: "React Router logo",
    title: "React Router 7",
  },
  {
    fileName: "docker-color.webp",
    alt: "Docker logo",
    title: "Docker",
  },
  {
    fileName: "postgresql-color.webp",
    alt: "PostgreSQL logo",
    title: "PostgreSQL",
  },
  {
    fileName: "premiere-pro-color.webp",
    alt: "Adobe Premiere Pro logo",
    title: "Premiere Pro",
  },
  {
    fileName: "photoshop-color.webp",
    alt: "Adobe Photoshop logo",
    title: "Photoshop",
  },
  {
    fileName: "illustrator-color.webp",
    alt: "Adobe Illustrator logo",
    title: "Illustrator",
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-y border-white/10 bg-neutral-900/40 py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="uppercase font-bold text-4xl md:text-5xl">My Skills</h2>
        <h4 className="mx-auto mt-3 max-w-2xl text-neutral-300 font-medium">
          A few of the tools and technologies I work with:
        </h4>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {skills.map((skill) => (
            <img
              key={skill.fileName}
              src={`/logos/skills/${skill.fileName}`}
              alt={skill.alt}
              title={skill.title}
              className="h-24 w-24 rounded-xl border border-white/10 bg-white/5 p-1.5"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
