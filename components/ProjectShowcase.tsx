"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { Category, projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function ProjectShowcase() {
  const [filter, setFilter] = useState<Category | "all">("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.cat === filter)),
    [filter]
  );

  return (
    <section id="work">
      <div className="wrap">
        <span className="eyebrow reveal in" style={{ marginBottom: 30 }}>
          05 / Selected Systems
        </span>
        <Reveal>
          <ProjectFilter active={filter} onChange={setFilter} />
        </Reveal>

        <motion.div layout className="proj-list">
          <AnimatePresence initial={false}>
            {visible.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.42, ease: [0.16, 0.84, 0.28, 1] }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
