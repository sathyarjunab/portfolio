// Everything the page says lives here. Edit this file to update the site.
import type { Project, ExperienceItem, SkillGroup, Social } from "../components/sa";

export const profile = {
  name: "Sathyarjun A B",
  heroName: "Sathyarjun\nA B",
  monogram: "SA",
  role: "Full-stack developer · Mandya, Karnataka",
  status: "Open to work", // set to "" to hide the pill
  sticker: "Angular · Node · React",
  bio: "I build scalable web apps and real-time platforms across fintech, CRM and SaaS, from the database to the UI.",
  portrait: "/portrait.png",
  email: "sathyarjun007@gmail.com",
  phone: "+91 91136 19637",
  phoneHref: "tel:+919113619637",
  github: "https://github.com/sathyarjunab",
  linkedin: "https://www.linkedin.com/in/sathyarjun-a-b-7767ba238/",
};

export const resume = {
  href: "/Sathyarjun_A_B_Resume.pdf",
  fileName: "Sathyarjun_A_B_Resume.pdf",
  fileSize: "90 KB",
  updated: "Sep 2026",
  description: "One page: my work on Hedged, Greein and Zhylar, freelance and side projects, and skills.",
  stats: [
    { value: "1.5+ yrs", label: "Experience" },
    { value: "4", label: "Products shipped" },
    { value: "10×", label: "Fastest API win" },
  ],
};

export const tickerItems = ["Angular", "React", "Next.js", "Node.js", "Fastify", "Express", "PostgreSQL", "MySQL", "MongoDB", "Redis", "WebSockets", "AWS", "Docker", "TypeScript", "C++"];

export const about = {
  lead: "A full-stack developer with 1.5+ years building real-time platforms, payment integrations and fast APIs.",
  notes: [
    "Solving bugs feels like solving puzzles: frustrating at first, satisfying when everything clicks.",
    "I cut a reporting API from ~50s to ~5s, and I still get a kick out of that kind of win.",
    "I love trying new frameworks, writing code that reads smoothly, and understanding what happens under the hood.",
  ],
};

export const projects: Project[] = [
  {
    title: "Hedged Core", kind: "Work", org: "Blackcurrant Labs", role: "Full-stack developer", period: "Jan 2025 – now", featured: true, tone: "lavender",
    href: "https://app.hedged.in/", imageSrc: "/projects/hedged-core.png",
    summary: "A real-time stock recommendation and trading analytics platform, with WhatsApp alerts, financial charts and broker reconciliation.",
    metric: { value: "10×", label: "faster reporting API (~50s → ~5s)" },
    highlights: [
      "Built P&L, MTM and reporting data pipelines, and integrated Cashfree recurring and one-time payments.",
      "Made the backend 30–50% faster by tuning SQL queries, indexes and caching.",
      "Automated background work with scheduled jobs and queues.",
    ],
    stack: ["Angular", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Greein", kind: "Work", org: "Blackcurrant Labs", role: "Full-stack developer", period: "Jan 2025 – now", tone: "sage",
    href: "https://dev.greein.com/", imageSrc: "/projects/greein.png",
    summary: "An admin platform for a broker extension, with real-time market data, push notifications and third-party API integrations.",
    metric: { value: "1000s", label: "live market updates streamed daily" },
    highlights: ["Built WebSocket services that stream live market updates across the platform."],
    stack: ["WebSockets", "Node.js", "AWS S3"],
  },
  {
    title: "Zhylar", kind: "Work", org: "Blackcurrant Labs", role: "Full-stack developer", period: "Jan 2026 – Jul 2026", tone: "sun",
    href: "https://app.zhylar.com/",
    summary: "Monetization and subscription management for a CRM platform.",
    metric: { value: "Stripe", label: "recurring and one-time billing" },
    highlights: ["Built subscription provisioning, usage metering and billing automation.", "Added email notifications and customer-lifecycle automations."],
    stack: ["Angular", "Node.js", "Express", "MySQL", "Stripe"],
  },
  {
    title: "Scale N Evolve", kind: "Freelance", role: "Independent consultant", period: "May 2026", tone: "rose",
    href: "https://scalenevolve.com/", imageSrc: "/projects/scale-n-evolve.png",
    summary: "A SaaS platform for habit tracking and budget management, with unified analytics dashboards, heatmaps and charts.",
    metric: { value: "3+", label: "third-party services integrated" },
    highlights: ["Integrated Shopify Payments for subscriptions and ZeptoMail for transactional email."],
    stack: ["Shopify Payments", "ZeptoMail"],
  },
  {
    title: "Excel Clone", kind: "Side project", tone: "lavender",
    summary: "A collaborative spreadsheet with real-time sync, formulas and offline caching.",
    metric: { value: "100k+", label: "cells, only the visible ones rendered" },
    highlights: [
      "Virtual scrolling and chunk-based loading fetch and draw only the visible region.",
      "IndexedDB cache cuts repeat requests and works offline; Redis and tuned PostgreSQL on the server.",
    ],
    stack: ["Fastify", "Prisma", "PostgreSQL", "Redis", "IndexedDB", "Docker"],
  },
  {
    title: "Chess Engine", kind: "Side project", period: "Jun – Sep 2025", tone: "sage",
    href: "https://chessvalidator.netlify.app/", imageSrc: "/projects/chess-engine.png", imagePosition: "center 42%",
    summary: "A chess app on a custom C++ rules engine for move generation, validation and game-state evaluation.",
    metric: { value: "C++", label: "rules engine behind a React board" },
    highlights: ["Bridged the C++ engine to the React frontend through a JavaScript interop layer."],
    stack: ["C++", "React", "JavaScript"],
  },
];

// One company; the products I've worked on there are listed under it.
export const experience: ExperienceItem[] = [
  {
    title: "Blackcurrant Labs", role: "Full-stack developer", period: "Jan 2025 – now",
    projects: [
      { name: "Hedged Core", href: "https://app.hedged.in/", period: "Jan 2025 – now", tone: "lavender", summary: "Real-time stock recommendation and trading analytics platform; reporting API cut from ~50s to ~5s." },
      { name: "Greein", href: "https://dev.greein.com/", period: "Jan 2025 – now", tone: "sage", summary: "Broker extension admin platform and WebSocket services streaming live market data." },
      { name: "Zhylar", href: "https://app.zhylar.com/", period: "Jan 2026 – Jul 2026", tone: "sun", summary: "Stripe billing, subscription provisioning and usage metering for a CRM." },
    ],
  },
];

export const skills: SkillGroup[] = [
  { name: "Languages", skills: ["JavaScript", "TypeScript", "C++", "Python", "SQL"] },
  { name: "Frontend", skills: ["Angular", "React", "Next.js", "HTML", "CSS"] },
  { name: "Backend", skills: ["Node.js", "Express", "Fastify", "REST APIs", "WebSockets", "Microservices"] },
  { name: "Data", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Sequelize"] },
  { name: "Cloud & DevOps", skills: ["AWS EC2", "AWS S3", "Docker", "CI/CD", "Git", "GitHub"] },
];

export const socials: Social[] = [
  { kind: "github", value: "@sathyarjunab", href: profile.github },
  { kind: "linkedin", value: "sathyarjun-a-b", href: profile.linkedin },
  { kind: "email", value: profile.email, href: `mailto:${profile.email}` },
  { kind: "phone", value: profile.phone, href: profile.phoneHref },
];
