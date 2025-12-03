"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Zap, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import TechMarquee from "@/components/TechMarquee";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SimpleProjectCard = ({
  title,
  category,
  link,
  logo,
  accentColor = "bg-neutral-50",
}: {
  title: string;
  category: string;
  link: string;
  logo: string;
  accentColor?: string;
}) => (
  <div
    className={`group relative w-full h-[400px] rounded-2xl overflow-hidden border border-neutral-200 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/5 ${accentColor}`}
  >
    <Link href={link} target="_blank" className="absolute inset-0 z-30" />

    <div className="absolute inset-0 flex items-center justify-center z-0">
      <div className="relative w-3/5 h-3/5 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out">
        <Image
          src={logo}
          alt={`${title} Logo`}
          fill
          className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
        />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 p-8 w-full z-20 bg-linear-to-t from-white via-white/60 to-transparent pointer-events-none">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-neutral-500 text-sm font-medium mb-2 uppercase tracking-wider relative z-10">
            {category}
          </p>
          <h3 className="text-3xl font-bold text-neutral-900 relative z-10 drop-shadow-sm">
            {title}
          </h3>
        </div>

        <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
          <ArrowUpRight className="w-5 h-5 text-neutral-900" />
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const router = useRouter();
  return (
    <main className="relative bg-white min-h-screen text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <Navbar />

      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4">
        <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-neutral-600 tracking-wide uppercase">
              Available for work
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-neutral-950 mb-6">
            Building digital <br />
            <span className="text-neutral-400">products & brands.</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 max-w-xl mx-auto mb-10 leading-relaxed">
            I am a full-stack developer based in India, focusing on building
            clean, accessible, and performant web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="px-8 py-3 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-neutral-900/20"
              onClick={() => router.push("/work")}
            >
              View Projects
            </button>
            <button className="px-8 py-3 rounded-full bg-white text-neutral-900 border border-neutral-200 font-medium hover:bg-neutral-50 transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      <TechMarquee />

      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Featured Work
          </h2>
          <div className="h-px bg-neutral-200 flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-[300px_300px] gap-4">
          <Link
            href="https://anya-meds.netlify.app/"
            target="_blank"
            className="md:col-span-2 md:row-span-2 h-[400px] md:h-auto rounded-2xl bg-neutral-50 border border-neutral-200 overflow-hidden relative group transition-all hover:border-neutral-300"
          >
            <div className="absolute inset-x-8 top-16 bottom-0 bg-white rounded-t-xl shadow-2xl shadow-neutral-900/10 border border-neutral-200 overflow-hidden transition-transform duration-500 group-hover:-translate-y-4">
              <div className="relative w-full h-full bg-neutral-100">
                <Image
                  src="/anyamedslogo2.jpg"
                  alt="Anya Meds Screenshot"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="absolute top-6 left-6 z-20">
              <h3 className="text-xl font-bold text-neutral-900">Anya Meds</h3>
              <p className="text-sm text-neutral-500">Healthcare Platform</p>
            </div>
          </Link>

          <div className="md:col-span-1 md:row-span-1 rounded-2xl bg-neutral-900 text-white p-6 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl transform translate-x-10 -translate-y-10" />
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm">
              <Zap className="text-white" size={20} />
            </div>
            <div>
              <span className="text-4xl font-bold block mb-1">98/100</span>
              <span className="text-sm text-neutral-400">
                Performance Score
              </span>
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-1 rounded-2xl bg-white border border-neutral-200 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
              <Layers className="text-neutral-900" size={20} />
            </div>
            <div>
              <h4 className="text-neutral-900 text-sm font-semibold mb-3">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Supabase", "Tailwind"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded bg-neutral-100 text-neutral-600 border border-neutral-200 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/work/ecommerce"
            className="md:col-span-2 md:row-span-1 rounded-2xl bg-neutral-50 border border-neutral-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-neutral-300 transition-all"
          >
            <div className="max-w-sm">
              <h4 className="text-xl font-bold text-neutral-900 mb-2">
                E-Commerce Dashboard
              </h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Admin dashboard with real-time analytics, inventory management,
                and Stripe integration.
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </section>

      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl font-bold text-neutral-900">
            Selected Works
          </h2>
          <span className="text-neutral-400 text-sm font-mono">
            (2024 - 2025)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SimpleProjectCard
            title="SaaS"
            category="Website"
            link="https://khancrane.netlify.app/"
            logo="/image.png"
            accentColor="bg-grey-50"
          />
          <SimpleProjectCard
            title="Lifestyle Brand"
            category="Web Design"
            link="https://fabricbymeter.netlify.app/"
            logo="/image2.png"
            accentColor="bg-white"
          />
        </div>
      </section>

      <footer className="bg-neutral-50 border-t border-neutral-200 py-12 text-center">
        <p className="text-neutral-500 text-sm">
          © 2025 Built with Next.js & Tailwind
        </p>
      </footer>
    </main>
  );
}
