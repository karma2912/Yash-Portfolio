"use client";
import { useEffect, useRef } from "react";

/**
 * Desktop-only custom cursor. Any element in the tree can opt in to a label
 * by adding `data-cursor="LABEL"` and, optionally, `data-cursor-scale="34"`.
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const label = labelRef.current;
    if (!cursor || !label) return;

    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0;
    let raf: number;

    function onMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
      label!.style.left = mx + "px";
      label!.style.top = my + "px";

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "[data-cursor], a, button"
      ) as HTMLElement | null;

      if (interactive) {
        const text = interactive.getAttribute("data-cursor");
        const scale = interactive.getAttribute("data-cursor-scale") || (text ? "34" : "20");
        cursor!.style.width = scale + "px";
        cursor!.style.height = scale + "px";
        if (text) {
          label!.textContent = text;
          label!.style.opacity = "1";
        } else {
          label!.style.opacity = "0";
        }
      } else {
        cursor!.style.width = "10px";
        cursor!.style.height = "10px";
        label!.style.opacity = "0";
      }
    }

    function tick() {
      cx += (mx - cx) * 0.25;
      cy += (my - cy) * 0.25;
      cursor!.style.left = cx + "px";
      cursor!.style.top = cy + "px";
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-label" ref={labelRef} />
    </>
  );
}
