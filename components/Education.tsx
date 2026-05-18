import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-14">
          <p className="accent-label mb-2">education</p>
          <h2 className="section-title">Academic Background</h2>
        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="border border-[var(--color-border)] p-6 md:p-8 card-hover bg-[var(--color-cream)] group relative overflow-hidden"
            >
              {/* Accent top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Graduation icon */}
              <div className="w-12 h-12 border border-[var(--color-border)] flex items-center justify-center mb-5 group-hover:border-[var(--color-accent)] transition-colors">
                <span className="text-xl">🎓</span>
              </div>

              <h3 className="font-heading text-base md:text-lg font-bold text-[var(--color-black)] mb-1">
                {edu.institution}
              </h3>
              <p className="font-body text-sm text-[var(--color-accent)] mb-3">
                {edu.degree}
              </p>
              <p className="font-heading text-[10px] tracking-[0.15em] uppercase text-[var(--color-gray)]">
                {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
