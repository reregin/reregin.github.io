import { builderNotes } from "@/lib/data";

export default function BuilderNotes() {
  const rotations = ["-rotate-[0.6deg]", "rotate-[0.8deg]", "-rotate-[0.8deg]", "rotate-[0.5deg]"];

  return (
    <section className="relative bg-[var(--color-cream-light)] noise-bg select-none py-16 md:py-24 border-y border-[var(--color-border-light)] overflow-hidden">
      <div className="section-container relative z-10 flex flex-col gap-10 md:gap-12">
        {/* Full-width Section Title */}
        <div className="text-left">
          <span className="meta-label mb-2 block">Field Notes</span>
          <h2 className="section-title">Blank Canvas</h2>
        </div>

        {/* Full-width Wall-mounted Whiteboard */}
        <div className="w-full relative bg-[#fdfdfd] border-[10px] md:border-[14px] border-[var(--color-cream-dark)] rounded-xl shadow-[0_22px_45px_rgba(26,26,26,0.08),_inset_0_1px_3px_rgba(0,0,0,0.08)] p-6 md:p-8 pt-10 select-none">
          {/* Satin warm safety corner caps */}
          <div className="absolute top-0 left-0 w-3.5 h-3.5 bg-[#dcd4c5] rounded-tl-[3px] z-30" />
          <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#dcd4c5] rounded-tr-[3px] z-30" />
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 bg-[#dcd4c5] rounded-bl-[3px] z-30" />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#dcd4c5] rounded-br-[3px] z-30" />

          {/* Whiteboard shiny glass glare/reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 opacity-60 pointer-events-none rounded-lg z-20" />

          {/* Integrated light warm marker tray centered at the bottom frame edge */}
          <div className="absolute -bottom-[10px] md:-bottom-[14px] left-1/2 -translate-x-1/2 w-48 h-[6px] bg-[var(--color-cream-dark)] border-t border-[#d0c6b5] rounded-b-md shadow-sm flex items-center justify-center gap-4 px-3 select-none pointer-events-none z-30">
            {/* Colored Dry-Erase Markers sitting on the tray */}
            <div className="absolute -top-[5px] left-8 w-8 h-[5px] bg-[#1e293b] rounded-t-sm" title="Black marker" />
            <div className="absolute -top-[5px] left-20 w-8 h-[5px] bg-[#dc2626] rounded-t-sm" title="Red marker" />
            <div className="absolute -top-[5px] right-8 w-8 h-[5px] bg-[#2563eb] rounded-t-sm" title="Blue marker" />
          </div>

          {/* Notes Grid inside Whiteboard (Bento Grid layout matching note content density) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {builderNotes.map((note, i) => {
              const rotationClass = rotations[i % rotations.length];
              const stamps = ["VERIFIED", "COMMIT", "ARCHIVE", "OUTPUT"];
              const colSpans = ["md:col-span-1", "md:col-span-2", "md:col-span-2", "md:col-span-1"];
              const colSpanClass = colSpans[i % colSpans.length];

              return (
                <article
                  key={note}
                  className={`min-h-[240px] bg-[#fdfdfb] border border-[rgba(26,26,26,0.12)] p-6 pt-8 pb-6 flex flex-col justify-between hover:border-[rgba(26,26,26,0.22)] hover:shadow-[0_8px_20px_rgba(26,26,26,0.05)] transition-all duration-300 relative cursor-text select-text group ${colSpanClass} ${rotationClass}`}
                    style={{
                      backgroundImage: "linear-gradient(rgba(26,26,26,0.05) 1px, transparent 1px)",
                      backgroundSize: "100% 28px",
                      backgroundPosition: "0 12px",
                    }}
                  >
                    {/* Laser scanner sweep line */}
                    <div className="laser-scan-line" />

                    {/* Drafting Tape Effect on some cards */}
                    {i % 3 === 0 && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#ebe5d9]/60 backdrop-blur-[0.5px] border-l border-r border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transform -rotate-1 select-none pointer-events-none z-30" />
                    )}

                    {/* Notebook vertical red/coral margin line */}
                    <div className="absolute left-[38px] top-0 bottom-0 w-[1px] bg-[rgba(232,87,63,0.22)] select-none pointer-events-none" />

                    {/* Binder Punch Holes */}
                    <div className="absolute left-3 top-6 w-2.5 h-2.5 rounded-full bg-[var(--color-cream-light)] border border-[rgba(26,26,26,0.12)] shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] select-none pointer-events-none" />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[var(--color-cream-light)] border border-[rgba(26,26,26,0.12)] shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] select-none pointer-events-none" />
                    <div className="absolute left-3 bottom-6 w-2.5 h-2.5 rounded-full bg-[var(--color-cream-light)] border border-[rgba(26,26,26,0.12)] shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] select-none pointer-events-none" />

                    {/* Lab Stamp Effect */}
                    <div 
                      className="absolute bottom-6 right-6 font-heading text-[8px] tracking-[0.25em] font-bold text-[var(--color-accent)] border border-[rgba(232,87,63,0.35)] px-2 py-0.5 rounded-sm opacity-0 scale-150 rotate-[-12deg] group-hover:opacity-30 group-hover:scale-100 transition-all duration-300 ease-out select-none pointer-events-none z-20"
                      style={{ transformOrigin: "center" }}
                    >
                      {stamps[i % stamps.length]}
                    </div>

                    {/* Note Content Container */}
                    <div className="pl-8 relative z-10 flex flex-col justify-between h-full gap-4">
                      <div className="flex items-center justify-between select-none">
                        <span className="font-heading text-[8px] tracking-[0.18em] uppercase text-[var(--color-accent)] font-bold">
                          note_log_0{i + 1}
                        </span>
                        <span className="font-heading text-[7px] tracking-[0.1em] uppercase text-[var(--color-gray)] opacity-60">
                          sys.raw
                        </span>
                      </div>

                      <p className="font-heading text-xs tracking-tight text-[var(--color-black-soft)] leading-[28px] font-medium flex-1 pt-1">
                        {note}
                      </p>

                      <div className="flex justify-end select-none mt-2">
                        <span className="font-heading text-[7px] tracking-[0.15em] uppercase text-[var(--color-gray)] opacity-50">
                          * end of block
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
}
