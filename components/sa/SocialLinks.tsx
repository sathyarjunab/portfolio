"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Copy, Check, ArrowUpRight } from "./icons";

export type SocialKind = "github" | "linkedin" | "email" | "phone";
export type Social = {
  kind: SocialKind;
  /** Shown big: "@sathyarjunab", "+91 91136 19637". */
  value: string;
  href: string;
  /** Small label above. Defaults by kind. */
  label?: string;
};

const META: Record<SocialKind, { label: string; Icon: typeof Github; tone: string; action: string; copy: boolean }> = {
  github: { label: "GitHub", Icon: Github, tone: "lavender", action: "Open profile", copy: false },
  linkedin: { label: "LinkedIn", Icon: Linkedin, tone: "sun", action: "Connect", copy: false },
  email: { label: "Email", Icon: Mail, tone: "rose", action: "Write", copy: true },
  phone: { label: "Phone", Icon: Phone, tone: "sage", action: "Call", copy: true },
};

function Tile({ s }: { s: Social }) {
  const m = META[s.kind];
  const [copied, setCopied] = useState(false);
  const external = /^https?:\/\//.test(s.href);
  const copy = () => {
    try {
      navigator.clipboard.writeText(s.value).then(
        () => { setCopied(true); setTimeout(() => setCopied(false), 1600); },
        () => {}
      );
    } catch { /* clipboard unavailable: the value stays selectable */ }
  };
  return (
    <li className="sa-social">
      <span className={`sa-social__icon sa-social__icon--${m.tone}`} aria-hidden="true">
        <m.Icon size={24} strokeWidth={2.25} />
      </span>
      <p className="sa-social__label">{s.label ?? m.label}</p>
      <p className="sa-social__value">{s.value}</p>
      <div className="sa-social__actions">
        <a className="sa-social__go" href={s.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {m.action}
          <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" />
        </a>
        {m.copy && (
          <button type="button" className="sa-social__copy" onClick={copy} aria-label={`Copy ${m.label.toLowerCase()}`}>
            {copied ? <Check size={16} strokeWidth={2.5} /> : <Copy size={16} strokeWidth={2.25} />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        )}
      </div>
    </li>
  );
}

export default function SocialLinks({ items }: { items: Social[] }) {
  return (
    <ul className="sa-socials">
      {items.map((s) => (
        <Tile key={s.kind + s.value} s={s} />
      ))}
    </ul>
  );
}
