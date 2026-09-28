import type { Tone } from "./Tag";

export type ExperienceProject = { name: string; href?: string; period?: string; summary?: string; tone?: Exclude<Tone, "plain"> };
export type ExperienceItem = {
  title: string;
  /** Omit when the title is already the company. */
  org?: string;
  role: string;
  period: string;
  href?: string;
  points?: string[];
  /** Products or projects worked on in this role, listed under it. */
  projects?: ExperienceProject[];
};

const domain = (href: string) => href.replace(/^https?:\/\//, "").replace(/\/.*$/, "");

export default function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="sa-timeline">
      {items.map((it) => (
        <li key={it.title + it.period} className="sa-timeline__item">
          <p className="sa-timeline__period">{it.period}</p>
          <div className="sa-timeline__body">
            <h3 className="sa-timeline__title">
              {it.title}
              {it.href && (
                <a href={it.href} target="_blank" rel="noopener noreferrer">{domain(it.href)} ↗</a>
              )}
            </h3>
            <p className="sa-timeline__role">{[it.role, it.org].filter(Boolean).join(" · ")}</p>
            {it.points && it.points.length > 0 && (
              <ul>
                {it.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            )}
            {it.projects && it.projects.length > 0 && (
              <ul className="sa-timeline__projects">
                {it.projects.map((p) => (
                  <li key={p.name} className={`sa-timeline__project sa-timeline__project--${p.tone ?? "lavender"}`}>
                    <div className="sa-timeline__project-head">
                      <h4 className="sa-timeline__project-name">{p.name}</h4>
                      {p.href && (
                        <a href={p.href} target="_blank" rel="noopener noreferrer">{domain(p.href)} ↗</a>
                      )}
                      {p.period && <span className="sa-timeline__project-period">{p.period}</span>}
                    </div>
                    {p.summary && <p className="sa-timeline__project-summary">{p.summary}</p>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
