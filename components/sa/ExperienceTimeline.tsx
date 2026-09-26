export type ExperienceItem = { title: string; org: string; role: string; period: string; href?: string; points?: string[] };

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
                <a href={it.href} target="_blank" rel="noopener noreferrer">{it.href.replace(/^https?:\/\//, "").replace(/\/.*$/, "")} ↗</a>
              )}
            </h3>
            <p className="sa-timeline__role">{it.role} · {it.org}</p>
            {it.points && it.points.length > 0 && (
              <ul>
                {it.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
