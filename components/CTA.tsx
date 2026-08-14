import Reveal from "./Reveal";


export default function CTA() {
  return (
    <section id="cta">
      <div className="wrap">
        <Reveal as="h2" className="cta-head">
          Ready to
          <br />
          build?
        </Reveal>
        <Reveal as="p" className="cta-sub">
          Let&apos;s make something that works.
        </Reveal>
        <Reveal>
          <a href="#contact" className="cta-btn" data-cursor="TALK">
            Start a Conversation <span className="arrow">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
