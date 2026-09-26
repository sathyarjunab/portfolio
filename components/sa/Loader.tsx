export default function Loader({ percentage, label = "Loading portfolio", fullscreen = true }: { percentage: number; label?: string; fullscreen?: boolean }) {
  const p = Math.max(0, Math.min(100, Math.round(percentage)));
  return (
    <div className={`sa-loader${fullscreen ? " sa-loader--full" : ""}`} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={p} aria-label={label}>
      <p className="sa-eyebrow">{label}</p>
      <p className="sa-loader__count">{String(p).padStart(3, "0")}<span>%</span></p>
      <div className="sa-loader__bar"><span style={{ width: `${p}%` }} /></div>
    </div>
  );
}
