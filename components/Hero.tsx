import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative grid dots */}
      <div className="absolute top-12 right-12 hidden lg:grid grid-cols-4 gap-3 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-[var(--color-black)]" />
        ))}
      </div>

      {/* Decorative circle */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-[var(--color-border-light)] hidden lg:block" />

      <div className="section-container text-center relative z-10 pt-20">
        {/* Handwritten accent */}
        <p className="accent-label mb-4 animate-fade-in-up">portfolio</p>

        {/* Main name */}
        <h1 className="font-heading font-bold text-[var(--color-black)] uppercase tracking-[0.06em] leading-[1.1] mb-6 animate-fade-in-up delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {personalInfo.name.split(" ").map((word, i) => (
            <span key={i}>
              {word}
              {i < personalInfo.name.split(" ").length - 1 && (
                <>
                  {" "}
                  {i === 1 && <br className="hidden sm:block" />}
                </>
              )}
            </span>
          ))}
        </h1>

        {/* Decorative line */}
        <div className="mx-auto w-16 h-[2px] bg-[var(--color-accent)] mb-6 animate-fade-in-up delay-200" />

        {/* Subtitle */}
        <p className="font-body text-base md:text-lg text-[var(--color-black-soft)] mb-10 max-w-xl mx-auto animate-fade-in-up delay-300">
          {personalInfo.title}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a
            href="#projects"
            id="cta-projects"
            className="font-heading text-xs font-bold tracking-[0.12em] uppercase px-7 py-3 border-2 border-[var(--color-black)] text-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-[var(--color-cream)] transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            id="cta-contact"
            className="font-heading text-xs font-bold tracking-[0.12em] uppercase px-7 py-3 bg-[var(--color-accent)] text-white border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] hover:border-[var(--color-accent-dark)] transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-linkedin"
            className="font-heading text-xs font-bold tracking-[0.12em] uppercase px-7 py-3 border-2 border-[var(--color-border-light)] text-[var(--color-black-soft)] hover:border-[var(--color-black)] transition-all duration-300"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-fade-in-up delay-600">
          <a
            href="#about"
            className="inline-flex text-[var(--color-gray)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Scroll to about section"
          >
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="animate-bounce"
            >
              <path
                d="M8 0v20m0 0l-6-6m6 6l6-6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative star glyph */}
      <div className="absolute top-1/4 left-8 text-[var(--color-accent)] text-2xl opacity-40 hidden lg:block">
        ✦
      </div>
      <div className="absolute bottom-1/3 right-12 text-[var(--color-black)] text-lg opacity-15 hidden lg:block">
        ✦
      </div>
    </section>
  );
}
