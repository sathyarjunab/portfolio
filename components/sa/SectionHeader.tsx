export default function SectionHeader({ eyebrow, title, description, id }: { eyebrow?: string; title: string; description?: string; id?: string }) {
  return (
    <header className="sa-section-head" id={id}>
      {eyebrow && <p className="sa-eyebrow">{eyebrow}</p>}
      <h2 className="sa-section-head__title">{title}</h2>
      {description && <p className="sa-section-head__desc">{description}</p>}
    </header>
  );
}
