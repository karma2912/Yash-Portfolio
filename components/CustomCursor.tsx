// components/CustomCursor.tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    if (window.innerWidth < 768) return
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const dataCursor = target.getAttribute('data-cursor')
      
      if (dataCursor) {
        setCursorText(dataCursor)
        setIsHovering(true)
      } else if (target.closest('[data-cursor]')) {
        const parent = target.closest('[data-cursor]') as HTMLElement
        setCursorText(parent.getAttribute('data-cursor') || '')
        setIsHovering(true)
      } else {
        setCursorText('')
        setIsHovering(false)
      }
    }
    
    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 3 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className={`relative flex items-center justify-center ${
            isHovering ? 'w-16 h-16 -ml-8 -mt-8' : 'w-4 h-4 -ml-2 -mt-2'
          }`}
        >
          <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${
            isHovering ? 'bg-[#FF4D00]' : 'bg-white'
          }`} />
          {isHovering && cursorText && (
            <span className="relative text-[10px] font-mono text-white font-semibold tracking-wider">
              {cursorText}
            </span>
          )}
        </motion.div>
      </motion.div>
      
      {/* Trail dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block w-1.5 h-1.5 rounded-full bg-[#FF4D00]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />
    </>
  )
}