export default function Footer({ owner, note, year = new Date().getFullYear() }: { owner: string; note?: string; year?: number }) {
  return (
    <footer className="sa-footer">
      <span>© {year} {owner}</span>
      {note && <span>{note}</span>}
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
