import { Project } from "@/lib/data";


export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="proj" data-cursor="View">
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
        <div className="proj-visual" data-tag={project.visualTag}>
          <div className="grid-pattern" />
          <div className="glow" />
        </div>
        <div className="proj-result">
          Result — <b>{project.result}</b>
        </div>
      </div>
    </article>
  );
}
