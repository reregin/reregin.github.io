import { builderNotes } from "@/lib/data";

export default function BuilderNotes() {
  return (
    <section className="relative bg-[var(--color-cream-light)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="accent-label mb-2">field notes</p>
            <h2 className="section-title">Blank Canvas</h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border-light)] border border-[var(--color-border-light)]">
            {builderNotes.map((note, i) => (
              <article
                key={note}
                className="min-h-44 bg-[var(--color-cream)] p-6 flex flex-col justify-between gap-6 hover:bg-[var(--color-cream-dark)] transition-colors"
              >
                <span className="font-heading text-[10px] tracking-[0.18em] uppercase text-[var(--color-accent)]">
                  note {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-base leading-relaxed text-[var(--color-black-soft)]">
                  {note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
