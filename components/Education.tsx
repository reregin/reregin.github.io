import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-14">
          <span className="meta-label mb-2 block">Training Data</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="border border-[var(--color-border)] p-6 md:p-8 bg-[var(--color-cream)] group relative overflow-hidden grid-overlay transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:shadow-[0_8px_20px_rgba(26,26,26,0.04)]"
            >
              {/* High-tech blueprint corner brackets */}
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-4 group-hover:h-4 transition-all duration-300 select-none pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-4 group-hover:h-4 transition-all duration-300 select-none pointer-events-none" />
              <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-4 group-hover:h-4 transition-all duration-300 select-none pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-4 group-hover:h-4 transition-all duration-300 select-none pointer-events-none" />

              {/* Accent top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Index block */}
              <div className="w-12 h-12 border border-[var(--color-border)] flex items-center justify-center mb-5 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] transition-all duration-300 relative z-10">
                <span className="font-heading text-sm font-bold text-[var(--color-black)] group-hover:text-white transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-heading text-base md:text-lg font-bold text-[var(--color-black)] mb-1 relative z-10">
                {edu.institution}
              </h3>
              <p className="font-body text-sm text-[var(--color-accent)] mb-3 relative z-10">
                {edu.degree}
              </p>
              <p className="font-heading text-[10px] tracking-[0.15em] uppercase text-[var(--color-gray)] relative z-10">
                {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
