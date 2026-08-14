"use client";
import { useRef, useState } from "react";
import Reveal from "./Reveal";
import { faqs } from "@/lib/data";


export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section id="faq">
      <div className="wrap">
        <span className="eyebrow reveal in" style={{ marginBottom: 20 }}>
          10 / FAQ
        </span>
        <Reveal>
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div className={`faq-item ${open ? "open" : ""}`} key={f.q}>
                <button
                  className="faq-q"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="fq-num mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="fq-text">{f.q}</span>
                  <span className="fq-plus">+</span>
                </button>
                <div
                  className="faq-a"
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  style={{
                    maxHeight: open ? refs.current[i]?.scrollHeight ?? 200 : 0,
                  }}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
