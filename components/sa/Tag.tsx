import type { ReactNode } from "react";
export type Tone = "plain" | "lavender" | "sun" | "rose" | "sage";
export default function Tag({ children, tone = "plain" }: { children: ReactNode; tone?: Tone }) {
  return <span className={`sa-tag sa-tag--${tone}`}>{children}</span>;
}
