"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project, ProjectKind } from "./ProjectCard";

const ORDER: ProjectKind[] = ["Work", "Freelance", "Side project"];

export default function ProjectShowcase({ projects, filters = true }: { projects: Project[]; filters?: boolean }) {
  const kinds = useMemo(() => ORDER.filter((k) => projects.some((p) => p.kind === k)), [projects]);
  const [active, setActive] = useState<"All" | ProjectKind>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.kind === active);
  const featured = shown.find((p) => p.featured);
  const rest = shown.filter((p) => p !== featured);
  // An odd card out spans the last row in the wide layout instead of leaving a hole.
  const odd = rest.length % 2 === 1;
  const label = (k: ProjectKind) => (k === "Side project" ? "Side projects" : k);
  return (
    <div className="sa-showcase">
      {filters && kinds.length > 1 && (
        <div className="sa-showcase__filters" role="group" aria-label="Filter projects">
          {(["All", ...kinds] as ("All" | ProjectKind)[]).map((k) => {
            const n = k === "All" ? projects.length : projects.filter((p) => p.kind === k).length;
            return (
              <button key={k} type="button" className="sa-chip" aria-pressed={active === k} onClick={() => setActive(k)}>
                {k === "All" ? "All" : label(k)} <span className="sa-chip__n">{n}</span>
              </button>
            );
          })}
        </div>
      )}
      {featured && <ProjectCard {...featured} featured />}
      <div className="sa-showcase__grid">
        {rest.map((p, i) => {
          const last = odd && i === rest.length - 1;
          return (
            <div key={p.title} className={last ? "sa-showcase__wide" : "sa-showcase__cell"}>
              <ProjectCard {...p} featured={last} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
