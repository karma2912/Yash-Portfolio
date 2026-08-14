export type Category = "client" | "hackathon" | "personal" | "research";

export interface Project {
  idx: string;
  cat: Category;
  tag: string;
  title: string;
  desc: string;
  meta: string[];
  visualTag: string;
  result: string;
}

export const projects: Project[] = [
  {
    idx: "01",
    cat: "client",
    tag: "Enterprise ERP",
    title: "Divyansh ERP",
    desc: "A multi-tenant enterprise resource platform built for real operational workflows — dashboards, automated PDF generation, and infrastructure meant to hold up under daily production use.",
    meta: ["Next.js", "TypeScript", "Multi-Tenant", "SSR"],
    visualTag: "Dashboard / System",
    result: "Production ERP, multiple tenants",
  },
  {
    idx: "02",
    cat: "client",
    tag: "Matrimonial Platform",
    title: "Pavitra Atut Rishta",
    desc: "A real-time matrimonial platform handling verified profiles, OTP-based auth, and matching at scale — built for trust and speed in equal measure.",
    meta: ["Next.js", "JWT Auth", "Razorpay", "Real-Time"],
    visualTag: "Product / Platform",
    result: "1,000+ active users",
  },
  {
    idx: "03",
    cat: "research",
    tag: "AI / Healthcare",
    title: "Anya Meds",
    desc: "An AI-powered healthcare system using CNN-based deep learning for medical imaging analysis, backed by published research and official copyright protection.",
    meta: ["Python", "CNN", "Deep Learning", "FastAPI"],
    visualTag: "Model / Pipeline",
    result: "3 copyrights, 1 paper",
  },
  {
    idx: "04",
    cat: "client",
    tag: "International E-Commerce",
    title: "Cross-Border Commerce Systems",
    desc: "Full-stack e-commerce systems spanning storefront, checkout, admin, and inventory — with cross-border payment handling built into the core architecture.",
    meta: ["Node.js", "REST APIs", "Payments", "PostgreSQL"],
    visualTag: "Store / Admin",
    result: "Cross-border payments live",
  },
  {
    idx: "05",
    cat: "hackathon",
    tag: "Hackathon — 1st Place",
    title: "AetherScan",
    desc: "Built and shipped under competition pressure — took 1st place at CyberStrike '25.",
    meta: ["CyberStrike '25"],
    visualTag: "Hackathon Build",
    result: "1st Place",
  },
  {
    idx: "06",
    cat: "hackathon",
    tag: "Hackathon — 1st Place",
    title: "The Medium",
    desc: "Won 1st place at Horizon '26, designed and implemented end-to-end within a fixed time window.",
    meta: ["Horizon '26"],
    visualTag: "Hackathon Build",
    result: "1st Place",
  },
  {
    idx: "07",
    cat: "personal",
    tag: "Security Tool",
    title: "Phishing Guardian",
    desc: "A phishing-detection utility integrating the Google Safe Browsing API to flag malicious links in real time.",
    meta: ["Google Safe Browsing API", "Node.js"],
    visualTag: "Utility / Lab",
    result: "Real-time link screening",
  },
  {
    idx: "08",
    cat: "personal",
    tag: "Lab / Experiments",
    title: "YMetaverse · YCall · Quiz Quest",
    desc: "Smaller experimental builds — a WebRTC calling experiment, a metaverse prototype, and a real-time quiz application.",
    meta: ["WebRTC", "Socket.IO", "Experiments"],
    visualTag: "Experiments",
    result: "Lab / in progress",
  },
];

export interface Achievement {
  id: number;
  rank: string;
  title: string;
  event: string;
  year: string;
  body: string;
  tags: string[];
}

export const achievements: Achievement[] = [
  {
    id: 1,
    rank: "1st Place",
    title: "AetherScan",
    event: "CyberStrike '25 — AetherScan",
    year: "2025",
    body: "A security-focused build developed and shipped within the competition window, taking first place at CyberStrike '25.",
    tags: ["Hackathon", "Security"],
  },
  {
    id: 2,
    rank: "1st Place",
    title: "The Medium",
    event: "Horizon '26 — The Medium",
    year: "2026",
    body: "An end-to-end product designed and implemented under time pressure, winning first place at Horizon '26.",
    tags: ["Hackathon", "Product"],
  },
  {
    id: 3,
    rank: "1st Place",
    title: "Algorithmic Problem Solving",
    event: "Techtsar '25 — Algorithmic / Problem Solving",
    year: "2025",
    body: "First place in an algorithmic and problem-solving competition, testing speed and correctness under constraints.",
    tags: ["Competitive Programming"],
  },
  {
    id: 4,
    rank: "1st Place",
    title: "Task on Circle",
    event: "Echelon '26 — Task on Circle",
    year: "2026",
    body: "A first-place win at Echelon '26, built and delivered within the event's time constraints.",
    tags: ["Hackathon"],
  },
  {
    id: 5,
    rank: "2nd Place",
    title: "NephroCare",
    event: "Fiestron '25–26 — NephroCare",
    year: "2025–26",
    body: "A healthcare-focused build placing second at Fiestron '25–26.",
    tags: ["Hackathon", "Healthcare"],
  },
];

export interface StackItem {
  name: string;
  cat: string;
  use: string;
}

export const stack: StackItem[] = [
  { name: "Next.js", cat: "Frontend", use: "React, Next.js, Tailwind CSS, Shadcn UI, Framer Motion, GSAP" },
  { name: "TypeScript", cat: "Language", use: "Primary language for application logic across frontend and backend" },
  { name: "Node.js", cat: "Backend", use: "Node.js, Express.js — REST APIs and server-side logic" },
  { name: "PostgreSQL", cat: "Database", use: "Primary relational store for multi-tenant and transactional systems" },
  { name: "MongoDB", cat: "Database", use: "Document store for flexible, high-write workloads" },
  { name: "Redis", cat: "Infra", use: "Caching and session layers for performance-sensitive systems" },
  { name: "Python", cat: "AI / ML", use: "Deep Learning, CNNs, LLM integration for AI-powered systems" },
  { name: "React", cat: "Frontend", use: "Component architecture and interactive UI" },
  { name: "WebRTC", cat: "Real-Time", use: "Peer-to-peer audio/video for real-time applications" },
  { name: "Socket.IO", cat: "Real-Time", use: "Bi-directional real-time communication" },
];

export interface ExperienceItem {
  year: string;
  role: string;
  org: string;
  desc: string;
  meta: string[];
}

export const experience: ExperienceItem[] = [
  {
    year: "2025 —",
    role: "Software Developer",
    org: "Entwicklera",
    desc: "Enterprise software development within a B2B SaaS environment — building against multi-tenant databases, server-rendered interfaces, and production performance standards.",
    meta: ["Next.js", "TypeScript", "Shadcn UI", "SSR", "Core Web Vitals", "Node.js", "REST APIs", "Multi-Tenant DBs", "Automated PDF Workflows"],
  },
  {
    year: "2025 —",
    role: "Freelance Full-Stack Software Engineer",
    org: "Independent",
    desc: "Designed and shipped client systems end-to-end — from Divyansh ERP to Pavitra Atut Rishta to international e-commerce platforms with cross-border payment support.",
    meta: ["Divyansh ERP", "Pavitra Atut Rishta", "International E-Commerce"],
  },
];

export const proofStats = [
  { count: 1000, suffix: "+", decimal: false, label: "Active users across shipped products" },
  { count: 3, suffix: "", decimal: false, label: "Official copyrights" },
  { count: 4, suffix: "+", decimal: false, label: "1st place finishes / victories" },
  { count: 9.31, suffix: "", decimal: true, label: "CGPA" },
];

export const faqs = [
  {
    q: "Are you available for full-time work?",
    a: "Yes — currently open to full-time roles alongside select freelance work.",
  },
  {
    q: "Do you take freelance projects?",
    a: "Yes, on a selective basis — reach out with what you're building and I'll let you know if it's a fit.",
  },
  {
    q: "Do you work with startups?",
    a: "I do — I've built B2B SaaS and product systems from early stage through production scale.",
  },
];

export const pipelineSteps = [
  "Image Input",
  "Feature Extraction",
  "CNN",
  "Prediction",
  "API",
  "Interface",
];
