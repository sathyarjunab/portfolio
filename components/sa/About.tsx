export default function About({ lead, notes }: { lead: string; notes: string[] }) {
  return (
    <div className="sa-about">
      <p className="sa-about__lead">{lead}</p>
      <ul className="sa-about__notes">
        {notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
