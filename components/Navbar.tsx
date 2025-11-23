"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Mail } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Work", path: "/work", icon: Briefcase },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="fixed top-6 inset-x-0 max-w-fit mx-auto z-50 px-4">
      <nav className="relative flex items-center gap-2 px-2 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-neutral-200 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] ring-1 ring-white/50">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.path}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
              className={`relative px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 ease-out ${
                isActive ? "text-white" : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <AnimatePresence>
                {hovered === item.name && !isActive && (
                  <motion.div
                    layoutId="hover-pill"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-neutral-100 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-neutral-900 rounded-full shadow-lg shadow-neutral-900/20 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <span className="relative z-20 flex items-center gap-2.5">
                <Icon size={18} strokeWidth={2} className={isActive ? "text-white" : "text-neutral-500 group-hover:text-neutral-900"} />
                <span className="text-sm font-medium tracking-wide hidden sm:block">
                  {item.name}
                </span>
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}