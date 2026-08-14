// components/Loader.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  setLoading: (value: boolean) => void;
}

export default function Loader({ setLoading }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const interval = 16;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.floor((currentStep / steps) * 100);
      
      if (newProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => setLoading(false), 400);
      } else {
        setProgress(newProgress);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col justify-between p-8 md:p-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-start"
        >
          <span className="font-mono text-xs tracking-widest text-[#e8e6e3]/60">
            AMAN.DEV
          </span>
          <span className="font-mono text-xs tracking-widest text-[#e8e6e3]/60">
            {String(progress).padStart(2, "0")}%
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex items-center justify-center"
        >
          <h1 className="font-mono text-4xl md:text-6xl tracking-tight">
            AMAN<span className="text-[#ff4d00]">.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-between items-end"
        >
          <span className="font-mono text-xs tracking-widest text-[#e8e6e3]/60">
            FULL-STACK DEVELOPER
          </span>
          <span className="font-mono text-xs tracking-widest text-[#e8e6e3]/60">
            2026
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}