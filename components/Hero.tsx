"use client";
import { useEffect, useState } from "react";
import TechnicalBackground from "./TechnicalBackground";

export default function Hero({ ready }: { ready: boolean }) {
  const [inState, setInState] = useState(false);

  useEffect(() => {
    if (ready) {
      const t = setTimeout(() => setInState(true), 60);
      return () => clearTimeout(t);
    }
  }, [ready]);

  return (
    <section id="hero">
      <TechnicalBackground />
      <div className="wrap hero-inner">
        <div className="hero-top">
          <span className="eyebrow">01 / Full-Stack Software Engineer</span>
          <span className="hero-loc mono">
            Mumbai
            <br />
            India
          </span>
        </div>
        <h1 className={`hero-headline ${inState ? "in" : ""}`}>
          <span className="row">
            <span>YASH</span>
          </span>
          <span className="row">
            <span>BUILDS</span>
          </span>
          <span className="row">
            <span>SYSTEMS.</span>
          </span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">
            I build scalable web products, intelligent systems, and
            interfaces that turn complex problems into usable software —
            across the frontend, the backend, and the infrastructure between
            them.
          </p>
          <div className="hero-facts">
            <div>
              <b>Full-Stack Engineer</b>Products / Systems / AI
            </div>
            <div>
              <b>1,000+ users</b>In production
            </div>
            <div>
              <b>4+ wins</b>Hackathons
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span className="line" />
        SCROLL
      </div>
    </section>
  );
}
