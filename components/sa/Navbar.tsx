"use client";

import { useState } from "react";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "./icons";

export type NavLink = { label: string; href: string };

export default function Navbar({
  name,
  monogram,
  links,
  cta,
  themeToggle = true,
  sticky = true,
}: {
  name: string;
  monogram: string;
  links: NavLink[];
  cta?: { label: string; href: string };
  themeToggle?: boolean;
  sticky?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`sa-nav${sticky ? " sa-nav--sticky" : ""}`}>
      <div className="sa-nav__bar">
        <a className="sa-nav__brand" href="#top">
          <span className="sa-nav__mono" aria-hidden="true">{monogram}</span>
          <span className="sa-nav__name">{name}</span>
        </a>
        <nav className="sa-nav__links" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="sa-nav__actions">
          {themeToggle && <ThemeToggle />}
          {cta && (
            <span className="sa-nav__cta">
              <Button size="sm" href={cta.href} arrow={false}>{cta.label}</Button>
            </span>
          )}
          <button type="button" className="sa-toggle sa-nav__menu" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X size={18} strokeWidth={2.25} /> : <Menu size={18} strokeWidth={2.25} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="sa-nav__sheet" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          {cta && <a href={cta.href} onClick={() => setOpen(false)}>{cta.label}</a>}
        </nav>
      )}
    </header>
  );
}
