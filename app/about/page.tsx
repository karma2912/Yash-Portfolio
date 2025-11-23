"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Trophy, Code2, Cpu, ArrowUpRight, Eye, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="relative bg-white min-h-screen text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <Navbar />

      <div className="fixed inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size:[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <section className="pt-40 pb-16 px-4 md:px-12 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 mb-8">
            <span className="text-xl">👋</span>
            <span className="text-sm font-semibold text-neutral-600">Hello, I'm a Developer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-900 mb-6">
            A final year BSc IT student with a passion for <span className="text-neutral-400">building logic.</span>
          </h1>
          
          <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto">
            I specialize in the MERN stack and clean UI/UX. I don't just write code; I bridge the gap between complex backend logic and smooth user experiences.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">My Journey</h2>
            <div className="h-px bg-neutral-200 flex-1" />
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative border-l border-neutral-200 ml-3 md:ml-6 space-y-12"
        >
          <motion.div variants={fadeInUp} className="relative pl-8 md:pl-12">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-900 ring-4 ring-white" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-neutral-900">Freelance Full Stack Developer</h3>
              <span className="text-sm font-mono text-neutral-500">2024 - Present</span>
            </div>
            <p className="text-neutral-600 mb-4 max-w-2xl">
              Delivered tailored web solutions for diverse clients, managing the full lifecycle from design to deployment.
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 md:p-6 grid gap-4">
               <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg border border-neutral-200"><Briefcase size={16} /></div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Matrimonial Web Application</h4>
                    <p className="text-sm text-neutral-500">Built a secure matchmaking platform with user profiles, real-time chat, and privacy controls.</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg border border-neutral-200"><Briefcase size={16} /></div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Fabric E-Commerce Store</h4>
                    <p className="text-sm text-neutral-500">Developed a custom storefront for a textile client, featuring inventory management and payment gateway integration.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative pl-8 md:pl-12">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-400 ring-4 ring-white" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-neutral-900">Full Stack Developer Intern</h3>
              <span className="text-sm font-mono text-neutral-500">2024</span>
            </div>
            <p className="text-neutral-600 mb-4 max-w-2xl">
              Collaborated with a senior team to optimize backend APIs and refactor legacy React components, improving application load times by 20%.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative pl-8 md:pl-12">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-400 ring-4 ring-white" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-neutral-900">BSc IT (Final Year)</h3>
              <span className="text-sm font-mono text-neutral-500">2022 - 2025</span>
            </div>
            <p className="text-neutral-600 mb-4">
              Currently finishing my degree with a focus on Artificial Intelligence and Web Technologies.
            </p>
            
            <div className="relative overflow-hidden rounded-xl bg-neutral-900 text-white p-6 md:p-8">
               <div className="absolute top-0 right-0 p-24 bg-white/10 rounded-full blur-3xl -translate-y-10 translate-x-10" />
               <div className="relative z-10">
                 <div className="flex items-center gap-2 text-neutral-400 mb-2">
                    <Cpu size={16} />
                    <span className="text-xs font-mono uppercase tracking-wider">Final Year Project</span>
                 </div>
                 <h4 className="text-2xl font-bold mb-2">Medical AI Diagnostic Dashboard</h4>
                 <p className="text-neutral-300 text-sm mb-4 max-w-lg">
                   An advanced health dashboard capable of analyzing medical imagery. I implemented models to detect anomalies in chest X-rays, brain scans, and skin conditions, providing preliminary insights for medical professionals.
                 </p>
                 <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-white/10 border border-white/20">Python</span>
                    <span className="text-xs px-2 py-1 rounded bg-white/10 border border-white/20">TensorFlow</span>
                    <span className="text-xs px-2 py-1 rounded bg-white/10 border border-white/20">React</span>
                 </div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Honors & Hackathons</h2>
            <div className="h-px bg-neutral-200 flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative p-8 rounded-2xl bg-amber-50 border border-amber-100 overflow-hidden group hover:border-amber-200 transition-all"
           >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-amber-300/30" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-white text-amber-500 shadow-sm flex items-center justify-center mb-6">
                        <Trophy size={24} fill="currentColor" className="opacity-100" />
                    </div>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-amber-200 text-xs font-bold text-amber-800 hover:bg-white transition-colors"
                    >
                        <Eye size={14} /> View Certificate
                    </button>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-2">1st Place Winner</h3>
                <p className="font-medium text-amber-800 mb-1">Coding Competition @ Elphinstone College</p>
                <p className="text-sm text-amber-700/80 mt-4 leading-relaxed">
                  Competed against top students to solve complex algorithmic problems under time constraints. Demonstrated speed, logic, and efficient code optimization.
                </p>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="p-8 rounded-2xl bg-white border border-neutral-200 group hover:border-neutral-300 transition-all"
           >
              <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                  <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Hackathon Enthusiast</h3>
              <p className="font-medium text-neutral-500 mb-1">Active Participant</p>
              <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
                Regularly participate in 24-48 hour hackathons to push technical boundaries. I love the chaos of building MVP solutions overnight and collaborating with random teammates.
              </p>
           </motion.div>
        </div>
      </section>

      <section className="py-24 text-center">
         <p className="text-neutral-500 text-sm mb-4">Want to see the code behind these?</p>
         <a href="https://github.com" className="inline-flex items-center gap-2 text-neutral-900 font-bold border-b-2 border-neutral-900 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
             Check out my GitHub <ArrowUpRight size={16} />
         </a>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden p-2"
            >
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 z-10 p-2 bg-neutral-900 text-white rounded-full hover:scale-110 transition-transform"
                >
                    <X size={20} />
                </button>

                <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-neutral-100">
                    <Image 
                        src="/your-certificate-image.jpg" 
                        alt="Certificate of Achievement"
                        fill
                        className="object-contain" 
                    />
                </div>
                
                <div className="p-4 text-center">
                    <p className="text-sm font-medium text-neutral-500">Verified Certificate of Achievement</p>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

