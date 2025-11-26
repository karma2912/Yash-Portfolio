"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "Anya Meds Platform",
    category: "College",
    description:
      "A comprehensive healthcare dashboard allowing doctors to manage patient records in real-time. Features compliant data storage and telemedicine integration.",
    stack: ["Next.js", "Supabase", "Stripe", "WebRTC"],
    year: "2025",
    link: "https://anya-meds.netlify.app/",
    github: "https://github.com/karma2912/anya-meds-front.git",
    color: "bg-blue-200",
    image:
      "/anyamedslogo2.jpg",
  },
  {
    id: 2,
    title: "YMetaverse",
    category: "Personal",
    description:
      "An immersive virtual environment dashboard for managing digital assets and user interactions within a custom-built metaverse ecosystem.",
    stack: ["Next.js", "Three.js", "Web3.js", "Solidity"],
    year: "2024",
    link: "#",
    github: "https://github.com/karma2912/YMetaVerse.git",
    color: "bg-violet-200",
    image:
      "/YMetaverse.png",
  },
  {
    id: 3,
    title: "Fabric By Meter",
    category: "Freelanced",
    description:
      "A niche e-commerce platform for textile wholesalers. Includes unit conversion tools, bulk pricing algorithms, and inventory tracking.",
    stack: ["React Native", "TypeScript", "Node.js"],
    year: "2025",
    link: "#",
    github: "https://fabricbymeter.netlify.app/",
    color: "bg-zinc-200",
    image:
      "/fabricbymeter.png",
  },
  {
    id: 4,
    title: "Pavitra Atut Rishta",
    category: "Freelanced",
    description:
      "A dedicated matrimonial service platform focusing on verified profiles and privacy-first matchmaking algorithms.",
    stack: ["Framer Motion", "Tailwind", "Next.js"],
    year: "2025",
    link: "#",
    github: "https://github.com/karma2912/matrimonialapp.git",
    color: "bg-rose-200",
    image:
      "/pavitraatutrishta.png",
  },
  {
    id: 5,
    title: "Phising Guardian",
    category: "Hackathon",
    description:
      "An AI-powered browser extension that detects and blocks malicious websites in real-time using machine learning models.",
    stack: ["Vue.js", "Python", "TensorFlow"],
    year: "2024",
    link: "#",
    github: "https://github.com/karma2912/FrontEnd_Hackathon.git",
    color: "bg-indigo-200",
    image:
      "/phishingguardian.png",
  },
  {
    id: 6,
    title: "Khan Cranes",
    category: "Freelanced",
    description:
      "Logistics and inventory management system for heavy machinery rentals, featuring automated scheduling and maintenance tracking.",
    stack: ["Python", "FastAPI", "PostgreSQL"],
    year: "2024",
    link: "#",
    github: "https://github.com/karma2912/khancrane.git",
    color: "bg-yellow-100",
    image:
      "/khanCraneLogo.webp",
  },
  {
    id: 7,
    title: "Quiz Quest",
    category: "College",
    description:
      "An interactive gamified learning platform allowing professors to create real-time quizzes with instant analytics and leaderboards.",
    stack: ["Next.js", "Firebase", "Redis"],
    year: "2023",
    link: "#",
    github: "https://github.com/karma2912/NewQuizQuest.git",
    color: "bg-red-200",
    image:
      "/quizquest2.png",
  },
  {
    id: 8,
    title: "YCall",
    category: "Personal",
    description:
      "A productivity tool that uses LLMs to automatically summarize calls, prioritize tasks, and categorize user notes based on urgency.",
    stack: ["Python", "OpenAI", "React"],
    year: "2023",
    link: "#",
    github: "https://github.com/karma2912/YCall-frontEnd.git",
    color: "bg-neutral-200",
    image:
      "/YCall.png",
  },
];

const categories = ["All", "Freelanced", "Hackathon", "Personal", "College"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const router = useRouter();
  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <main className="relative bg-white min-h-screen text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <Navbar />

      <div className="fixed inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <section className="pt-40 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 mb-6">
            Selected Work
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed">
            A curation of projects ranging from complex web applications to
            mobile experiences. I focus on solving real problems with clean code
            and intuitive design.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center gap-2 mt-12 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-12 pb-32 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group flex flex-col h-full bg-neutral-50 border border-neutral-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500"
              >
                <div className="h-64 w-full relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div
                    className={`absolute inset-0 ${project.color} opacity-60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0`}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-neutral-50 via-transparent to-transparent opacity-90" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <span className="bg-white/90 backdrop-blur-md text-neutral-900 px-6 py-3 rounded-full font-semibold shadow-lg text-sm border border-neutral-200">
                        View Case Study
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col relative">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                        {project.category} — {project.year}
                      </span>
                      <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-900 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.link}
                        className="p-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-900 hover:text-white transition-colors"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-neutral-600 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white border border-neutral-200 rounded-md text-xs font-medium text-neutral-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="py-24 border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
            Have a project in mind?
          </h2>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            I am currently open to new opportunities and freelance work. Let's
            discuss how we can build something great together.
          </p>
          <button className="px-8 py-4 rounded-full bg-neutral-900 text-white font-bold hover:bg-neutral-800 transition-all hover:scale-105" onClick={()=>router.push("/contact")}>
            Start a Conversation
          </button>
        </div>
      </section>
    </main>
  );
}
