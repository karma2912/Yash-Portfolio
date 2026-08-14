'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SelectedSystems() {
  return (
    <section className="py-32 border-t border-border">
      <div className="px-6 md:px-12 mb-24">
        <h2 className="font-mono text-accent text-sm tracking-widest uppercase">04 / Selected Systems</h2>
      </div>

      {/* Project 01: Pavitra Atut Rishta - Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-border group cursor-pointer">
        <div className="p-6 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border bg-background transition-colors group-hover:bg-zinc-900/30">
          <div>
            <p className="font-mono text-xs text-muted mb-6 uppercase">01 / Matrimonial SaaS</p>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">PAVITRA ATUT RISHTA</h3>
            <p className="text-muted leading-relaxed max-w-md">
              A highly scalable matchmaking platform handling 1,000+ active users. Built with secure JWT authentication and real-time Razorpay integrations.
            </p>
          </div>
          
          <div className="mt-16 flex flex-wrap gap-3">
            {['Next.js', 'MongoDB', 'JWT', 'Razorpay'].map((tech) => (
              <span key={tech} className="px-3 py-1 border border-border text-xs font-mono uppercase rounded-none">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Abstract/UI Image Container */}
        <div className="relative h-[50vh] md:h-auto overflow-hidden bg-zinc-900">
          <motion.div 
            className="absolute inset-0 w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
             {/* Replace with actual high-res project screenshot */}
            <div className="w-full h-full bg-[url('/path/to/image.jpg')] bg-cover bg-center opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
          </motion.div>
        </div>
      </div>

      {/* Project 02: Anya Meds - Medical AI Full Width Layout */}
      <div className="relative w-full border-b border-border py-32 px-6 md:px-12 group cursor-pointer overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="font-mono text-xs text-accent mb-6 uppercase tracking-widest">02 / AI Healthcare Platform</p>
          <h3 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">ANYA MEDS</h3>
          <p className="text-muted max-w-xl text-lg mb-12">
            Deep learning integration using DenseNet-121 & EfficientNet-B3. Achieving 98%+ diagnostic accuracy. Backed by 3 official copyrights and published research.
          </p>
          <div className="flex gap-4 font-mono text-xs text-muted">
            <span>CNN ARCHITECTURE</span>
            <span>//</span>
            <span>PYTHON API</span>
            <span>//</span>
            <span>NEXT.JS</span>
          </div>
        </div>
        
        {/* Medical Scanning Background Motif */}
        <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-700 flex items-center justify-center">
             <div className="w-full h-1 bg-accent/50 animate-pulse absolute top-1/2" />
             <div className="w-64 h-64 border border-accent/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}