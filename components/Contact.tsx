'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            READY TO<br/>BUILD?
          </h2>
          <p className="text-xl text-muted">Let's make something that works.</p>
          
          <div className="mt-24 space-y-4 font-mono text-sm">
            <p className="uppercase text-muted">Direct</p>
            <a href="mailto:your@email.com" className="block hover:text-accent transition-colors">hello@yashrajak.com</a>
            <a href="#" className="block hover:text-accent transition-colors">LinkedIn ↗</a>
            <a href="#" className="block hover:text-accent transition-colors">GitHub ↗</a>
          </div>
        </div>

        <form className="flex flex-col justify-center gap-12">
          {/* Custom Input */}
          <div className="relative group">
            <input 
              type="text" 
              required
              className="w-full bg-transparent border-b border-border py-4 text-xl md:text-2xl outline-none focus:border-transparent peer transition-colors"
              placeholder=" "
            />
            <label className="absolute left-0 top-4 text-muted font-mono text-sm uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs peer-valid:text-muted">
              Your Name
            </label>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 peer-focus:w-full" />
          </div>

          <div className="relative group">
            <input 
              type="email" 
              required
              className="w-full bg-transparent border-b border-border py-4 text-xl md:text-2xl outline-none focus:border-transparent peer transition-colors"
              placeholder=" "
            />
            <label className="absolute left-0 top-4 text-muted font-mono text-sm uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs peer-valid:text-muted">
              Your Email
            </label>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 peer-focus:w-full" />
          </div>

          <div className="relative group">
            <textarea 
              required
              rows={3}
              className="w-full bg-transparent border-b border-border py-4 text-xl md:text-2xl outline-none focus:border-transparent peer resize-none transition-colors"
              placeholder=" "
            />
            <label className="absolute left-0 top-4 text-muted font-mono text-sm uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs peer-valid:text-muted">
              What are we building?
            </label>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 peer-focus:w-full" />
          </div>

          <button className="group relative self-start mt-8 overflow-hidden">
            <span className="font-mono text-sm uppercase tracking-widest relative z-10 group-hover:text-background transition-colors duration-300">
              Start a Conversation ↗
            </span>
            <div className="absolute inset-0 bg-foreground scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-custom-ease" />
          </button>
        </form>
      </div>
    </section>
  );
}