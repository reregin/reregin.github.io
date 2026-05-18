import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-14">
          <p className="accent-label mb-2">certifications</p>
          <h2 className="section-title">Credentials</h2>
        </div>

        {/* Certs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="border border-[var(--color-border-light)] p-5 flex items-start gap-4 card-hover bg-[var(--color-cream)] group"
            >
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
              <div>
                <p className="font-heading text-xs font-bold text-[var(--color-black)] leading-snug">
                  {cert.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
