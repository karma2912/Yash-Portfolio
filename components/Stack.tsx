// components/Stack.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const technologies = [
  { name: "NEXT.JS", category: "FRAMEWORK", level: "ADVANCED" },
  { name: "REACT", category: "LIBRARY", level: "ADVANCED" },
  { name: "TYPESCRIPT", category: "LANGUAGE", level: "ADVANCED" },
  { name: "NODE.JS", category: "RUNTIME", level: "ADVANCED" },
  { name: "EXPRESS", category: "FRAMEWORK", level: "ADVANCED" },
  { name: "MONGODB", category: "DATABASE", level: "INTERMEDIATE" },
  { name: "POSTGRESQL", category: "DATABASE", level: "INTERMEDIATE" },
  { name: "TAILWIND", category: "STYLING", level: "ADVANCED" },
  { name: "FRAMER MOTION", category: "ANIMATION", level: "INTERMEDIATE" },
  { name: "REST APIS", category: "ARCHITECTURE", level: "ADVANCED" },
];

export default function Stack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a]">
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
            03 — THE STACK
          </span>
          <span className="font-mono text-xs tracking-widest text-[#e8e6e3]/30 hidden md:block">
            TOOLS I THINK WITH
          </span>
        </motion.div>

        {/* Technologies list */}
        <div className="space-y-2">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="flex items-center gap-6 py-6 border-b border-white/10 transition-all duration-500 cursor-pointer">
                <span className="font-mono text-xs text-white/30 w-10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                
                <h3 
                  className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-500 ${
                    hoveredIndex === index 
                      ? "text-[#ff4d00] translate-x-4" 
                      : "text-white/80"
                  }`}
                >
                  {tech.name}
                </h3>
                
                <div className="ml-auto flex items-center gap-6">
                  <span className="font-mono text-xs text-white/40 hidden md:block">
                    {tech.category}
                  </span>
                  <span 
                    className={`font-mono text-xs transition-all duration-500 ${
                      hoveredIndex === index ? "text-[#ff4d00]" : "text-white/30"
                    }`}
                  >
                    {tech.level}
                  </span>
                </div>
              </div>

              {/* Background highlight */}
              <div 
                className={`absolute inset-0 bg-white/5 transition-all duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}