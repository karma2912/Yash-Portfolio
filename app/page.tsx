"use client";
import { useState } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Footer from "@/components/Footer";
import Thesis from "@/components/Thesis";
import ProofStats from "@/components/ProofOfStats";
import AchievementArchive from "@/components/AchievementArchive";
import ProjectShowcase from "@/components/ProjectShowcase";
import StackIndex from "@/components/StackIndex";
import ResearchSection from "@/components/ResearchSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaderDone(true)} />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero ready={loaderDone} />
        <Thesis />
        <ProofStats />
        <AchievementArchive />
        <ProjectShowcase />
        <StackIndex />
        <ResearchSection />
        <ExperienceTimeline />
        <AboutSection />
        <ContactForm />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
