// components/Footer.tsx
"use client";

import { Github, Linkedin, Mail, MapPin, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <div className="font-mono text-sm tracking-wider">
            AMAN<span className="text-[#ff4d00]">/</span>DEV
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <Link
              href="mailto:aman@example.com"
              className="text-[#e8e6e3]/60 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e8e6e3]/60 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e8e6e3]/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#e8e6e3]/40">
              <MapPin className="w-3 h-3" />
              INDIA / REMOTE
            </div>
            <span className="font-mono text-xs text-[#e8e6e3]/40">
              © 2026
            </span>
            <span className="font-mono text-xs text-[#e8e6e3]/40">
              BUILT WITH NEXT.JS
            </span>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}