"use client";
import { pipelineSteps } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function ResearchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pipelineSteps.forEach((_, i) => {
              setTimeout(() => setActiveCount((c) => Math.max(c, i + 1)), i * 180);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="lab">
      <div className="wrap research-grid">
        <div className="research-copy reveal in">
          <span className="eyebrow" style={{ marginBottom: 24 }}>
            07 / Research / AI
          </span>
          <h2>
            Where models meet
            <br />
            real systems.
          </h2>
          <p>
            Anya Meds applies CNN-based deep learning to medical imaging —
            moving from raw image input through feature extraction and
            prediction, into an interface a clinician can actually use.
          </p>
          <p>
            This work is backed by 3 official copyrights and a published
            research paper. Confidential research details aren&apos;t shared
            here, but the shape of the pipeline is.
          </p>
          <div className="research-tags">
            {["Deep Learning", "CNN", "Medical Imaging", "Python", "FastAPI", "LLM Integration"].map(
              (t) => (
                <span key={t}>{t}</span>
              )
            )}
          </div>
        </div>
        <div className="pipeline reveal in" ref={ref}>
          {pipelineSteps.map((step, i) => (
            <div className={`pipe-step ${i < activeCount ? "on" : ""}`} key={step}>
              <span className="pipe-dot" />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
