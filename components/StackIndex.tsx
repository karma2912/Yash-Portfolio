"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { stack } from "@/lib/data";

export default function StackIndex() {
  const [active, setActive] = useState(stack[0]);

  return (
    <section id="system-stack">
      <div className="wrap">
        <span className="eyebrow reveal in" style={{ marginBottom: 40 }}>
          06 / System Stack
        </span>
        <div className="stack-wrap">
          <Reveal className="stack-list">
            {stack.map((item) => (
              <button
                key={item.name}
                className="stack-item"
                onMouseEnter={() => setActive(item)}
                onFocus={() => setActive(item)}
              >
                {item.name}
              </button>
            ))}
          </Reveal>
          <aside className="stack-panel">
            <div className="k">Category</div>
            <div className="v">{active.cat}</div>
            <div className="k">Used For</div>
            <div className="v">{active.use}</div>
          </aside>
        </div>
      </div>
    </section>
  );
}
