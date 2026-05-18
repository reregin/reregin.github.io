"use client";

import { useState } from "react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="relative bg-[var(--color-cream-light)]">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-14">
          <p className="accent-label mb-2">experiences</p>
          <h2 className="section-title">Where I&apos;ve Worked</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-[var(--color-border-light)]" />

          <div className="space-y-10">
            {visibleExperiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-[11px] md:left-[27px] top-2 w-[10px] h-[10px] rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-cream-light)] group-hover:bg-[var(--color-accent)] transition-colors duration-300 z-10" />

                {/* Card */}
                <div className="border border-[var(--color-border-light)] bg-[var(--color-cream)] p-6 md:p-8 card-hover">
                  {/* Period */}
                  <span className="font-heading text-[10px] tracking-[0.15em] uppercase text-[var(--color-gray)] block mb-2">
                    {exp.period}
                  </span>

                  {/* Role */}
                  <h3 className="font-heading text-base md:text-lg font-bold text-[var(--color-black)] mb-1">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <p className="font-body text-sm text-[var(--color-accent)] mb-4">
                    {exp.company}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="font-body text-sm leading-relaxed text-[var(--color-black-soft)] flex gap-3"
                      >
                        <span className="text-[var(--color-accent)] mt-1.5 shrink-0">
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

        {experiences.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="font-heading text-xs font-bold tracking-[0.12em] uppercase px-7 py-3 border-2 border-[var(--color-black)] text-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-[var(--color-cream)] transition-all duration-300"
              aria-expanded={showAll}
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
