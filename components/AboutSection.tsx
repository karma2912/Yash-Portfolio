import Reveal from "./Reveal";

const TRAITS = [
  ["Mindset", "Curious by default"],
  ["Nature", "Competitive"],
  ["Approach", "Product-minded"],
  ["Range", "Frontend / Backend"],
  ["Interest", "AI systems"],
  ["Under pressure", "Builds and ships"],
];

const CURRENTLY = [
  ["Building", "Client SaaS & ERP systems"],
  ["Learning", "Applied LLM integration"],
  ["Experimenting With", "Real-time & WebRTC systems"],
  ["Open To", "Full-time & freelance work"],
];

export default function AboutSection() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <Reveal>
          <span className="eyebrow" style={{ marginBottom: 24 }}>
            09 / Beyond the Code
          </span>
          <h2>The person behind the systems.</h2>
          <p>
            I&apos;m curious by default and competitive by nature — the same
            instinct that pushes me to win hackathons pushes me to ship
            products that actually hold up.
          </p>
          <p>
            I move comfortably across the stack, from database design to
            interface polish, and I&apos;m drawn to problems at the edge of
            web engineering and AI.
          </p>
        </Reveal>
        <Reveal className="trait-list">
          {TRAITS.map(([k, v]) => (
            <div className="trait" key={k}>
              {k} <b>{v}</b>
            </div>
          ))}
        </Reveal>
        <Reveal className="currently" style={{ gridColumn: "1 / -1" }}>
          {CURRENTLY.map(([k, v]) => (
            <div className="currently-cell" key={k}>
              <div className="k">{k}</div>
              <div className="v">{v}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
