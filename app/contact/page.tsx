"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Copy, Check, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative bg-white min-h-screen text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <Navbar />

      <div className="fixed inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size:[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <section className="pt-40 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 border border-green-200 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider">Open to Work</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 mb-6">
                 Let's start a <br /> project together.
               </h1>
               <p className="text-xl text-neutral-500 leading-relaxed max-w-md">
                 Interested in working together? Fill out the form or send me a direct email. I usually respond within 24 hours.
               </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-6">
               <div>
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 block">Contact Details</label>
                  <div className="flex items-center justify-between p-4 bg-white border border-neutral-200 rounded-xl group hover:border-neutral-400 transition-colors">
                     <div className="flex items-center gap-4">
                        <div className="p-2 bg-neutral-100 rounded-lg text-neutral-600">
                           <Mail size={20} />
                        </div>
                        <span className="font-medium text-neutral-900">hello@example.com</span>
                     </div>
                     <button 
                       onClick={handleCopyEmail}
                       className="p-2 hover:bg-neutral-100 rounded-lg text-neutral-400 hover:text-neutral-900 transition-all relative"
                       title="Copy Email"
                     >
                        <AnimatePresence mode="wait">
                          {copied ? (
                             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                               <Check size={18} className="text-green-500" />
                             </motion.div>
                          ) : (
                             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                               <Copy size={18} />
                             </motion.div>
                          )}
                        </AnimatePresence>
                     </button>
                  </div>
               </div>

               <div className="flex items-center gap-4 px-4">
                  <div className="p-2 bg-white border border-neutral-200 rounded-lg text-neutral-600 shadow-sm">
                     <MapPin size={20} />
                  </div>
                  <div>
                     <p className="font-bold text-neutral-900">Mumbai, India</p>
                     <p className="text-sm text-neutral-500">Available for Remote Work</p>
                  </div>
               </div>

               <div className="pt-6 border-t border-neutral-200 flex gap-4">
                  {[
                    { icon: Github, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Twitter, href: "#" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href}
                      className="p-3 bg-white border border-neutral-200 rounded-full text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
                    >
                       <social.icon size={20} />
                    </a>
                  ))}
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-xl shadow-neutral-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-900">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors placeholder:text-neutral-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-900">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors placeholder:text-neutral-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-900">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors text-neutral-600">
                   <option>General Inquiry</option>
                   <option>Freelance Project</option>
                   <option>Job Opportunity</option>
                   <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-900">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors placeholder:text-neutral-400 resize-none"
                />
              </div>

              <button className="w-full py-4 rounded-xl bg-neutral-900 text-white font-bold text-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group">
                 Send Message 
                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      <section className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-4">
           <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Frequently Asked Questions</h3>
           <div className="space-y-4">
              <DetailsItem 
                question="What is your typical hourly rate?" 
                answer="My rates vary depending on the project scope and complexity. However, I prefer fixed-price contracts for well-defined projects." 
              />
              <DetailsItem 
                question="Are you available for full-time roles?" 
                answer="Yes! I am currently a final year student and am actively looking for full-time opportunities starting mid-2025." 
              />
              <DetailsItem 
                question="Do you work with startups?" 
                answer="Absolutely. I love the fast-paced environment of startups and have worked with several in my freelance career." 
              />
           </div>
        </div>
      </section>
    </main>
  );
}

function DetailsItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-200 rounded-xl bg-white overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
      >
        <span className="font-semibold text-neutral-800">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
           +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-neutral-500 text-sm leading-relaxed border-t border-neutral-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}