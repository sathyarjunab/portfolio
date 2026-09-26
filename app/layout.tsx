import type { Metadata } from "next";
import { Unbounded, Figtree, Martian_Mono } from "next/font/google";
import "./sathyarjun.css";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-unbounded", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-figtree", display: "swap" });
const martian = Martian_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-martian-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Sathyarjun A B · Full-stack developer",
  description: "Full-stack developer building real-time platforms, payment integrations and fast APIs across fintech, CRM and SaaS.",
};

// Applies a saved theme before the first paint, so there is no light flash for dark-mode visitors.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${figtree.variable} ${martian.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
