// components/sections/BuiltUnderPressure.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const process = [
  { step: '01', label: 'PROBLEM', description: 'Complex challenge identified' },
  { step: '02', label: 'IDEA', description: 'Solution architecture designed' },
  { step: '03', label: 'IMPLEMENTATION', description: 'Rapid development execution' },
  { step: '04', label: 'DEPLOY', description: 'Production-ready delivery' },
  { step: '05', label: 'WIN', description: 'Competitive excellence achieved' }
]

export default function BuiltUnderPressure() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-mono text-[#FF4D00]">04 / CAPABILITY</span>
            <div className="flex-1 h-px bg-[#2A2A2A]" />
          </div>
          <h2 className="text-section">BUILT UNDER</h2>
          <h2 className="text-section text-[#FF4D00]">PRESSURE.</h2>
        </motion.div>
        
        {/* Process timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="absolute top-8 left-0 right-0 h-px bg-[#2A2A2A] origin-left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute top-8 left-0 w-3 h-3 -translate-y-1/2 bg-[#FF4D00] rounded-full" />
                
                <div className="pt-16">
                  <div className="text-sm font-mono text-[#FF4D00] mb-2">{item.step}</div>
                  <div className="text-lg font-bold mb-2">{item.label}</div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl lg:text-4xl font-bold leading-tight max-w-4xl mx-auto">
            Speed. Logic. Decision-making. 
            <span className="text-[#FF4D00]"> Execution under constraints.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}