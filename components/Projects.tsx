"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, type Project } from "@/lib/data";

type ProjectCategory = "all" | "web2" | "web3" | "ai/ml" | "iot";

const categoryTabs: ProjectCategory[] = ["all", "web2", "web3", "ai/ml", "iot"];

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

const coraLandscapeImages = [
  {
    src: "https://res.cloudinary.com/dvofzfezh/image/upload/v1779861909/cora_landing_gsjqt7.png",
    alt: "CORA landing page",
  },
  {
    src: "https://res.cloudinary.com/dvofzfezh/image/upload/v1779861926/cora_gameplay_rzzymg.png",
    alt: "CORA gameplay screen",
  },
];

const fishFreshnessImages = [
  {
    src: "https://res.cloudinary.com/dvofzfezh/image/upload/v1779866380/GradCAM_khpn9f.png",
    alt: "Fish freshness multimodal fusion transformer GradCAM visualization",
  },
];

const anthropometricMiningImages = [
  {
    src: "https://res.cloudinary.com/dvofzfezh/image/upload/v1779866382/Dimension_xqn9ff.png",
    alt: "Anthropometric mining dimension analysis visualization",
  },
];

const projectImageMap: Record<string, { src: string; alt: string }[]> = {
  NEUROKIT: neurokitImages,
  "FISH FRESHNESS CLASSIFICATION": fishFreshnessImages,
  "ANTHROPOMETRIC MINING": anthropometricMiningImages,
  CORA: coraLandscapeImages,
};

const fallbackImage = {
  src: "https://res.cloudinary.com/dvofzfezh/image/upload/v1779861909/cora_landing_gsjqt7.png",
  alt: "Project preview",
};

function AbstractPlaceholder() {
  return (
    <div className="aspect-square w-full bg-[var(--color-cream-dark)] border border-[var(--color-border-light)] relative overflow-hidden">
      <div className="absolute inset-0 project-grid opacity-60" />
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-6 left-4 right-8 h-3 bg-[var(--color-redact)] opacity-12" />
      <div className="absolute top-12 left-8 right-4 h-2 bg-[var(--color-accent)] opacity-20" />
      <div className="absolute bottom-8 left-4 w-1/2 h-3 bg-[var(--color-redact)] opacity-10" />
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

function ExpandedImageCollage({
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
          {images.slice(0, 4).map((image) => (
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

function ExpandedLandscapeStack({
  images,
  label,
  badge,
}: {
  images: { src: string; alt: string }[];
  label?: string;
  badge?: string;
}) {
  return (
    <div className="aspect-square w-full bg-[var(--color-cream-dark)] border border-[var(--color-border-light)] relative overflow-hidden p-4 flex flex-col gap-3">
      <div className="absolute inset-0 opacity-30 project-grid" />
      <div className="flex items-center justify-between z-10">
        <div className="bg-[var(--color-accent)] text-white font-heading text-[8px] tracking-[0.12em] uppercase px-2.5 py-1 font-bold">
          {badge || "SYSTEM"}
        </div>
        <span className="font-heading text-[8px] tracking-[0.12em] uppercase text-[var(--color-gray)]">
          {label || "system screens"}
        </span>
      </div>
      <div className="flex-1 flex flex-col gap-3 min-h-0 z-10">
        {images.slice(0, 2).map((image) => (
          <div
            key={image.src}
            className="flex-1 bg-[var(--color-cream-light)] border border-[var(--color-border-light)] relative overflow-hidden min-h-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 320px, 90vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-t border-l border-[var(--color-accent)] opacity-40 pointer-events-none" />
    </div>
  );
}

function getProjectMediaMeta(project: Project) {
  if (project.title === "CORA") {
    return { badge: "SOLANA", label: "cora screens" };
  }
  if (project.title === "FISH FRESHNESS CLASSIFICATION") {
    return { badge: "CV", label: "gradcam result" };
  }
  if (project.title === "ANTHROPOMETRIC MINING") {
    return { badge: "ARM", label: "dimension analysis" };
  }
  if (project.title === "NEUROKIT") {
    return { badge: "BRONZE", label: "neurokit moments" };
  }
  return { badge: "SYSTEM", label: `${project.title.toLowerCase()} screens` };
}

function ExpandedMedia({ project }: { project: Project }) {
  const images = projectImageMap[project.title];
  const mediaMeta = getProjectMediaMeta(project);
  if (!images || images.length === 0) return <AbstractPlaceholder />;
  if (images.length >= 4) {
    return (
      <ExpandedImageCollage
        images={images}
        label={mediaMeta.label}
      />
    );
  }
  return (
    <ExpandedLandscapeStack
      images={images}
      label={mediaMeta.label}
      badge={mediaMeta.badge}
    />
  );
}

function CompactImageCollage({
  images,
  label,
}: {
  images: { src: string; alt: string }[];
  label?: string;
}) {
  return (
    <div className="h-full w-full bg-[var(--color-cream-dark)] border border-[var(--color-border-light)] relative overflow-hidden p-2 flex flex-col gap-2">
      <div className="absolute inset-0 opacity-30 project-grid" />
      <div className="relative z-10 flex items-center justify-between gap-2">
        <div className="bg-[var(--color-accent)] text-white font-heading text-[7px] tracking-[0.12em] uppercase px-2 py-1 font-bold">
          Bronze
        </div>
        {label && (
          <span className="font-heading text-[7px] tracking-[0.1em] uppercase text-[var(--color-gray)]">
            {label}
          </span>
        )}
      </div>
      <div className="relative z-10 grid flex-1 grid-cols-2 grid-rows-2 gap-2 min-h-0">
        {images.slice(0, 4).map((image) => (
          <div
            key={image.src}
            className="border border-[var(--color-border-light)] bg-[var(--color-cream)] relative overflow-hidden min-h-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 220px, (min-width: 640px) 42vw, 90vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function CompactLandscapeStack({
  images,
  label,
  badge,
}: {
  images: { src: string; alt: string }[];
  label?: string;
  badge?: string;
}) {
  return (
    <div className="h-full w-full bg-[var(--color-cream-dark)] border border-[var(--color-border-light)] relative overflow-hidden p-2 flex flex-col gap-2">
      <div className="absolute inset-0 opacity-30 project-grid" />
      <div className="relative z-10 flex items-center justify-between">
        <div className="bg-[var(--color-accent)] text-white font-heading text-[7px] tracking-[0.12em] uppercase px-2 py-1 font-bold">
          {badge || "Web3"}
        </div>
        <span className="font-heading text-[7px] tracking-[0.1em] uppercase text-[var(--color-gray)]">
          {label || "cora screens"}
        </span>
      </div>
      <div className="relative z-10 flex-1 flex flex-col gap-2 min-h-0">
        {images.slice(0, 2).map((image) => (
          <div
            key={image.src}
            className="flex-1 border border-[var(--color-border-light)] bg-[var(--color-cream)] relative overflow-hidden min-h-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 220px, (min-width: 640px) 42vw, 90vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function CompactCardMedia({ project }: { project: Project }) {
  const images = projectImageMap[project.title];
  const mediaMeta = getProjectMediaMeta(project);
  if (!images || images.length === 0) {
    return (
      <Image
        src={fallbackImage.src}
        alt={fallbackImage.alt}
        fill
        sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 95vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
    );
  }

  if (images.length >= 4) {
    return (
      <CompactImageCollage
        images={images}
        label={mediaMeta.label}
      />
    );
  }

  return (
    <CompactLandscapeStack
      images={images}
      label={mediaMeta.label}
      badge={mediaMeta.badge}
    />
  );
}

function toSearchText(project: Project) {
  return [project.title, project.subtitle, project.description, ...project.tags]
    .join(" ")
    .toLowerCase();
}

function isWeb3Project(project: Project) {
  const text = toSearchText(project);
  return (
    text.includes("web3") ||
    text.includes("solana") ||
    text.includes("on-chain") ||
    text.includes("wallet") ||
    text.includes("blink") ||
    text.includes("escrow")
  );
}

function isAimlProject(project: Project) {
  if (project.title === "CORA") return false;

  const text = toSearchText(project);
  return (
    text.includes("ai") ||
    text.includes("ml") ||
    text.includes("machine learning") ||
    text.includes("generative") ||
    text.includes("llama") ||
    text.includes("data mining")
  );
}

function isIotProject(project: Project) {
  if (project.title === "FISH FRESHNESS CLASSIFICATION") return false;

  const text = toSearchText(project);
  return (
    text.includes("iot") ||
    text.includes("device") ||
    text.includes("sensor") ||
    text.includes("hardware") ||
    text.includes("neurotherapeutic")
  );
}

function isWeb2Project(project: Project) {
  const text = toSearchText(project);
  return (
    text.includes("web app") ||
    text.includes("next.js") ||
    text.includes("react") ||
    text.includes("typescript") ||
    text.includes("backend") ||
    text.includes("hono") ||
    text.includes("vercel")
  );
}

function matchesCategory(project: Project, category: ProjectCategory) {
  if (category === "all") return true;
  if (category === "web3") return isWeb3Project(project);
  if (category === "ai/ml") return isAimlProject(project);
  if (category === "iot") return isIotProject(project);
  return isWeb2Project(project);
}

function parseStartDate(period?: string) {
  if (!period) return new Date("1970-01-01").getTime();

  const start = period.split("-")[0]?.trim() ?? period.trim();
  const parts = start.split(/\s+/);
  const monthMap: Record<string, number> = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  };

  if (parts.length === 2) {
    const month = monthMap[parts[0].slice(0, 3).toLowerCase()];
    const year = Number(parts[1]);
    if (!Number.isNaN(year) && month !== undefined) {
      return new Date(year, month, 1).getTime();
    }
  }

  const year = Number(parts[0]);
  if (!Number.isNaN(year)) {
    return new Date(year, 0, 1).getTime();
  }

  return new Date("1970-01-01").getTime();
}

function getOneLineDescription(text: string) {
  const firstSentence = text.split(".")[0]?.trim();
  if (!firstSentence) return text.trim();
  return `${firstSentence}.`;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  const sortedProjects = useMemo(
    () =>
      [...projects].sort(
        (a, b) => parseStartDate(b.period) - parseStartDate(a.period)
      ),
    []
  );

  const filteredProjects = useMemo(
    () =>
      sortedProjects.filter((project) =>
        matchesCategory(project, activeCategory)
      ),
    [activeCategory, sortedProjects]
  );

  const selectedProjectIndex = useMemo(() => {
    if (!selectedProject) return null;
    const index = sortedProjects.findIndex(
      (project) => project.title === selectedProject.title
    );
    return index >= 0 ? String(index + 1).padStart(2, "0") : null;
  }, [selectedProject, sortedProjects]);

  const openProjectDetails = (project: Project) => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setSelectedProject(project);
    requestAnimationFrame(() => setIsModalOpen(true));
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
    closeTimerRef.current = window.setTimeout(() => {
      setSelectedProject(null);
      closeTimerRef.current = null;
    }, 220);
  };

  useEffect(() => {
    if (!selectedProject) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeProjectDetails();
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [selectedProject]);

  useEffect(
    () => () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    },
    []
  );

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="relative noise-bg dot-grid-bg">
      <div className="section-container relative z-10">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="meta-label mb-2 block">Build Log</span>
            <h2 className="section-title">Systems Built</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-heading text-[10px] tracking-[0.14em] uppercase text-[var(--color-gray)]">
              {String(filteredProjects.length).padStart(2, "0")} shown / {String(projects.length).padStart(2, "0")} indexed
            </span>
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-blink" />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categoryTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveCategory(tab)}
              className={`font-heading text-[10px] tracking-[0.12em] uppercase px-4 py-2 border transition-colors ${
                activeCategory === tab
                  ? "bg-[var(--color-black)] text-[var(--color-cream)] border-[var(--color-black)]"
                  : "bg-[var(--color-cream-light)] text-[var(--color-black-soft)] border-[var(--color-border-light)] hover:border-[var(--color-accent)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const oneLine = getOneLineDescription(project.description);

            return (
              <article
                key={project.title}
                onClick={() => openProjectDetails(project)}
                className="relative aspect-[5/6] border border-[var(--color-border)] bg-[var(--color-cream-light)] overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.12)] hover:border-[var(--color-accent)]"
              >
                <span className="pointer-events-none absolute top-2 right-2 z-20 font-heading text-[8px] tracking-[0.12em] uppercase px-2 py-1 border border-[var(--color-accent)] bg-[var(--color-cream)]/90 text-[var(--color-accent)] opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  See Details
                </span>
                <div className="relative h-[60%] border-b border-[var(--color-border-light)]">
                  <CompactCardMedia project={project} />
                </div>

                <div className="h-[40%] p-4 flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-[var(--color-black)] uppercase leading-tight">
                      {project.title}
                    </h3>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="shrink-0 inline-flex items-center justify-center w-9 h-9 border border-[var(--color-border-light)] text-[var(--color-black)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                        title="GitHub"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                          aria-hidden="true"
                        >
                          <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.07A9.28 9.28 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.35 2.75-1.07 2.75-1.07.55 1.41.2 2.46.1 2.72.64.73 1.03 1.66 1.03 2.79 0 3.97-2.34 4.85-4.57 5.1.36.31.68.91.68 1.84 0 1.33-.01 2.39-.01 2.71 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="font-heading text-[10px] tracking-[0.1em] uppercase text-[var(--color-accent)] whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.subtitle}
                  </p>
                  <p
                    className="font-body text-sm text-[var(--color-black-soft)] overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {oneLine}
                  </p>
                  <p className="font-heading text-[10px] tracking-[0.12em] uppercase text-[var(--color-gray)]">
                    {project.period || "In Progress"}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-6 border border-[var(--color-border)] bg-[var(--color-cream-light)] p-8 text-center">
            <p className="font-heading text-[10px] tracking-[0.14em] uppercase text-[var(--color-gray)]">
              No project found for this category.
            </p>
          </div>
        )}
      </div>

      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 p-4 md:p-8 overflow-y-auto transition-all duration-200 ${
            isModalOpen ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0"
          }`}
          onClick={closeProjectDetails}
          role="presentation"
        >
          <div
            className={`mx-auto w-full max-w-6xl xl:max-w-7xl border border-[var(--color-border)] bg-[var(--color-cream)] transition-all duration-200 ${
              isModalOpen
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-3 scale-[0.99]"
            }`}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} details`}
          >
            <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-[var(--color-border-light)]">
              <div className="flex items-center gap-4">
                {selectedProjectIndex && (
                  <>
                    <span className="font-heading text-lg font-bold text-[var(--color-accent)]">
                      {selectedProjectIndex}
                    </span>
                    <div className="w-px h-5 bg-[var(--color-border-light)]" />
                  </>
                )}
                <span className="font-heading text-[10px] tracking-[0.14em] uppercase text-[var(--color-gray)]">
                  {selectedProject.period || "In Progress"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={closeProjectDetails}
                  className="tech-button-fill font-heading text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2.5 border border-[var(--color-border-light)] text-[var(--color-black-soft)] transition-all duration-300 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-5 md:p-8 lg:p-10">
              <div className="lg:col-span-5">
                <ExpandedMedia project={selectedProject} />
              </div>

              <div className="lg:col-span-7 flex flex-col gap-4">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-black)] uppercase tracking-[0.03em] mb-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <p className="font-heading text-xs tracking-[0.1em] uppercase text-[var(--color-accent)]">
                  {selectedProject.subtitle}
                </p>
                <p className="font-body text-sm md:text-base leading-relaxed text-[var(--color-black-soft)]">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="signal-tag text-[8px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-[10px] tracking-[0.12em] uppercase px-4 py-2 bg-[var(--color-black)] text-[var(--color-cream)] hover:bg-[var(--color-accent)] transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {selectedProject.xUrl && (
                    <a
                      href={selectedProject.xUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-[10px] tracking-[0.12em] uppercase px-4 py-2 bg-[var(--color-black)] text-[var(--color-cream)] hover:bg-[var(--color-accent)] transition-colors"
                    >
                      X ↗
                    </a>
                  )}
                  {selectedProject.vercelUrl && (
                    <a
                      href={selectedProject.vercelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-[10px] tracking-[0.12em] uppercase px-4 py-2 bg-[var(--color-black)] text-[var(--color-cream)] hover:bg-[var(--color-accent)] transition-colors"
                    >
                      Vercel ↗
                    </a>
                  )}
                  {selectedProject.colosseumUrl && (
                    <a
                      href={selectedProject.colosseumUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-[10px] tracking-[0.12em] uppercase px-4 py-2 bg-[var(--color-black)] text-[var(--color-cream)] hover:bg-[var(--color-accent)] transition-colors"
                    >
                      Colosseum ↗
                    </a>
                  )}
                  {selectedProject.instagramUrl && (
                    <a
                      href={selectedProject.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-[10px] tracking-[0.12em] uppercase px-4 py-2 bg-[var(--color-black)] text-[var(--color-cream)] hover:bg-[var(--color-accent)] transition-colors"
                    >
                      Instagram ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
