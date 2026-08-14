"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#lab", label: "Lab" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = ["work", "about", "lab"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <header id="nav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-id">
        <b>YASH RAJAK</b>
        <span>Software Engineer</span>
      </div>
      <nav className="nav-center">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={active === l.href.slice(1) ? "active" : ""}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="nav-cta" data-cursor="TALK">
        <span className="long">Available for opportunities</span>
        <span>↗</span>
      </a>
    </header>
  );
}
