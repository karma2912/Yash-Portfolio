// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A] py-3' 
          : 'py-5'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-sm font-bold tracking-tight">YASH RAJAK</span>
            <span className={`text-[10px] font-mono text-[#FF4D00] transition-opacity duration-300 ${
              scrolled ? 'opacity-100' : 'opacity-0'
            }`}>
              SOFTWARE ENGINEER
            </span>
          </Link>
          
          {/* Center Nav - Desktop */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono">
            <Link href="/work" className="text-[#8A8A8A] hover:text-white transition-colors duration-300">
              WORK
            </Link>
            <Link href="/about" className="text-[#8A8A8A] hover:text-white transition-colors duration-300">
              ABOUT
            </Link>
            <Link href="/lab" className="text-[#8A8A8A] hover:text-white transition-colors duration-300">
              LAB
            </Link>
          </div>
          
          {/* Right CTA */}
          <Link 
            href="/contact" 
            data-cursor="TALK"
            className="hidden md:flex items-center gap-2 text-xs font-mono text-[#F5F0E8] hover:text-[#FF4D00] transition-colors duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
            AVAILABLE FOR OPPORTUNITIES
            <span className="text-[#FF4D00]">↗</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-xs font-mono text-[#F5F0E8]">
            MENU
          </button>
        </div>
      </div>
    </motion.nav>
  )
}