"use client";
import { Achievement, achievements } from "@/lib/data";
import { useState } from "react";
import Reveal from "./Reveal";
import AchievementModal from "./AchievementModal";

export default function AchievementArchive() {
  const [dim, setDim] = useState(false);
  const [selected, setSelected] = useState<Achievement | null>(null);

  return (
    <section id="achievements">
      <div className="wrap">
        <span className="eyebrow reveal in" style={{ marginBottom: 40 }}>
          04 / Built Under Pressure
        </span>
        <Reveal
          className={`ach-wall ${dim ? "dim" : ""}`}
          onMouseOver={() => setDim(true)}
          onMouseLeave={() => setDim(false)}
        >
          {achievements.map((a) => (
            <button
              className="ach-row"
              key={a.id}
              data-cursor="Archive"
              onClick={() => setSelected(a)}
            >
              <span className="ach-rank">{String(a.id).padStart(2, "0")}</span>
              <span className="ach-title">{a.rank}</span>
              <span className="ach-event">{a.event}</span>
              <span className="ach-year">{a.year}</span>
            </button>
          ))}
        </Reveal>
        <div className="ach-note reveal in">
          <span>3 official copyrights</span>
          <span>1 published research paper</span>
        </div>
      </div>
      <AchievementModal achievement={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
