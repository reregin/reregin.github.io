import Image from "next/image";
import { projects } from "@/lib/data";

const neurokitImages = [
  {
    src: "https://res.cloudinary.com/dvofzfezh/image/upload/f_auto,q_auto/v1779110105/IMG_1396_b2tmuw.heic",
    alt: "NEUROKIT presentation moment",
  },
  {
    src: "https://res.cloudinary.com/dvofzfezh/image/upload/f_auto,q_auto/v1779110108/IMG_1495_mrhxhw.heic",
    alt: "NEUROKIT device shot",
  },
  {
    src: "https://res.cloudinary.com/dvofzfezh/image/upload/v1779111321/IMG_1114_hggshs.jpg",
    alt: "NEUROKIT event moment",
  },
  {
    src: "https://res.cloudinary.com/dvofzfezh/image/upload/v1779111043/Screenshot_2026-05-18_213010_vs4xqm.png",
    alt: "NEUROKIT mobile screenshot",
  },
];

export default function Projects() {
  const project = projects[0];

  if (!project) {
    return null;
  }

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <div className="mb-14">
          <p className="accent-label mb-2">project</p>
          <h2 className="section-title">{project.title}</h2>
        </div>

        <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border border-[var(--color-border)] p-6 md:p-10 bg-[var(--color-cream-light)]">
          <div className="lg:col-span-4">
            <div className="aspect-square w-full bg-[var(--color-cream-dark)] border border-[var(--color-border-light)] relative overflow-hidden p-4">
              <div className="absolute inset-0 opacity-30 project-grid" />

              <div className="relative h-full flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="bg-[var(--color-accent)] text-white font-heading text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-bold">
                    Bronze Medal
                  </div>
                  <span className="font-heading text-[9px] tracking-[0.14em] uppercase text-[var(--color-gray)]">
                    neurokit moments
                  </span>
                </div>

                <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-3 min-h-0">
                  {neurokitImages.map((image, i) => (
                    <div
                      key={image.src}
                      className="border border-[var(--color-border-light)] bg-[var(--color-cream)] relative overflow-hidden min-h-0"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 220px, 45vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-20 h-20 border-t border-l border-[var(--color-accent)] opacity-40" />
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center">
            <p className="font-heading text-xs tracking-[0.12em] uppercase text-[var(--color-accent)] mb-3">
              {project.period}
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-black)] uppercase tracking-[0.05em] mb-3">
              {project.subtitle}
            </h3>
            <p className="font-body text-sm md:text-base leading-relaxed text-[var(--color-black-soft)] mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-[10px] tracking-[0.12em] uppercase px-4 py-2 bg-[var(--color-black)] text-[var(--color-cream)] hover:bg-[var(--color-accent)] transition-colors"
                >
                  reregin/neurokit
                </a>
              )}
              {project.instagramUrl && (
                <a
                  href={project.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-[10px] tracking-[0.12em] uppercase px-4 py-2 bg-[var(--color-black)] text-[var(--color-cream)] hover:bg-[var(--color-accent)] transition-colors"
                >
                  @neurokit.pkmkc
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-heading text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-black-soft)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
