"use client";

import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative bg-[var(--color-black)] border-t border-[rgba(245,240,232,0.1)] dot-grid-bg-dark select-none py-6 md:py-8"
    >
      <div className="section-container relative z-10 py-0 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-10">
        
        {/* Left Side: Brand branding and core tagline */}
        <div className="flex flex-col gap-2.5 max-w-md">
          <div className="flex items-center gap-2.5">
            <span className="font-heading text-sm font-bold tracking-[0.18em] uppercase text-[var(--color-cream)] leading-none">
              RG<span className="text-[var(--color-accent)]">.</span>
            </span>
            <span className="text-[var(--color-accent)] text-[7px] leading-none uppercase tracking-[0.16em] font-heading px-1.5 py-0.5 border border-[var(--color-accent)] rounded-sm">
              ml_sys: active
            </span>
          </div>
          <p className="font-body text-xs sm:text-sm text-[var(--color-gray-light)] leading-relaxed">
            Let&apos;s build something meaningful with data and technology.
          </p>
          <p className="font-heading text-[8px] tracking-[0.15em] uppercase text-[var(--color-gray)] opacity-80 mt-0.5 leading-none">
            built with Next.js, curiosity, and determination
          </p>
        </div>

        {/* Right Side: Sleek, high-fidelity inline technical links */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 shrink-0 w-full lg:w-auto">
          {/* Email Channel */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 group cursor-pointer flex-1 sm:flex-none"
          >
            <span className="text-sm text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110">✉</span>
            <div className="flex flex-col">
              <span className="font-heading text-[7px] tracking-[0.18em] uppercase text-[var(--color-gray-light)] opacity-70 leading-none mb-1">
                email_address
              </span>
              <span className="font-body text-xs md:text-sm text-[var(--color-cream)] font-medium border-b border-transparent group-hover:border-[var(--color-accent)] transition-all duration-200 pb-0.5 leading-none">
                {personalInfo.email}
              </span>
            </div>
          </a>

          {/* LinkedIn Channel */}
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group cursor-pointer flex-1 sm:flex-none"
          >
            <span className="text-sm text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110">🔗</span>
            <div className="flex flex-col">
              <span className="font-heading text-[7px] tracking-[0.18em] uppercase text-[var(--color-gray-light)] opacity-70 leading-none mb-1">
                linkedin_net
              </span>
              <span className="font-body text-xs md:text-sm text-[var(--color-cream)] font-medium border-b border-transparent group-hover:border-[var(--color-accent)] transition-all duration-200 pb-0.5 leading-none">
                {personalInfo.linkedin.replace("www.", "")}
              </span>
            </div>
          </a>

          {/* Instagram Channel */}
          <a
            href={`https://instagram.com/${personalInfo.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group cursor-pointer flex-1 sm:flex-none"
          >
            <span className="text-sm text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110">📸</span>
            <div className="flex flex-col">
              <span className="font-heading text-[7px] tracking-[0.18em] uppercase text-[var(--color-gray-light)] opacity-70 leading-none mb-1">
                social_channel
              </span>
              <span className="font-body text-xs md:text-sm text-[var(--color-cream)] font-medium border-b border-transparent group-hover:border-[var(--color-accent)] transition-all duration-200 pb-0.5 leading-none">
                @{personalInfo.instagram}
              </span>
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
}
