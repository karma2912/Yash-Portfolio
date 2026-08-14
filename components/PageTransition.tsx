// components/PageTransition.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition() {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const pageNames: Record<string, string> = {
      '/': 'HOME / 01',
      '/work': 'WORK / 02',
      '/about': 'ABOUT / 03',
      '/contact': 'CONTACT / 04',
      '/lab': 'LAB / 05'
    }
    
    setDisplayText(pageNames[pathname] || '')
    setIsTransitioning(true)
    
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-[999] bg-[#0A0A0A] flex items-center justify-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-sm font-mono text-[#FF4D00]"
          >
            {displayText}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}