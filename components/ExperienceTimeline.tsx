import { experience } from "@/lib/data";
import Reveal from "./Reveal";


export default function ExperienceTimeline() {
  return (
    <section id="experience">
      <div className="wrap">
        <span className="eyebrow reveal in" style={{ marginBottom: 10 }}>
          08 / Where I Built
        </span>
        {experience.map((e) => (
          <Reveal className="exp-item" key={e.role}>
            <span className="exp-year mono">{e.year}</span>
            <div>
              <h3 className="exp-role">{e.role}</h3>
              <span className="exp-org">{e.org}</span>
              <p className="exp-desc">{e.desc}</p>
              <div className="exp-meta">
                {e.meta.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
