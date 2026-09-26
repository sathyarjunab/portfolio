"use client";

import { useState } from "react";
import Button from "./Button";
import { Copy, Check, Github, Linkedin, Mail, Phone } from "./icons";

export type ContactLink = { label: string; href: string; icon?: "github" | "linkedin" | "mail" };
const ICONS = { github: Github, linkedin: Linkedin, mail: Mail };

export default function ContactBlock({
  eyebrow = "/contact",
  title,
  email,
  phone,
  links = [],
}: {
  eyebrow?: string;
  title: string;
  email: string;
  phone?: string;
  links?: ContactLink[];
}) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1800); };
    try {
      navigator.clipboard.writeText(email).then(done, () => selectEmail());
    } catch { selectEmail(); }
  };
  const selectEmail = () => {
    const el = document.getElementById("sa-contact-email");
    if (!el) return;
    const r = document.createRange(); r.selectNodeContents(el);
    const s = window.getSelection(); s?.removeAllRanges(); s?.addRange(r);
  };
  return (
    <section className="sa-contact" id="contact">
      <p className="sa-eyebrow sa-eyebrow--on-block">{eyebrow}</p>
      <h2 className="sa-contact__title">{title}</h2>
      <div className="sa-contact__row">
        <span className="sa-contact__email" id="sa-contact-email"><Mail size={18} strokeWidth={2.25} aria-hidden="true" />{email}</span>
        <Button variant="secondary" size="sm" onClick={copy} icon={copied ? <Check size={16} strokeWidth={2.5} /> : <Copy size={16} strokeWidth={2.25} />}>
          {copied ? "Copied" : "Copy email"}
        </Button>
      </div>
      {phone && <p className="sa-contact__phone"><Phone size={16} strokeWidth={2.25} aria-hidden="true" />{phone}</p>}
      {links.length > 0 && (
        <div className="sa-contact__links">
          {links.map((l) => {
            const I = l.icon ? ICONS[l.icon] : null;
            return (
              <Button key={l.href} variant="primary" size="md" href={l.href} icon={I ? <I size={18} strokeWidth={2.25} /> : undefined}>
                {l.label}
              </Button>
            );
          })}
        </div>
      )}
    </section>
  );
}
