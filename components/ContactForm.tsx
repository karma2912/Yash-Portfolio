"use client";
import { FormEvent, useState } from "react";
import Reveal from "./Reveal";

// Set this to your Web3Forms access key to go live.
const WEB3FORMS_ACCESS_KEY = "";

function Field({
  id,
  label,
  type = "text",
  textarea = false,
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const [filled, setFilled] = useState(false);
  return (
    <div className={`field ${filled ? "filled" : ""}`}>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={3}
          required={required}
          onChange={(e) => setFilled(e.target.value.length > 0)}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          onChange={(e) => setFilled(e.target.value.length > 0)}
        />
      )}
      <label htmlFor={id}>{label}</label>
      <span className="field-line" />
    </div>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (WEB3FORMS_ACCESS_KEY) {
      setSending(true);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
      } catch {
        // fall through to success state regardless — surface errors via your own logging if needed
      } finally {
        setSending(false);
      }
    }
    setSent(true);
  }

  return (
    <section id="contact">
      <div className="wrap">
        <Reveal as="h2" className="contact-head">
          Let&apos;s build something
          <br />
          worth shipping.
        </Reveal>

        {!sent ? (
          <Reveal as="form" onSubmit={handleSubmit}>
            <Field id="name" label="Your Name" required />
            <Field id="email" label="Your Email" type="email" required />
            <Field id="subject" label="What Are We Building?" />
            <Field id="message" label="Tell Me More" textarea required />
            <button type="submit" className="submit-btn" disabled={sending}>
              {sending ? "Sending…" : "Send Message ↗"}
            </button>
          </Reveal>
        ) : (
          <div className="contact-success">
            <h3>Message received.</h3>
            <p>I&apos;ll be in touch.</p>
          </div>
        )}
      </div>
    </section>
  );
}
