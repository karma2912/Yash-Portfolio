// components/About.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-40 px-6 md:px-10 bg-[#e8e6e3] text-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left side - large statement */}
          <div className="md:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-widest text-[#0a0a0a]/50 block mb-8"
            >
              06 — A LITTLE ABOUT ME
            </motion.span>

            <motion.h2
              style={{ rotate }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight"
            >
              I like turning
              <br />
              <span className="text-[#ff4d00]">complex systems</span>
              <br />
              into <span className="font-light italic">simple experiences.</span>
            </motion.h2>
          </div>

          {/* Right side - description */}
          <div className="md:col-span-5 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-[#0a0a0a]/70 leading-relaxed"
            >
              My approach combines solid engineering principles with an obsession 
              for detail. I believe great software should be invisible — it just works, 
              feels natural, and scales effortlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 font-mono text-xs"
            >
              <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-3">
                <span className="text-[#0a0a0a]/50">DEVELOPMENT</span>
                <span>FULL-STACK</span>
              </div>
              <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-3">
                <span className="text-[#0a0a0a]/50">FRAMEWORK</span>
                <span>NEXT.JS / REACT</span>
              </div>
              <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-3">
                <span className="text-[#0a0a0a]/50">BACKEND</span>
                <span>NODE.JS / EXPRESS</span>
              </div>
              <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-3">
                <span className="text-[#0a0a0a]/50">DATABASE</span>
                <span>MONGODB / POSTGRESQL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0a0a0a]/50">FOCUS</span>
                <span>UI ENGINEERING</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}