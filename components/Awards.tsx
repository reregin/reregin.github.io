"use client";

import { awards } from "@/lib/data";

export default function Awards() {
  return (
    <section id="awards" className="relative bg-[var(--color-cream-light)] dot-grid-bg select-none">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-12">
          <span className="meta-label mb-2 block">Recognition Log</span>
          <h2 className="section-title">Awards &amp; Honors</h2>
        </div>

        {/* Pure Achievements Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* 1. BRONZE MEDALIST - BIGGER BENTO CARD (Row 1, Cols 1 & 2 - Showcase) */}
          <div className="md:col-span-2 border border-[var(--color-border-light)] bg-[var(--color-cream)] flex flex-col sm:flex-row overflow-hidden min-h-[350px] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:shadow-[0_8px_24px_rgba(26,26,26,0.04)] group relative">
            {/* High-tech blueprint corner brackets */}
            <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 select-none pointer-events-none z-20" />
            <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 select-none pointer-events-none z-20" />
            <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 select-none pointer-events-none z-20" />
            <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 select-none pointer-events-none z-20" />
            {/* Split Left: Cloudinary picture placeholder */}
            <div className="relative w-full sm:w-[42%] bg-[var(--color-cream-dark)] border-b sm:border-b-0 sm:border-r border-[var(--color-border-light)] overflow-hidden flex items-center justify-center shrink-0 min-h-[200px] sm:min-h-full pointer-events-none">
              {/* Grid Overlay */}
              <div className="absolute inset-0 grid-overlay opacity-25" />

              {/* Noise texture */}
              <div className="absolute inset-0 noise-bg opacity-30" />

              {/* Pulsing horizontal line */}
              <div className="absolute inset-x-0 h-px bg-[var(--color-accent)] opacity-20 animate-pulse top-1/2" />

              {/* System Badge */}
              <div className="absolute top-3 left-4 flex items-center gap-1.5 font-heading text-[8px] uppercase tracking-[0.16em] text-[var(--color-gray)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-blink" />
                SYS_RECON_LARG_ASSET
              </div>

              {/* Secure code */}
              <div className="absolute bottom-3 left-4 font-heading text-[7px] tracking-[0.12em] text-[var(--color-gray)] opacity-60">
                PIMNAS_KEY: 0x8a92...e2b1
              </div>

              {/* Central vector illustration */}
              <div className="text-center z-10 flex flex-col items-center gap-2">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="text-[var(--color-accent)] opacity-75"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" fillOpacity="0.15" />
                </svg>
                <span className="font-heading text-[9px] tracking-[0.2em] text-[var(--color-black-soft)] uppercase block font-bold">
                  [ cloudinary_pimnas_lg_01.jpg ]
                </span>
              </div>
            </div>

            {/* Split Right: Details and Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="px-6 md:px-8 py-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-8 h-8 bg-[var(--color-accent)] flex items-center justify-center mt-0.5">
                    <span className="text-white font-heading text-[10px] font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm md:text-base font-bold text-[var(--color-black)] leading-snug">
                      {awards[0].title}
                    </h3>
                    <p className="font-body text-[11px] text-[var(--color-accent)] mt-0.5 leading-none">
                      {awards[0].issuer}
                    </p>
                  </div>
                </div>

                {/* Bullets list */}
                <ul className="space-y-2.5">
                  {awards[0].bullets.slice(0, 4).map((bullet, j) => (
                    <li
                      key={j}
                      className="font-body text-[12px] leading-relaxed text-[var(--color-black-soft)] flex gap-2.5"
                    >
                      <span className="text-[var(--color-accent)] mt-0.5 shrink-0 text-[10px]">
                        ▸
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Meta Bar */}
              <div className="flex items-center justify-between px-6 md:px-8 py-3.5 border-t border-[var(--color-border-light)] bg-[var(--color-cream-light)]/40 opacity-80">
                <span className="font-heading text-[8px] tracking-[0.12em] uppercase text-[var(--color-gray)]">
                  {awards[0].date}
                </span>
                <span className="font-body text-[10px] text-[var(--color-black-soft)] italic">
                  {awards[0].association}
                </span>
              </div>
            </div>
          </div>

          {/* 2. MOST INSPIRING TEAM - STANDARD BENTO CARD (Row 1, Col 3) */}
          <div className="border border-[var(--color-border-light)] bg-[var(--color-cream)] flex flex-col overflow-hidden min-h-[350px] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:shadow-[0_8px_24px_rgba(26,26,26,0.04)] group relative">
            {/* High-tech blueprint corner brackets */}
            <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 select-none pointer-events-none z-20" />
            <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 select-none pointer-events-none z-20" />
            <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 select-none pointer-events-none z-20" />
            <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 select-none pointer-events-none z-20" />
            {/* Top: Cloudinary picture placeholder */}
            <div className="relative w-full h-36 bg-[var(--color-cream-dark)] border-b border-[var(--color-border-light)] overflow-hidden flex items-center justify-center pointer-events-none">
              <div className="absolute inset-0 grid-overlay opacity-25" />
              <div className="absolute inset-0 noise-bg opacity-30" />
              <div className="absolute top-3 left-4 flex items-center gap-1.5 font-heading text-[8px] uppercase tracking-[0.16em] text-[var(--color-gray)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-blink" />
                SYS_RECON_ASSET
              </div>

              <div className="text-center z-10 flex flex-col items-center gap-1.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="text-[var(--color-accent)] opacity-65"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                  <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-heading text-[8px] tracking-[0.2em] text-[var(--color-black-soft)] uppercase block font-bold">
                  [ cloudinary_photo_log_02.jpg ]
                </span>
              </div>
            </div>

            {/* Content & Details */}
            <div className="flex-1 flex flex-col justify-between p-5 md:p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 bg-[var(--color-accent)] flex items-center justify-center mt-0.5">
                    <span className="text-white font-heading text-[9px] font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xs md:text-sm font-bold text-[var(--color-black)] leading-snug">
                      {awards[1].title}
                    </h3>
                    <p className="font-body text-[10px] text-[var(--color-accent)] mt-0.5">
                      {awards[1].issuer}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {awards[1].bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="font-body text-[11px] leading-relaxed text-[var(--color-black-soft)] flex gap-2"
                    >
                      <span className="text-[var(--color-accent)] mt-0.5 shrink-0">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between border-t border-[var(--color-border-light)] mt-4 pt-3 opacity-75">
                <span className="font-heading text-[8px] tracking-[0.12em] uppercase text-[var(--color-gray)]">
                  {awards[1].date}
                </span>
                <span className="font-body text-[9px] text-[var(--color-black-soft)] italic">
                  {awards[1].association}
                </span>
              </div>
            </div>
          </div>

          {/* 3. FINALIST - FULL WIDTH BENTO CARD (Row 2, Cols 1, 2 & 3 - Spans all 3 columns) */}
          <div className="md:col-span-3 border border-[var(--color-border-light)] bg-[var(--color-cream)] flex flex-col sm:flex-row overflow-hidden min-h-[220px] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:shadow-[0_8px_24px_rgba(26,26,26,0.04)] group relative">
            {/* High-tech blueprint corner brackets */}
            <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 select-none pointer-events-none z-20" />
            <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 select-none pointer-events-none z-20" />
            <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 select-none pointer-events-none z-20" />
            <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-[var(--color-border-light)] group-hover:border-[var(--color-accent)] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 select-none pointer-events-none z-20" />
            {/* Left: Cloudinary picture placeholder (landscape split) */}
            <div className="relative w-full sm:w-[28%] bg-[var(--color-cream-dark)] border-b sm:border-b-0 sm:border-r border-[var(--color-border-light)] overflow-hidden flex items-center justify-center shrink-0 min-h-[140px] sm:min-h-full pointer-events-none">
              <div className="absolute inset-0 grid-overlay opacity-25" />
              <div className="absolute inset-0 noise-bg opacity-30" />
              <div className="absolute top-3 left-4 flex items-center gap-1.5 font-heading text-[8px] uppercase tracking-[0.16em] text-[var(--color-gray)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-blink" />
                SYS_RECON_ASSET
              </div>

              <div className="text-center z-10 flex flex-col items-center gap-1.5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="text-[var(--color-accent)] opacity-65"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                  <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-heading text-[8px] tracking-[0.2em] text-[var(--color-black-soft)] uppercase block font-bold">
                  [ cloudinary_photo_log_03.jpg ]
                </span>
              </div>
            </div>

            {/* Right: Content & Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="px-6 md:px-8 py-5">
                <div className="flex items-start gap-3 mb-3.5">
                  <div className="shrink-0 w-6 h-6 bg-[var(--color-accent)] flex items-center justify-center mt-0.5">
                    <span className="text-white font-heading text-[9px] font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xs md:text-sm font-bold text-[var(--color-black)] leading-snug">
                      {awards[2].title}
                    </h3>
                    <p className="font-body text-[10px] text-[var(--color-accent)] mt-0.5 leading-none">
                      {awards[2].issuer}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {awards[2].bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="font-body text-[11px] leading-relaxed text-[var(--color-black-soft)] flex gap-2"
                    >
                      <span className="text-[var(--color-accent)] mt-0.5 shrink-0">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between px-6 md:px-8 py-3.5 border-t border-[var(--color-border-light)] bg-[var(--color-cream-light)]/40 opacity-75">
                <span className="font-heading text-[8px] tracking-[0.12em] uppercase text-[var(--color-gray)]">
                  {awards[2].date}
                </span>
                <span className="font-body text-[9px] text-[var(--color-black-soft)] italic">
                  {awards[2].association}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
