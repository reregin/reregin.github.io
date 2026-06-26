import Image from "next/image";
import { aboutText, profileBadges } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative bg-[var(--color-cream-light)] dot-grid-bg">
      <div className="section-container">
        <div className="mb-12">
          <span className="meta-label mb-2 block">Background</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 bg-[var(--color-cream-dark)] border border-[var(--color-border)] relative overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dvofzfezh/image/upload/v1779084445/Portrait_gkhjxq.jpg"
                  alt="Portrait of Regina George"
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover"
                />
                {/* Noise overlay on portrait */}
                <div className="absolute inset-0 noise-bg opacity-40" />
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-0 right-0 w-full h-full bg-[var(--color-accent)] opacity-80" />
                  <div className="absolute top-2 right-2 text-white text-xs font-heading font-bold">
                    ✦
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--color-accent)] opacity-30 max-w-sm hidden lg:block" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="decorative-line" />
              <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-[var(--color-gray)]">
                Background
              </span>
            </div>

            <div className="space-y-4">
              {aboutText.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-base md:text-lg leading-relaxed text-[var(--color-black-soft)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border-light)] border border-[var(--color-border-light)]">
              {profileBadges.map((badge, i) => (
                <div
                  key={badge}
                  className="bg-[var(--color-cream-light)] p-4 flex items-center gap-3"
                >
                  <span className="font-heading text-[10px] tracking-[0.16em] uppercase text-[var(--color-accent)]">
                    0{i + 1}
                  </span>
                  <span className="font-heading text-[10px] md:text-xs tracking-[0.12em] uppercase text-[var(--color-black)]">
                    {badge}
                  </span>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
