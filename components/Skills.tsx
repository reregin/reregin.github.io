import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[var(--color-cream-light)] dot-grid-bg">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-14">
          <p className="meta-label mb-2">skills</p>
          <h2 className="section-title">What I Know</h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <div key={i} className="group">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-all duration-300">
                  <span className="font-heading text-xs font-bold text-[var(--color-black)] group-hover:text-white transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading text-sm font-bold tracking-[0.1em] uppercase text-[var(--color-black)]">
                  {cat.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-4 py-2 border border-[var(--color-border-light)] text-[var(--color-black-soft)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
