import Tag from "./Tag";
import type { Tone } from "./Tag";

export type SkillGroup = { name: string; skills: string[]; tone?: Exclude<Tone, "plain"> };
const TONES: Exclude<Tone, "plain">[] = ["lavender", "sun", "rose", "sage"];

export default function SkillGroups({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="sa-skills">
      {groups.map((g, i) => {
        const tone = g.tone ?? TONES[i % TONES.length];
        return (
          <section key={g.name} className="sa-skills__group">
            <header className={`sa-skills__head sa-skills__head--${tone}`}>
              <h3>{g.name}</h3>
              <span className="sa-skills__count">{String(g.skills.length).padStart(2, "0")}</span>
            </header>
            <ul className="sa-skills__list">
              {g.skills.map((s) => (
                <li key={s}><Tag>{s}</Tag></li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
