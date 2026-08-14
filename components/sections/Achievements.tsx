'use client';
import { motion } from 'framer-motion';

const achievements = [
  { year: '2025', rank: '1ST PLACE', event: "CyberStrike '25", project: 'AetherScan' },
  { year: '2026', rank: '1ST PLACE', event: "Horizon '26", project: 'The Medium' },
  { year: '2025', rank: '1ST PLACE', event: "Techtsar '25", project: 'Algorithmic Problem Solving' },
  { year: '2026', rank: '1ST PLACE', event: "Echelon '26", project: 'Task on Circle' },
  { year: '25-26', rank: '2ND PLACE', event: "Fiestron '25–26", project: 'NephroCare' },
];

export default function Achievements() {
  return (
    <section className="py-32 px-6 md:px-12">
      <h2 className="font-mono text-accent text-sm tracking-widest uppercase mb-16">03 / Built Under Pressure</h2>
      
      <div className="flex flex-col w-full group">
        {achievements.map((item, i) => (
          <div 
            key={i} 
            className="group/item flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-border cursor-pointer transition-colors hover:bg-zinc-900/50"
          >
            <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
              <span className="font-mono text-sm text-muted group-hover/item:text-foreground transition-colors">{item.year}</span>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover/item:text-accent transition-colors duration-300">
                {item.rank}
              </h3>
            </div>
            <div className="flex flex-col md:items-end mt-4 md:mt-0 w-full md:w-auto">
              <p className="text-lg font-medium">{item.event}</p>
              <p className="font-mono text-xs text-muted mt-1 uppercase">{item.project}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}