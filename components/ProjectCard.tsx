import Image from "next/image";
import { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="proj group" data-cursor="View">
      <span className="proj-idx">{project.idx}</span>

      <div className="proj-main">
        <span className="proj-tag">{project.tag}</span>

        <h3>{project.title}</h3>

        <p className="proj-desc">{project.desc}</p>

        <div className="proj-meta">
          {project.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>

      <div className="proj-side">
        <div
          className="proj-visual relative overflow-hidden"
          data-tag={project.visualTag}
        >
          {/* Existing background */}
          <div className="grid-pattern" />

          {/* Existing glow */}
          <div className="glow" />

          {/* Project preview */}
          <div
            className="
              absolute
              left-[7%]
              right-[7%]
              top-[8%]
              bottom-[12%]
              z-10
              border
              border-white/15
              bg-[#0a0a0a]
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:left-[4%]
              group-hover:right-[4%]
              group-hover:top-[5%]
              group-hover:bottom-[9%]
            "
          >
            {/* Preview header */}
            <div
              className="
                absolute
                left-0
                right-0
                top-0
                z-30
                flex
                h-8
                items-center
                justify-between
                border-b
                border-white/10
                bg-black/80
                px-3
              "
            >
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/50">
                Preview / {project.idx}
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-orange-500/80">
                Live
              </span>
            </div>

            {/* IMPORTANT: relative parent for Image fill */}
            <div className="relative h-full w-full overflow-hidden pt-8">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                priority={project.idx === "01"}
                sizes="(max-width: 768px) 90vw, 45vw"
                className="
                  z-10
                  object-cover
                  brightness-[0.65]
                  saturate-[0.7]
                  opacity-90
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-[1.04]
                  group-hover:brightness-[0.9]
                  group-hover:saturate-100
                  group-hover:opacity-100
                "
              />

              {/* Subtle dark overlay */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-black/10 transition-opacity duration-700 group-hover:bg-black/0" />
            </div>

            {/* Corner markers */}
            <span className="absolute left-[-1px] top-[-1px] z-40 h-3 w-3 border-l border-t border-orange-500" />
            <span className="absolute right-[-1px] top-[-1px] z-40 h-3 w-3 border-r border-t border-orange-500" />
            <span className="absolute bottom-[-1px] left-[-1px] z-40 h-3 w-3 border-b border-l border-orange-500" />
            <span className="absolute bottom-[-1px] right-[-1px] z-40 h-3 w-3 border-b border-r border-orange-500" />
          </div>

          {/* Project number */}
          <span
            className="
              absolute
              right-[7%]
              top-[5%]
              z-20
              font-mono
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/20
              transition-all
              duration-500
              group-hover:text-orange-500/60
            "
          >
            0{project.idx}
          </span>
        </div>

        <div className="proj-result">
          Result — <b>{project.result}</b>
        </div>
      </div>
    </article>
  );
}