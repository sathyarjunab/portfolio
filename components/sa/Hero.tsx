"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useReducedMotion } from "./hooks";

export default function Hero({
  name,
  role,
  bio,
  portraitSrc,
  status,
  sticker,
  actions,
  typing = true,
}: {
  /** Set in two lines if it has a line break (\n). */
  name: string;
  role: string;
  bio: string;
  portraitSrc: string;
  /** Short availability line in the pill, e.g. "Open to work". Omit to hide the pill. */
  status?: string;
  /** Short text on the rotated sticker over the portrait. */
  sticker?: string;
  /** Usually two Buttons. */
  actions?: ReactNode;
  typing?: boolean;
}) {
  const reduced = useReducedMotion();
  const animate = typing && !reduced;
  // Characters typed so far, tagged with the name being typed so a new name starts again from zero.
  const [typed, setTyped] = useState({ name, count: 0 });
  useEffect(() => {
    if (!animate) return;
    let count = 0;
    const t = setInterval(() => {
      count += 1;
      setTyped({ name, count });
      if (count >= name.length) clearInterval(t);
    }, 90);
    return () => clearInterval(t);
  }, [name, animate]);
  const shown = !animate ? name.length : typed.name === name ? typed.count : 0;
  const lines = name.slice(0, shown).split("\n");
  return (
    <section className="sa-hero" id="top">
      <div className="sa-hero__text">
        {status && (
          <p className="sa-hero__status"><span className="sa-hero__dot" aria-hidden="true" />{status}</p>
        )}
        <p className="sa-hero__role">{role}</p>
        <h1 className="sa-hero__name" aria-label={name.replace("\n", " ")}>
          <span aria-hidden="true">
            {lines.map((l, i) => (
              <span key={i} className="sa-hero__line">
                {l}
                {i === lines.length - 1 && <span className="sa-hero__cursor" />}
              </span>
            ))}
          </span>
        </h1>
        <p className="sa-hero__bio">{bio}</p>
        {actions && <div className="sa-hero__actions">{actions}</div>}
      </div>
      <div className="sa-hero__art">
        <div className="sa-hero__frame">
          <img src={portraitSrc} alt="" />
        </div>
        {sticker && <span className="sa-hero__sticker">{sticker}</span>}
      </div>
    </section>
  );
}
