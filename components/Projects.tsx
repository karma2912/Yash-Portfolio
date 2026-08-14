// components/Projects.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "ANYA MEDS",
    category: "HEALTHCARE PLATFORM",
    description: "Full-stack healthcare platform with AI-powered features",
    stack: ["NEXT.JS", "AI", "FULL-STACK"],
    url: "https://anya-meds.netlify.app/",
    image: "/projects/anya-meds.jpg",
    layout: "full"
  },
  {
    id: "02",
    title: "KHAN CRANE",
    category: "SAAS PLATFORM",
    description: "Enterprise SaaS solution for construction management",
    stack: ["REACT", "NODE.JS", "MONGODB"],
    url: "https://khancrane.netlify.app/",
    image: "/projects/khan-crane.jpg",
    layout: "split"
  },
  {
    id: "03",
    title: "FABRIC BY METER",
    category: "LIFESTYLE BRAND",
    description: "E-commerce experience for premium lifestyle brand",
    stack: ["NEXT.JS", "STRIPE", "HEADLESS CMS"],
    url: "https://fabricbymeter.netlify.app/",
    image: "/projects/fabric-by-meter.jpg",
    layout: "alternate"
  },
  {
    id: "04",
    title: "E-COMMERCE DASHBOARD",
    category: "ADMIN PLATFORM",
    description: "Real-time analytics and inventory management system",
    stack: ["REACT", "EXPRESS", "POSTGRESQL"],
    url: "#",
    image: "/projects/dashboard.jpg",
    layout: "vertical"
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-[#e8e6e3] text-[#0a0a0a]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-20"
        >
          <span className="font-mono text-xs tracking-widest text-[#0a0a0a]/50">
            04 — SELECTED WORK
          </span>
          <span className="font-mono text-xs tracking-widest text-[#0a0a0a]/30">
            {projects.length} PROJECTS
          </span>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative ${
                project.layout === "split" 
                  ? "md:grid md:grid-cols-2 md:gap-12 md:items-center"
                  : project.layout === "alternate"
                  ? "md:grid md:grid-cols-12 md:gap-8"
                  : project.layout === "vertical"
                  ? "md:grid md:grid-cols-3 md:gap-8"
                  : ""
              }`}
            >
              {/* Project number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-[#ff4d00]">
                  {project.id}
                </span>
                <span className="font-mono text-xs text-[#0a0a0a]/40">
                  {project.category}
                </span>
              </div>

              {/* Project title */}
              <div className={project.layout === "split" ? "md:order-2" : ""}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 
                    className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-500 ${
                      hoveredProject === project.id
                        ? "text-[#ff4d00] translate-x-2"
                        : ""
                    }`}
                  >
                    {project.title}
                  </h3>
                </a>

                <p className="text-sm md:text-base text-[#0a0a0a]/60 mb-6 max-w-md">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 font-mono text-xs">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[#0a0a0a]/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project visual */}
              <div 
                className={`relative mt-8 ${
                  project.layout === "full" 
                    ? "w-full"
                    : project.layout === "split"
                    ? "md:order-1"
                    : project.layout === "alternate"
                    ? "md:col-span-7"
                    : "md:col-span-2"
                }`}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden bg-[#d0ceca] aspect-video"
                >
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Placeholder for project image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-mono text-xs text-white/30">
                        PROJECT VISUAL
                      </span>
                    </div>
                  </motion.div>
                </a>

                {/* View project arrow */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute -bottom-4 -right-4 w-12 h-12 bg-[#0a0a0a] text-white flex items-center justify-center transition-all duration-500 ${
                    hoveredProject === project.id
                      ? "bg-[#ff4d00] rotate-45"
                      : "rotate-0"
                  }`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}