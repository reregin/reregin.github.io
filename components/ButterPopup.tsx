"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

interface ButterPopupProps {
  open: boolean;
  onClose: () => void;
}

interface Vec2 {
  x: number;
  y: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function ButterPopup({ open, onClose }: ButterPopupProps) {
  const butterRef = useRef<HTMLDivElement>(null);
  const [isPressing, setIsPressing] = useState(false);
  const [press, setPress] = useState(0);
  const [tilt, setTilt] = useState<Vec2>({ x: -7, y: 6 });
  const [poke, setPoke] = useState<Vec2>({ x: 50, y: 52 });

  const resetInteraction = useCallback(() => {
    setIsPressing(false);
    setPress(0);
    setTilt({ x: -7, y: 6 });
    setPoke({ x: 50, y: 52 });
  }, []);

  const handleClose = useCallback(() => {
    resetInteraction();
    onClose();
  }, [onClose, resetInteraction]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, handleClose]);

  const updateFromPointer = (clientX: number, clientY: number, force = 1) => {
    const butter = butterRef.current;
    if (!butter) return;

    const rect = butter.getBoundingClientRect();
    const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
    const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
    const dx = nx - 0.5;
    const dy = ny - 0.5;

    const centerWeight = 1 - clamp(Math.hypot(dx, dy) * 1.9, 0, 1);
    const nextPress = clamp(0.2 + centerWeight * 0.8 * force, 0, 1);

    setPress(nextPress);
    setPoke({ x: nx * 100, y: ny * 100 });
    setTilt({
      x: clamp(-dy * 15, -12, 12),
      y: clamp(dx * 18, -14, 14),
    });
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsPressing(true);
    updateFromPointer(event.clientX, event.clientY, 1);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isPressing) return;
    updateFromPointer(event.clientX, event.clientY, 1);
  };

  const releasePress = () => {
    setIsPressing(false);
    setPress(0);
    setTilt({ x: -7, y: 6 });
  };

  const squeezeX = 1 + press * 0.08;
  const squeezeY = 1 - press * 0.18;
  const indentationScale = 0.75 + press * 0.8;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      <button
        aria-label="Close butter popup"
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        onClick={handleClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Butter squishy toy"
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream-light)] shadow-[0_26px_80px_rgba(0,0,0,0.3)]"
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border-light)] px-5 py-3">
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-black-soft)]">
            Butter Squishy
          </p>
          <button
            onClick={handleClose}
            className="font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-gray)] transition-colors hover:text-[var(--color-accent)]"
          >
            Close
          </button>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-[1.25fr_0.75fr]">
          <div className="relative rounded-xl border border-[var(--color-border-light)] bg-[linear-gradient(180deg,#f7f2d6_0%,#f3edc8_100%)] p-4">
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_45%)]" />
            <div
              ref={butterRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={releasePress}
              onPointerCancel={releasePress}
              onPointerLeave={releasePress}
              className="relative mx-auto mt-3 h-40 w-[min(92%,560px)] touch-none select-none md:h-44"
              style={{
                transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: isPressing
                  ? "transform 40ms linear"
                  : "transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              <div className="absolute inset-x-[1%] bottom-[-8%] h-9 rounded-full bg-[rgba(115,92,46,0.26)] blur-md" />

              <div
                className="absolute inset-0 rounded-[16px] border border-[#d9c77a]"
                style={{
                  background:
                    "linear-gradient(180deg, #f8e88f 0%, #f4df72 45%, #ead35b 100%)",
                  transform: `scaleX(${squeezeX}) scaleY(${squeezeY})`,
                  transformOrigin: "center bottom",
                  transition: isPressing
                    ? "transform 30ms linear"
                    : "transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
              >
                <div className="absolute inset-[8%_4%_28%_4%] rounded-[12px] border border-[#e4d590] bg-[linear-gradient(180deg,#fff7bb_0%,#f8e98c_72%)]">
                  <div
                    className="pointer-events-none absolute h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(180,143,64,0.35)_0%,rgba(180,143,64,0.2)_35%,transparent_70%)]"
                    style={{
                      left: `${poke.x}%`,
                      top: `${poke.y}%`,
                      transform: `translate(-50%, -50%) scale(${indentationScale})`,
                      opacity: 0.25 + press * 0.55,
                      transition: isPressing
                        ? "transform 25ms linear, opacity 25ms linear"
                        : "transform 240ms ease, opacity 240ms ease",
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="mt-[-2px] flex w-[85%] items-center justify-between text-[#183f93]">
                      <div className="font-heading text-[clamp(0.8rem,2vw,1.55rem)] font-extrabold tracking-tight">
                        4oz.
                      </div>
                      <div className="text-right font-heading">
                        <div className="text-[clamp(0.45rem,1vw,0.62rem)] font-bold uppercase tracking-[0.12em]">
                          Salted
                        </div>
                        <div className="text-[clamp(1rem,3.1vw,2.15rem)] font-extrabold uppercase leading-none">
                          Butter
                        </div>
                        <div className="text-[clamp(0.45rem,1.2vw,0.75rem)] font-bold uppercase tracking-[0.07em]">
                          NET WT. (113 G)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-y-[18%] left-[-18%] w-[32%] rotate-12 bg-[rgba(255,255,255,0.22)] blur-sm" />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-cream)] p-4">
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
              Satisfying Mode
            </p>
            <h3 className="mt-2 font-heading text-sm font-bold uppercase tracking-[0.08em] text-[var(--color-black)]">
              Squish the butter
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-[var(--color-black-soft)]">
              Click and drag across the bar to poke and squish it. The center
              is softer, so it sinks deeper.
            </p>
            <div className="mt-4 border-t border-[var(--color-border-light)] pt-3">
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-gray)]">
                Tip
              </p>
              <p className="mt-1 font-body text-xs leading-relaxed text-[var(--color-gray)]">
                Works on desktop and mobile. Press ESC or click outside to
                close.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
