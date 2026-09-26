import Tag from "./Tag";
import Button from "./Button";
import type { Tone } from "./Tag";

export type ProjectKind = "Work" | "Freelance" | "Side project";
export type Project = {
  title: string;
  summary: string;
  kind?: ProjectKind;
  org?: string;
  role?: string;
  period?: string;
  /** Up to three results, one line each. */
  highlights?: string[];
  /** The headline number, shown as a sticker on the cover: { value: "10×", label: "faster reporting API" }. */
  metric?: { value: string; label: string };
  stack?: string[];
  href?: string;
  /** Screenshot. Without one, the cover becomes a colored poster. */
  imageSrc?: string;
  /** CSS object-position for the screenshot. Default "top left"; use "center" for tall shots. */
  imagePosition?: string;
  tone?: Exclude<Tone, "plain">;
  featured?: boolean;
};

const domain = (href?: string) => (href ? href.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : undefined);
const initials = (t: string) => t.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

export default function ProjectCard(p: Project) {
  const { title, summary, kind, org, role, period, highlights = [], metric, stack = [], href, imageSrc, imagePosition, tone = "lavender", featured } = p;
  const host = domain(href);
  return (
    <article className={`sa-project${featured ? " sa-project--featured" : ""}`}>
      <div className="sa-project__cover">
        <div className="sa-project__bar">
          <span className="sa-project__url">{host ?? (kind === "Side project" ? "private repo" : "internal")}</span>
        </div>
        {imageSrc ? (
          <div className="sa-project__shot">
            <img src={imageSrc} alt={`${title} screenshot`} loading="lazy" style={imagePosition ? { objectPosition: imagePosition } : undefined} />
            {metric && (
              <span className="sa-project__sticker">
                <b>{metric.value}</b> {metric.label}
              </span>
            )}
          </div>
        ) : (
          <div className={`sa-project__poster sa-project__poster--${tone}`}>
            <span className="sa-project__big">{metric ? metric.value : initials(title)}</span>
            {metric && <span className="sa-project__biglabel">{metric.label}</span>}
          </div>
        )}
      </div>
      <div className="sa-project__body">
        {(kind || period) && (
          <p className="sa-project__meta">
            {kind && <span className={`sa-project__kind sa-project__kind--${tone}`}>{kind}</span>}
            {period && <span>{period}</span>}
          </p>
        )}
        <h3 className="sa-project__title">{title}</h3>
        {(role || org) && <p className="sa-project__org">{[role, org].filter(Boolean).join(" · ")}</p>}
        <p className="sa-project__summary">{summary}</p>
        {highlights.length > 0 && (
          <ul className="sa-project__points">
            {highlights.slice(0, 3).map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
        {stack.length > 0 && (
          <ul className="sa-project__stack" aria-label="Stack">
            {stack.map((s) => (
              <li key={s}><Tag>{s}</Tag></li>
            ))}
          </ul>
        )}
        <div className="sa-project__foot">
          {href ? (
            <Button variant="secondary" size="sm" href={href}>{host}</Button>
          ) : (
            <span className="sa-project__private">No public link</span>
          )}
        </div>
      </div>
    </article>
  );
}
