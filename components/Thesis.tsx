import Reveal from "./Reveal";

const ITEMS = [
  "Scalable Web Apps",
  "SaaS Architecture",
  "AI Systems",
  "E-Commerce",
  "Real-Time Apps",
  "Developer Tooling",
];

export default function Thesis() {
  return (
    <section id="thesis">
      <Reveal className="wrap thesis-grid">
        <span className="thesis-num mono">02 / Approach</span>
        <div className="thesis">
          <h2>
            I don&apos;t just write code. <em>I build systems that have to work.</em>
          </h2>
          <p className="thesis-body">
            My work spans scalable web applications, B2B SaaS platforms,
            AI-powered systems, real-time applications, and developer
            tooling — built to hold up under real users, not just demo well.
          </p>
          <div className="thesis-list">
            {ITEMS.map((item) => (
              <div className="thesis-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
