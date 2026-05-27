import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative noise-bg">
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="mb-14">
          <span className="meta-label mb-2 block">Verified Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        {/* Certs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="border border-[var(--color-border-light)] p-5 flex items-start gap-4 bg-[var(--color-cream)] group relative overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-cream-light)]"
            >
              {/* Micro technical guidelines */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] transition-colors select-none pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] transition-colors select-none pointer-events-none" />
              {/* Icon */}
              <div className="shrink-0 w-10 h-10 border border-[var(--color-accent)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-all duration-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[var(--color-accent)] group-hover:text-white transition-colors"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading text-xs font-bold text-[var(--color-black)] leading-snug">
                  {cert.name}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 font-heading text-[10px] tracking-[0.12em] uppercase text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors"
                  >
                    show credential ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
