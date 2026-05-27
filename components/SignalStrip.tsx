"use client";

import { useEffect, useRef, useCallback } from "react";

interface Pixel {
  x: number;
  y: number;
  isCoralBase: boolean;
}

export default function SignalStrip() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);

  /* ─── Build Stable Pixel Grid ─── */
  const buildGrid = useCallback((w: number, h: number) => {
    const pixels: Pixel[] = [];
    const pxSize = w < 640 ? 4 : 5; // 4px on mobile, 5px on desktop
    const cols = Math.ceil(w / pxSize);
    const rows = Math.ceil(h / pxSize);

    for (let r = 0; r < rows; r++) {
      const y = r * pxSize;
      const yRatio = r / (rows - 1);

      // Core dither math:
      // Top 12% is solid coral, Bottom 12% is solid cream
      let threshold = 1.0;
      if (yRatio < 0.12) {
        threshold = 1.0;
      } else if (yRatio > 0.88) {
        threshold = 0.0;
      } else {
        // Linear transition in between
        const t = (yRatio - 0.12) / 0.76;
        threshold = 1.0 - t;
      }

      for (let c = 0; c < cols; c++) {
        const x = c * pxSize;
        // Determine stable base color state (true = coral, false = cream)
        const isCoralBase = Math.random() < threshold;

        pixels.push({
          x,
          y,
          isCoralBase,
        });
      }
    }

    pixelsRef.current = pixels;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = 95 * dpr; // stable 95px height transition
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `95px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid(rect.width, 95);
    };
    resize();
    window.addEventListener("resize", resize);

    /* ─── Cursor Tracking ─── */
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = null;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
    };
    const onTouchEnd = () => {
      mouseRef.current = null;
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd);

    /* ─── Render Tick ─── */
    const tick = () => {
      const w = canvas.width / Math.min(window.devicePixelRatio || 1, 2);
      const h = canvas.height / Math.min(window.devicePixelRatio || 1, 2);
      const pixels = pixelsRef.current;
      const mouse = mouseRef.current;
      const hoverRadius = w < 640 ? 60 : 90;
      const pxSize = w < 640 ? 4 : 5;

      ctx.clearRect(0, 0, w, h);

      // Colors matching tokens
      const colorCoral = "#E8573F";
      const colorCream = "#f5f0e8";

      for (let i = 0; i < pixels.length; i++) {
        const p = pixels[i];
        let isCoral = p.isCoralBase;

        // Interactive hover distortion:
        // Inside the hover radius, we apply a digital ripple that flips the pixel color state
        if (mouse) {
          const dx = p.x + pxSize / 2 - mouse.x;
          const dy = p.y + pxSize / 2 - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < hoverRadius) {
            const force = (1 - dist / hoverRadius) * 0.85;
            // Generate a spatial noise offset so flips are clustered and organic
            const wave = Math.sin(p.x * 0.05 + p.y * 0.05 + Date.now() * 0.005);
            if (Math.random() < force * (0.5 + 0.5 * wave)) {
              isCoral = !p.isCoralBase;
            }
          }
        }

        ctx.fillStyle = isCoral ? colorCoral : colorCream;
        ctx.fillRect(p.x, p.y, pxSize, pxSize);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    /* ─── Cleanup ─── */
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [buildGrid]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[95px] overflow-hidden bg-[var(--color-cream)] select-none relative z-10"
      style={{ imageRendering: "pixelated" }}
    >
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" />
    </div>
  );
}
