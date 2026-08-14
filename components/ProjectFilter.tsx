import { Category } from "@/lib/data";


const FILTERS: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "client", label: "Client" },
  { key: "hackathon", label: "Hackathon" },
  { key: "personal", label: "Personal" },
  { key: "research", label: "Research" },
];

export default function ProjectFilter({
  active,
  onChange,
}: {
  active: Category | "all";
  onChange: (f: Category | "all") => void;
}) {
  return (
    <div className="proj-filter">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          className={active === f.key ? "active" : ""}
          onClick={() => onChange(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
