'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup'; // Assuming you install react-countup

const stats = [
  { value: 1000, suffix: '+', label: 'Active Users Supported' },
  { value: 3, suffix: '', label: 'Official Copyrights' },
  { value: 4, suffix: '+', label: '1st Place Hackathon Wins' },
  { value: 9.18, suffix: '', label: 'Academic CGPA', decimals: 2 },
];

export default function Proof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 border-b border-border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-col border-t border-border pt-6"
          >
            <div className="text-6xl md:text-7xl font-bold tracking-tighter mb-2">
              {isInView ? (
                <CountUp end={stat.value} decimals={stat.decimals || 0} duration={2.5} />
              ) : "0"}
              <span className="text-accent">{stat.suffix}</span>
            </div>
            <p className="font-mono text-xs text-muted uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}