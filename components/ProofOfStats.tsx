"use client";
import { proofStats } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

function Counter({
  count,
  suffix,
  decimal,
}: {
  count: number;
  suffix: string;
  decimal: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(decimal ? "0.00" : "0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dur = 1400;
            const start = performance.now();
            function tick(now: number) {
              const p = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              const val = count * eased;
              setDisplay((decimal ? val.toFixed(2) : Math.round(val)) + suffix);
              if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count, suffix, decimal]);

  return (
    <div className="proof-num" ref={ref}>
      {display}
    </div>
  );
}

export default function ProofStats() {
  return (
    <section id="proof">
      <div className="wrap">
        <span className="eyebrow" style={{ marginBottom: 40 }}>
          03 / Proof of Work
        </span>
        <div className="proof-list">
          {proofStats.map((s, i) => (
            <div className="proof-row" key={s.label}>
              <Counter count={s.count} suffix={s.suffix} decimal={s.decimal} />
              <div className="proof-label">{s.label}</div>
              <div className="proof-idx">{String(i + 1).padStart(2, "0")}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
