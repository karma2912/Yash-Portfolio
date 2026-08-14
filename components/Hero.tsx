'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12 border-b border-border">
      {/* Interactive Abstract Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,51,0,0.15), transparent 25%), linear-gradient(to right, #27272A 1px, transparent 1px), linear-gradient(to bottom, #27272A 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        <div className="md:col-span-8 flex flex-col">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-mono text-accent text-sm mb-8 tracking-widest uppercase"
          >
            01 / Software Engineer
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[12vw] md:text-[8rem] font-bold leading-[0.85] tracking-tighter"
          >
            YASH
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[12vw] md:text-[8rem] font-bold leading-[0.85] tracking-tighter text-muted"
          >
            BUILDS
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[12vw] md:text-[8rem] font-bold leading-[0.85] tracking-tighter"
          >
            SYSTEMS.
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
          className="md:col-span-4 flex flex-col gap-8 pb-4"
        >
          <div>
            <p className="font-mono text-xs text-muted mb-2 uppercase">Location</p>
            <p className="text-sm">Mumbai, India</p>
          </div>
          <div>
            <p className="font-mono text-xs text-muted mb-2 uppercase">Focus</p>
            <p className="text-sm">Scalable Web Apps / AI Systems / Real-time</p>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted max-w-[280px] leading-relaxed">
              I build scalable web products, intelligent systems, and interfaces that turn complex constraints into usable software.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}