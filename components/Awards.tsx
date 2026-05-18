import { awards } from "@/lib/data";

export default function Awards() {
  return (
    <section id="awards" className="relative bg-[var(--color-cream-light)]">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-14">
          <p className="accent-label mb-2">honors</p>
          <h2 className="section-title">Awards & Recognition</h2>
        </div>

        {/* Awards */}
        <div className="space-y-8">
          {awards.map((award, i) => (
            <div
              key={i}
              className="border border-[var(--color-border-light)] bg-[var(--color-cream)] card-hover"
            >
              {/* Header bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 md:px-8 py-5 border-b border-[var(--color-border-light)]">
                <div className="flex items-start gap-4">
                  {/* Medal icon */}
                  <div className="shrink-0 w-10 h-10 bg-[var(--color-accent)] flex items-center justify-center mt-0.5">
                    <span className="text-white text-lg">🏅</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm md:text-base font-bold text-[var(--color-black)] leading-snug">
                      {award.title}
                    </h3>
                    <p className="font-body text-xs text-[var(--color-accent)] mt-1">
                      {award.issuer}
                    </p>
                  </div>
                </div>
                <div className="text-right sm:shrink-0">
                  <span className="font-heading text-[10px] tracking-[0.12em] uppercase text-[var(--color-gray)] block">
                    {award.date}
                  </span>
                  <span className="font-body text-xs text-[var(--color-black-soft)]">
                    {award.association}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="px-6 md:px-8 py-5">
                <ul className="space-y-2">
                  {award.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="font-body text-sm leading-relaxed text-[var(--color-black-soft)] flex gap-3"
                    >
                      <span className="text-[var(--color-accent)] mt-1 shrink-0">
                        ▸
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
