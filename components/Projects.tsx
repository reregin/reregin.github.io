import Image from "next/image";
import { projects } from "@/lib/data";

/* ─── NEUROKIT-specific image collage data ─── */
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

/* ─── Project image map: key = project title ─── */
const projectImageMap: Record<
  string,
  { src: string; alt: string }[]
> = {
  NEUROKIT: neurokitImages,
};

/* ─── Abstract Placeholder (for projects without images) ─── */
function AbstractPlaceholder() {
  return (
    <div className="aspect-square w-full bg-[var(--color-cream-dark)] border border-[var(--color-border-light)] relative overflow-hidden">
      <div className="absolute inset-0 project-grid opacity-60" />
      <div className="absolute inset-0 noise-bg" />
      {/* Redaction blocks decoration */}
      <div className="absolute top-6 left-4 right-8 h-3 bg-[var(--color-redact)] opacity-12" />
      <div className="absolute top-12 left-8 right-4 h-2 bg-[var(--color-accent)] opacity-20" />
      <div className="absolute bottom-8 left-4 w-1/2 h-3 bg-[var(--color-redact)] opacity-10" />
      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="border border-[var(--color-border-light)] px-4 py-2 bg-[var(--color-cream)]/80">
          <span className="font-heading text-[9px] tracking-[0.16em] uppercase text-[var(--color-gray)]">
            Documentation Pending
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-t border-l border-[var(--color-accent)] opacity-30" />
    </div>
  );
}

/* ─── Image Collage ─── */
function ImageCollage({
  images,
  label,
}: {
  images: { src: string; alt: string }[];
  label?: string;
}) {
  return (
    <div className="aspect-square w-full bg-[var(--color-cream-dark)] border border-[var(--color-border-light)] relative overflow-hidden p-4">
      <div className="absolute inset-0 opacity-30 project-grid" />

      <div className="relative h-full flex flex-col gap-3 z-10">
        <div className="flex items-center justify-between gap-3">
          <div className="bg-[var(--color-accent)] text-white font-heading text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-bold">
            Bronze Medal
          </div>
          {label && (
            <span className="font-heading text-[9px] tracking-[0.14em] uppercase text-[var(--color-gray)]">
              {label}
            </span>
          )}
        </div>

        <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-3 min-h-0">
          {images.map((image) => (
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
  );
}


/* ─── Main Projects Section ─── */
export default function Projects() {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="relative noise-bg dot-grid-bg">
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="meta-label mb-2 block">Build Log</span>
            <h2 className="section-title">Systems Built</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-heading text-[10px] tracking-[0.14em] uppercase text-[var(--color-gray)]">
              {String(projects.length).padStart(2, "0")} project{projects.length !== 1 ? "s" : ""} indexed
            </span>
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-blink" />
          </div>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const images = projectImageMap[project.title];
            const projectIndex = String(index + 1).padStart(2, "0");

            return (
              <article
                key={project.title}
                className="border border-[var(--color-border)] bg-[var(--color-cream-light)] relative overflow-hidden"
              >
                {/* Card header bar */}
                <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-[var(--color-border-light)]">
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-lg font-bold text-[var(--color-accent)]">
                      {projectIndex}
                    </span>
                    <div className="w-px h-5 bg-[var(--color-border-light)]" />
                    <span className="font-heading text-[10px] tracking-[0.14em] uppercase text-[var(--color-gray)]">
                      {project.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="signal-tag signal-tag--active text-[8px]">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-blink" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-6 md:p-10">
                  {/* Image area */}
                  <div className="lg:col-span-4">
                    {images ? (
                      <ImageCollage
                        images={images}
                        label={`${project.title.toLowerCase()} moments`}
                      />
                    ) : (
                      <AbstractPlaceholder />
                    )}
                  </div>

                  {/* Content area */}
                  <div className="lg:col-span-8 flex flex-col justify-center gap-4">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-black)] uppercase tracking-[0.03em] mb-1">
                        {project.title}
                      </h3>
                      <p className="font-heading text-xs tracking-[0.1em] uppercase text-[var(--color-accent)]">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="font-body text-sm md:text-base leading-relaxed text-[var(--color-black-soft)]">
                      {project.description}
                    </p>


                    {/* External links */}
                    <div className="flex flex-wrap gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-heading text-[10px] tracking-[0.12em] uppercase px-4 py-2 bg-[var(--color-black)] text-[var(--color-cream)] hover:bg-[var(--color-accent)] transition-colors"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {project.instagramUrl && (
                        <a
                          href={project.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-heading text-[10px] tracking-[0.12em] uppercase px-4 py-2 bg-[var(--color-black)] text-[var(--color-cream)] hover:bg-[var(--color-accent)] transition-colors"
                        >
                          Instagram ↗
                        </a>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="signal-tag text-[8px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
