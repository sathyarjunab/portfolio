import Button from "./Button";

export type ResumeStat = { value: string; label: string };

export default function ResumeDownload({
  eyebrow = "/resume",
  title = "Grab my resume",
  description,
  href,
  fileName = "resume.pdf",
  fileSize,
  updated,
  viewHref,
  stats = [],
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** The PDF. In Next.js, put it in public/ and pass "/resume.pdf". */
  href: string;
  /** Name the file saves as. */
  fileName?: string;
  fileSize?: string;
  updated?: string;
  /** Opens the PDF in a new tab. Defaults to href. */
  viewHref?: string;
  stats?: ResumeStat[];
}) {
  return (
    <section className="sa-resume" id="resume">
      <div className="sa-resume__doc" aria-hidden="true">
        <div className="sa-resume__page">
          <span className="sa-resume__line sa-resume__line--title" />
          <span className="sa-resume__line sa-resume__line--sub" />
          {[92, 80, 86, 60, 88, 74, 82, 56, 90, 68].map((w, i) => (
            <span key={i} className="sa-resume__line" style={{ width: `${w}%` }} />
          ))}
        </div>
        <span className="sa-resume__badge">PDF</span>
      </div>
      <div className="sa-resume__text">
        <p className="sa-eyebrow">{eyebrow}</p>
        <h2 className="sa-resume__title">{title}</h2>
        {description && <p className="sa-resume__desc">{description}</p>}
        {stats.length > 0 && (
          <dl className="sa-resume__stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className="sa-resume__actions">
          <a className="sa-btn sa-btn--primary sa-btn--lg sa-resume__dl" href={href} download={fileName}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
            </svg>
            <span>Download PDF</span>
          </a>
          <Button variant="secondary" size="lg" href={viewHref ?? href} arrow>
            View online
          </Button>
        </div>
        {(fileSize || updated) && (
          <p className="sa-resume__file">
            {[fileName, fileSize, updated && `Updated ${updated}`].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
    </section>
  );
}
