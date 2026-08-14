// components/Intro.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="relative py-24 md:py-40 px-6 md:px-10 bg-[#e8e6e3] text-[#0a0a0a]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left column - metadata */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <span className="font-mono text-xs tracking-widest text-[#0a0a0a]/50">
                02 — WHO I AM
              </span>
              
              <div className="space-y-4 font-mono text-xs text-[#0a0a0a]/60">
                <div>
                  <p className="text-[#0a0a0a]/30 mb-1">LOCATION</p>
                  <p>INDIA / REMOTE</p>
                </div>
                <div>
                  <p className="text-[#0a0a0a]/30 mb-1">FOCUS</p>
                  <p>FULL-STACK DEVELOPMENT</p>
                </div>
                <div>
                  <p className="text-[#0a0a0a]/30 mb-1">STACK</p>
                  <p>NEXT.JS / REACT / NODE.JS</p>
                </div>
                <div>
                  <p className="text-[#0a0a0a]/30 mb-1">STATUS</p>
                  <p className="text-[#ff4d00]">AVAILABLE FOR PROJECTS</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - large text */}
          <div className="md:col-span-9">
            <motion.div
              style={{ y }}
              className="space-y-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight"
              >
                I build products where
                <br />
                <span className="text-[#ff4d00]">engineering</span> meets
                <br />
                <span className="font-light italic">experience.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-xl"
              >
                <p className="text-base md:text-lg text-[#0a0a0a]/70 leading-relaxed">
                  I'm a full-stack developer focused on building performant, accessible, 
                  and scalable web applications. I care deeply about how software feels — 
                  from the milliseconds of a loading state to the architecture that 
                  powers an entire platform.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}