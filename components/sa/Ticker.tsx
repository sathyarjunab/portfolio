export default function Ticker({ items, seconds = 36, tone = "lavender" }: { items: string[]; seconds?: number; tone?: "lavender" | "sun" | "ink" }) {
  const row = (hidden: boolean) => (
    <ul className="sa-ticker__row" aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
  return (
    <div className={`sa-ticker sa-ticker--${tone}`} style={{ ["--sa-ticker-s" as string]: `${seconds}s` }}>
      <div className="sa-ticker__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
