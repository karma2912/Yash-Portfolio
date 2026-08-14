// components/Experiments.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiments = [
  {
    title: "AI CHAT INTERFACE",
    description: "Experimental conversational UI with natural language processing",
    tags: ["AI", "NEXT.JS", "UI/UX"],
    year: "2025"
  },
  {
    title: "REALTIME COLLABORATION",
    description: "Live document editing with WebSocket architecture",
    tags: ["WEBSOCKET", "REACT", "BACKEND"],
    year: "2025"
  },
  {
    title: "DATA VISUALIZATION",
    description: "Interactive charts and graphs for complex datasets",
    tags: ["D3.JS", "VISUALIZATION", "FRONTEND"],
    year: "2024"
  },
  {
    title: "PERFORMANCE MONITOR",
    description: "Real-time web performance analytics dashboard",
    tags: ["METRICS", "DASHBOARD", "OPTIMIZATION"],
    year: "2024"
  }
];

export default function Experiments() {
  return (
    <section
      id="experiments"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-16"
        >
          <span className="font-mono text-xs tracking-widest text-[#e8e6e3]/50">
            05 — EXPERIMENTS
          </span>
          <span className="font-mono text-xs tracking-widest text-[#e8e6e3]/30">
            LAB NOTES
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border border-white/10 p-8 md:p-10 hover:bg-white/5 transition-all duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs text-[#ff4d00]">
                  {experiment.year}
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#ff4d00] group-hover:rotate-45 transition-all" />
              </div>

              <h3 className="text-xl md:text-2xl font-medium mb-4 group-hover:text-[#ff4d00] transition-colors">
                {experiment.title}
              </h3>

              <p className="text-sm text-[#e8e6e3]/60 mb-6">
                {experiment.description}
              </p>

              <div className="flex gap-3 font-mono text-xs">
                {experiment.tags.map((tag) => (
                  <span key={tag} className="text-[#e8e6e3]/40">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}