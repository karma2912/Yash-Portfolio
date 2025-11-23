"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, Database, Globe, Layout, Cpu, Smartphone, Cloud, Terminal 
} from "lucide-react";

const techStack = [
  { name: "Next.js", icon: Globe },
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Terminal },
  { name: "Tailwind", icon: Layout },
  { name: "Node.js", icon: Cpu },
  { name: "Supabase", icon: Database },
  { name: "Prisma", icon: Database },
  { name: "Framer Motion", icon: Smartphone },
];

export default function TechMarquee() {
  return (
    <section className="py-20 overflow-hidden relative bg-white border-y border-neutral-100">
      {/* Fade gradients - White for light theme */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-white to-transparent pointer-events-none" />

      <div className="flex group">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex shrink-0 gap-16 px-8"
          >
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
              >
                <tech.icon className="w-6 h-6 text-neutral-800" />
                <span className="text-xl font-semibold text-neutral-800 tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}