import { signalStrip } from "@/lib/data";

export default function SignalStrip() {
  const signals = [...signalStrip, ...signalStrip];

  return (
    <div className="w-full max-w-full overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-black)] text-[var(--color-cream)]">
      <div className="signal-marquee flex w-max">
        {signals.map((signal, i) => (
          <div
            key={`${signal}-${i}`}
            className="flex items-center gap-4 px-6 py-4 font-heading text-[10px] md:text-xs tracking-[0.14em] uppercase"
          >
            <span className="text-[var(--color-accent)]">✦</span>
            <span>{signal}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
