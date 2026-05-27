"use client";

import { useEffect, useRef, useCallback } from "react";
import { personalInfo, profileBadges } from "@/lib/data";

/* ─── 3D Particle Type ─── */
interface Bit {
  /* 3D coordinate space */
  x3d: number;
  y3d: number;
  z3d: number;
  /* base positions for grid and wave calculation */
  bx: number;
  bz: number;
  /* target height for spring physics */
  targetY: number;
  /* velocity for vertical spring physics */
  vy: number;
  /* phase offset for waves */
  phase: number;
  /* amplitude multiplier */
  amp: number;
  /* size factor */
  size: number;
  /* color and stem assignments */
  hasStem: boolean;
  stemLength: number;
  /* cached 2D coordinates for interactive mouse lookup */
  screenX: number;
  screenY: number;
}

/* ─── Sparkle / Star Type ─── */
interface Sparkle {
  x: number; // percentage of canvas width (0-1)
  y: number; // percentage of canvas height (0-1)
  size: number;
  maxOpacity: number;
  speed: number;
  phase: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const bitsRef = useRef<Bit[]>([]);
  const sparklesRef = useRef<Sparkle[]>([]);
  const rafRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  /* ─── Build the 3D grid ─── */
  const buildBits = useCallback((w: number, h: number) => {
    const bits: Bit[] = [];

    // Columns (X-axis) and Rows (Z-axis, representing depth) - ultra-high-definition pinpoint grid
    const cols = w < 640 ? 68 : w < 1024 ? 92 : 115;
    const rows = w < 640 ? 30 : w < 1024 ? 38 : 46;

    // Grid dimensions in world coordinate space
    const gridWidth = w < 640 ? w * 1.5 : w * 1.9;
    const gridDepth = w < 640 ? 550 : 750;

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        // Center the grid coordinates horizontally (bx ranges from -gridWidth/2 to gridWidth/2)
        const bx = cols > 1 ? ((col / (cols - 1)) - 0.5) * gridWidth : 0;
        // Center depth coordinates (bz ranges from -gridDepth/2 to gridDepth/2)
        const bz = rows > 1 ? ((row / (rows - 1)) - 0.5) * gridDepth : 0;

        // Wave phase offset based on coordinates for smooth, organic propagation
        const phase = (col / cols) * Math.PI * 3 + (row / rows) * Math.PI * 2;

        // Dampen the amplitudes near the edges so the grid fades out elegantly
        const depthRatio = row / (rows - 1);
        const colRatio = col / (cols - 1);
        const edgeDamp = Math.sin(depthRatio * Math.PI) * Math.sin(colRatio * Math.PI);
        const amp = (w < 640 ? 22 : 36) * edgeDamp;

        // Assign thin vertical stems to a random subset of particles (especially near middle-depth)
        const distToCenter = Math.sqrt(
          Math.pow((col / cols) - 0.5, 2) + Math.pow((row / rows) - 0.5, 2)
        );
        // Balance the stem probability for the increased density
        const stemChance = distToCenter < 0.38 ? 0.05 : 0.015;
        const hasStem = Math.random() < stemChance;
        const stemLength = w < 640 ? 45 + Math.random() * 45 : 75 + Math.random() * 85;

        bits.push({
          x3d: bx,
          y3d: 0,
          z3d: bz,
          bx,
          bz,
          targetY: 0,
          vy: 0,
          phase,
          amp,
          size: w < 640 ? 1.0 : 1.4,
          hasStem,
          stemLength,
          screenX: 0,
          screenY: 0,
        });
      }
    }

    bitsRef.current = bits;

    /* ─── Set static relative positions for sparkles ─── */
    sparklesRef.current = [
      { x: 0.36, y: 0.22, size: 8, maxOpacity: 0.65, speed: 1.1, phase: 0 },
      { x: 0.11, y: 0.31, size: 10, maxOpacity: 0.55, speed: 0.8, phase: Math.PI * 0.5 },
      { x: 0.83, y: 0.44, size: 9, maxOpacity: 0.7, speed: 1.4, phase: Math.PI },
      { x: 0.24, y: 0.54, size: 7, maxOpacity: 0.45, speed: 0.9, phase: Math.PI * 1.5 },
      { x: 0.91, y: 0.19, size: 8, maxOpacity: 0.4, speed: 1.2, phase: Math.PI * 0.25 },
      { x: 0.68, y: 0.62, size: 6, maxOpacity: 0.35, speed: 0.7, phase: Math.PI * 0.8 },
    ];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* ─── Canvas Sizing ─── */
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildBits(rect.width, rect.height);
    };
    resize();
    window.addEventListener("resize", resize);

    /* ─── Tracking Coordinates ─── */
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

    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);
    section.addEventListener("touchmove", onTouchMove, { passive: true });
    section.addEventListener("touchend", onTouchEnd);

    /* ─── Four-pointed Sparkle Drawing Helper ─── */
    const drawSparkle = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      opacity: number
    ) => {
      c.save();
      c.fillStyle = `rgba(232, 87, 63, ${opacity})`;
      c.beginPath();
      // Draw 4-pointed star with elegant inward curves
      c.moveTo(cx, cy - size);
      c.quadraticCurveTo(cx, cy, cx + size, cy);
      c.quadraticCurveTo(cx, cy, cx, cy + size);
      c.quadraticCurveTo(cx, cy, cx - size, cy);
      c.quadraticCurveTo(cx, cy, cx, cy - size);
      c.closePath();
      c.fill();
      c.restore();
    };

    /* ─── Tick Animation Loop ─── */
    const tick = () => {
      timeRef.current += 0.012;
      const t = timeRef.current;
      const bits = bitsRef.current;
      const sparkles = sparklesRef.current;
      const w = canvas.width / Math.min(window.devicePixelRatio || 1, 2);
      const h = canvas.height / Math.min(window.devicePixelRatio || 1, 2);
      const mouse = mouseRef.current;
      ctx.clearRect(0, 0, w, h);

      /* ─── 1. Draw Subtle Faint Background Orbit behind text ─── */
      const centerOrbitX = w / 2;
      const centerOrbitY = h / 2 - 38;
      const rx = w < 640 ? 150 : w < 1024 ? 240 : 330;
      const ry = w < 640 ? 32 : w < 1024 ? 50 : 65;
      const orbitRotation = -0.12; // tilt down-right / up-left

      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centerOrbitX, centerOrbitY, rx, ry, orbitRotation, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(232, 87, 63, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Rotating node along the ellipse
      const orbitSpeed = 0.65;
      const orbitAngle = t * orbitSpeed;
      const dotX =
        centerOrbitX +
        Math.cos(orbitAngle) * rx * Math.cos(orbitRotation) -
        Math.sin(orbitAngle) * ry * Math.sin(orbitRotation);
      const dotY =
        centerOrbitY +
        Math.cos(orbitAngle) * rx * Math.sin(orbitRotation) +
        Math.sin(orbitAngle) * ry * Math.cos(orbitRotation);

      ctx.beginPath();
      ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#E8573F";
      ctx.fill();
      ctx.restore();

      /* ─── 2. Draw Pulsating Sparkles (4-pointed stars) ─── */
      for (let i = 0; i < sparkles.length; i++) {
        const s = sparkles[i];
        const scx = s.x * w;
        const scy = s.y * h;
        // pulsate opacity using sine wave
        const pulsate = Math.sin(t * s.speed + s.phase);
        const currentOpacity = s.maxOpacity * (0.45 + 0.55 * pulsate);
        drawSparkle(ctx, scx, scy, s.size, currentOpacity);
      }

      /* ─── 3. Project and Render 3D Wavelength Grid ─── */
      // 3D Camera Settings (Yaw = side angle, Pitch = top-down tilt)
      const yaw = 0.22; 
      const pitch = 0.35; 
      const fov = w < 640 ? 550 : 680;
      const camZ = w < 640 ? 600 : 750;
      const camY = w < 640 ? 120 : 175; // pushes the terrain down

      const centerX = w / 2;
      const centerY = h / 2;

      // Depth parameters for fading opacity
      const zMin = camZ - 300;
      const zMax = camZ + 350;

      // Interaction Radius
      const hoverRadius = w < 640 ? 90 : 155;

      for (let i = 0; i < bits.length; i++) {
        const b = bits[i];

        // Wave formula: combination of multiple sine/cosine waves for organic peaks
        let waveY =
          Math.sin(b.bx * 0.0035 + t * 1.5) *
          Math.cos(b.bz * 0.0042 - t * 0.95) *
          b.amp;
        waveY += Math.sin(b.bx * 0.0075 - t * 2.2) * (b.amp * 0.25);
        waveY += Math.cos(b.bz * 0.011 + t * 1.1) * (b.amp * 0.15);

        // Hover Displacement: pull up towards cursor in 3D
        let isHovered = false;
        let hoverForce = 0;

        if (mouse && b.screenX > 0 && b.screenY > 0) {
          const dx = b.screenX - mouse.x;
          const dy = b.screenY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < hoverRadius) {
            isHovered = true;
            hoverForce = 1 - dist / hoverRadius;
            // Pull upward (negative coordinate is upward in our world space)
            const displacement = -hoverForce * hoverForce * 75;
            waveY += displacement;
          }
        }

        // Spring physics vertical interpolation
        const springK = 0.07;
        const damping = 0.83;
        const fy = (waveY - b.y3d) * springK;
        b.vy = (b.vy + fy) * damping;
        b.y3d += b.vy;

        // 3D coordinate transformation
        // Rot 1: Yaw (around Y axis)
        const x1 = b.bx * Math.cos(yaw) - b.bz * Math.sin(yaw);
        const z1 = b.bx * Math.sin(yaw) + b.bz * Math.cos(yaw);

        // Rot 2: Pitch (around X axis)
        const y2 = b.y3d * Math.cos(pitch) - z1 * Math.sin(pitch);
        const z2 = b.y3d * Math.sin(pitch) + z1 * Math.cos(pitch);

        const finalZ = z2 + camZ;
        if (finalZ <= 40) continue; // Behind camera clipping

        const scale = fov / finalZ;
        const screenX = centerX + x1 * scale;
        const screenY = centerY + (y2 + camY) * scale;

        // Cache coordinates for next tick hover calculation
        b.screenX = screenX;
        b.screenY = screenY;

        // Clip if offscreen
        if (screenX < -20 || screenX > w + 20 || screenY < -20 || screenY > h + 20) {
          continue;
        }

        // Opacity based on depth - soft, elegant, and subtle
        const opacity = Math.max(
          0.06,
          Math.min(0.48, 0.58 * (1 - (finalZ - zMin) / (zMax - zMin)))
        );

        // Particle base size
        const size = Math.max(0.6, Math.min(3.6, b.size * scale));

        // Draw Stem / Data pin if applicable
        if (b.hasStem) {
          const stemHeight = b.stemLength * scale;
          const stemTopY = screenY - stemHeight;

          ctx.beginPath();
          ctx.moveTo(screenX, screenY);
          ctx.lineTo(screenX, stemTopY);
          ctx.strokeStyle = `rgba(232, 87, 63, ${opacity * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Node square on top of the stem
          const nodeSize = Math.max(1.5, Math.min(4.5, size * 0.9));
          ctx.fillStyle = `rgba(232, 87, 63, ${opacity})`;
          ctx.fillRect(screenX - nodeSize / 2, stemTopY - nodeSize / 2, nodeSize, nodeSize);
        }

        // Draw primary grid node square (pixel/bit style) - stays uniform in color & opacity on hover
        ctx.fillStyle = `rgba(232, 87, 63, ${opacity})`;
        ctx.fillRect(screenX - size / 2, screenY - size / 2, size, size);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    /* ─── Cleanup ─── */
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
      section.removeEventListener("touchmove", onTouchMove);
      section.removeEventListener("touchend", onTouchEnd);
    };
  }, [buildBits]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-cream)] select-none"
    >
      {/* Full-bleed interactive 3D wavelength canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ imageRendering: "pixelated" }}
      />

      {/* Subtle grid overlay on top half only */}
      <div className="absolute inset-x-0 top-0 h-[45%] grid-overlay pointer-events-none z-[1]" />

      {/* Floating corner labels */}
      <div className="absolute top-20 left-8 lg:left-12 font-heading text-[8px] lg:text-[9px] tracking-[0.2em] text-[var(--color-gray)] uppercase hidden md:block opacity-35 z-[2]">
        WAVE_FIELD: ACTIVE
      </div>
      <div className="absolute top-20 right-8 lg:right-12 font-heading text-[8px] lg:text-[9px] tracking-[0.2em] text-[var(--color-gray)] uppercase hidden md:block opacity-35 z-[2]">
        SYS_STATUS: BUILDING
      </div>
      <div className="absolute bottom-6 left-8 lg:left-12 font-heading text-[8px] lg:text-[9px] tracking-[0.2em] text-[var(--color-gray)] uppercase hidden md:block opacity-35 z-[2]">
        BLOCK: ███_███
      </div>

      {/* Vertical scroll label — right edge */}
      <div className="absolute bottom-24 right-8 lg:right-12 font-heading text-[8px] tracking-[0.22em] text-[var(--color-gray)] uppercase hidden lg:flex flex-col items-center gap-2 opacity-40 z-[2]">
        <span className="writing-vertical" style={{ writingMode: "vertical-rl" }}>
          SCROLL TO EXPLORE
        </span>
        <div className="w-px h-10 bg-[var(--color-accent)] opacity-40" />
      </div>

      {/* ─── Main centered content ─── */}
      <div className="section-container text-center relative z-10 pt-16 pb-44 md:pb-52 flex flex-col items-center">
        {/* Welcome label - elegant cursive lowercase */}
        <p className="font-accent text-lg sm:text-xl md:text-2xl text-[var(--color-accent)] mb-4 animate-fade-in-up lowercase leading-none">
          welcome to my corner
        </p>

        {/* Name — two-tone centered */}
        <h1 className="font-display font-extrabold uppercase tracking-[0.04em] leading-[0.95] mb-7 animate-fade-in-up delay-100 flex flex-col gap-1 max-w-4xl">
          <span className="text-[var(--color-black)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Regina Maria
          </span>
          <span className="text-[var(--color-accent)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Samantha George
          </span>
        </h1>

        {/* Thin elegant separator with diamond center */}
        <div className="flex items-center gap-3 mb-6 animate-fade-in-up delay-200 opacity-80 w-full justify-center text-[var(--color-accent)]">
          <div className="w-8 h-px bg-[var(--color-accent-light)] opacity-50" />
          <span className="text-[6px] tracking-widest leading-none">◀─ ◆ ─▶</span>
          <div className="w-8 h-px bg-[var(--color-accent-light)] opacity-50" />
        </div>

        {/* Role */}
        <p className="font-heading text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[var(--color-black-soft)] mb-3 animate-fade-in-up delay-300">
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <p className="font-body text-xs sm:text-sm text-[var(--color-gray)] mb-10 max-w-lg mx-auto leading-relaxed animate-fade-in-up delay-300">
          turning raw data into intelligent systems and shipping on-chain
          products that actually matter.
        </p>

        {/* Badge tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl animate-fade-in-up delay-400">
          {profileBadges.map((badge, idx) => (
            <span
              key={idx}
              className="signal-tag text-[8px] tracking-[0.12em]"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTAs with delicate thin 1px borders */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-500">
          <a
            href="#projects"
            id="cta-projects"
            className="tech-button-fill font-heading text-[10px] font-bold tracking-[0.15em] uppercase px-8 py-3.5 border border-[var(--color-black)] text-[var(--color-black)] transition-all duration-300 cursor-pointer"
          >
            View Projects ↗
          </a>
          <a
            href="#contact"
            id="cta-contact"
            className="tech-button-accent font-heading text-[10px] font-bold tracking-[0.15em] uppercase px-8 py-3.5 border border-[var(--color-accent)] text-[var(--color-accent)] transition-all duration-300 cursor-pointer"
          >
            Contact Me ↗
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-linkedin"
            className="tech-button-fill font-heading text-[10px] font-bold tracking-[0.15em] uppercase px-8 py-3.5 border border-[var(--color-border-light)] text-[var(--color-black-soft)] transition-all duration-300 cursor-pointer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
