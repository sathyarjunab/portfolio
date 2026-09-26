"use client";

import type { ReactNode, MouseEventHandler } from "react";
import { ArrowUpRight } from "./icons";

export type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  /** Adds the ↗ arrow after the label. Defaults to true for external links. */
  arrow?: boolean;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({ children, variant = "primary", size = "md", href, arrow, icon, onClick, type = "button", disabled }: ButtonProps) {
  const external = !!href && /^https?:\/\//.test(href);
  const showArrow = arrow ?? external;
  const cls = `sa-btn sa-btn--${variant} sa-btn--${size}`;
  const inner = (
    <>
      {icon && <span className="sa-btn__icon" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
      {showArrow && <ArrowUpRight className="sa-btn__arrow" size={size === "lg" ? 20 : 16} strokeWidth={2.25} aria-hidden="true" />}
    </>
  );
  if (href)
    return (
      <a className={cls} href={href} onClick={onClick} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
}
