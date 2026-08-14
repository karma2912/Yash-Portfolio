"use client";
import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  ox: number;
  oy: number;
}

export default function TechnicalBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0;
    let points: Point[] = [];
    const spacing = 46;
    let mouseX = -9999,
      mouseY = -9999;
    let raf: number;

    function resize() {
      const parent = wrap!.parentElement!;
      w = canvas!.width = parent.offsetWidth;
      h = canvas!.height = parent.offsetHeight;
      points = [];
      for (let x = 0; x < w + spacing; x += spacing) {
        for (let y = 0; y < h + spacing; y += spacing) {
          points.push({ x, y, ox: x, oy: y });
        }
      }
    }
    resize();
    window.addEventListener("resize", resize);

    const heroEl = wrap!.parentElement!;
    function onMove(e: MouseEvent) {
      const r = canvas!.getBoundingClientRect();
      mouseX = e.clientX - r.left;
      mouseY = e.clientY - r.top;
    }
    function onLeave() {
      mouseX = -9999;
      mouseY = -9999;
    }
    heroEl.addEventListener("mousemove", onMove);
    heroEl.addEventListener("mouseleave", onLeave);

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      ctx!.strokeStyle = "rgba(255,255,255,0.045)";
      for (let x = 0; x < w; x += spacing) {
        ctx!.beginPath();
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x, h);
        ctx!.stroke();
      }
      for (let y = 0; y < h; y += spacing) {
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(w, y);
        ctx!.stroke();
      }
      points.forEach((p) => {
        const dx = mouseX - p.ox,
          dy = mouseY - p.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 160);
        p.x = p.ox - dx * influence * 0.12;
        p.y = p.oy - dy * influence * 0.12;
        const r = 1.4 + influence * 2.4;
        ctx!.beginPath();
        ctx!.fillStyle =
          influence > 0.05
            ? `rgba(255,74,28,${0.3 + influence * 0.7})`
            : "rgba(255,255,255,0.18)";
        ctx!.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx!.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      heroEl.removeEventListener("mousemove", onMove);
      heroEl.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div id="hero-bg" ref={wrapRef}>
      <canvas ref={canvasRef} />
    </div>
  );
}
