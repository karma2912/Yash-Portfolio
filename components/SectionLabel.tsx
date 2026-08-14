// components/SectionLabel.tsx
"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  number: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionLabel({ number, title, subtitle, light }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center mb-16"
    >
      <span className={`font-mono text-xs tracking-widest ${light ? "text-[#0a0a0a]/50" : "text-[#e8e6e3]/50"}`}>
        {number} — {title}
      </span>
      {subtitle && (
        <span className={`font-mono text-xs tracking-widest ${light ? "text-[#0a0a0a]/30" : "text-[#e8e6e3]/30"}`}>
          {subtitle}
        </span>
      )}
    </motion.div>
  );
}