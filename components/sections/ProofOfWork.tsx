// components/sections/ProofOfWork.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const metrics = [
  { number: 1000, suffix: '+', label: 'ACTIVE USERS', description: 'Real products in production' },
  { number: 3, suffix: '', label: 'OFFICIAL COPYRIGHTS', description: 'Intellectual property registered' },
  { number: 4, suffix: '+', label: '1ST PLACE FINISHES', description: 'Hackathon & algorithmic wins' },
  { number: 9.18, suffix: '', label: 'CGPA', description: 'Academic excellence' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!isInView) return
    
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [isInView, value])
  
  const formatted = value % 1 === 0 ? Math.round(count) : count.toFixed(2)
  
  return (
    <span ref={ref} className="tabular-nums">
      {formatted}{suffix}
    </span>
  )
}

export default function ProofOfWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-mono text-[#FF4D00]">02 / PROOF</span>
            <div className="flex-1 h-px bg-[#2A2A2A]" />
          </div>
          <h2 className="text-section">PROOF OF WORK.</h2>
        </motion.div>
        
        {/* Metrics */}
        <div className="space-y-0">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-[#2A2A2A] py-12 lg:py-16 hover:bg-[#111111] transition-colors duration-500 cursor-pointer"
              data-cursor="VIEW"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="text-[4rem] lg:text-[6rem] font-bold tracking-tighter leading-none mb-2 group-hover:text-[#FF4D00] transition-colors duration-500">
                    <Counter value={metric.number} suffix={metric.suffix} />
                  </div>
                </div>
                
                <div className="flex-1 max-w-md">
                  <div className="text-sm font-mono text-[#FF4D00] mb-2">{metric.label}</div>
                  <p className="text-sm text-[#8A8A8A]">{metric.description}</p>
                </div>
                
                <div className="hidden lg:block w-px h-24 bg-[#2A2A2A] group-hover:bg-[#FF4D00] transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}