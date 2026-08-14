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
  image: string;
}

export const projects: Project[] = [
  {
    idx: "01",
    cat: "client",
    tag: "Textile E-Commerce",
    title: "Fabric by Meter",
    desc: "A fabric e-commerce platform built around meter-based pricing, product management, and inventory workflows.",
    meta: ["Next.js", "Nest.js", "PostgreSQL", "Redis", "Docker"],
    visualTag: "Store / Inventory",
    result: "Deployed / 100+ products",
    image: "/image2.png",
  },
  {
    idx: "02",
    cat: "client",
    tag: "Matrimonial Platform",
    title: "Pavitra Atut Rishta",
    desc: "A high-traffic matrimonial platform with real-time chat, user verification, and match algorithms built around reliable communication and user trust.",
    meta: ["React", "Node.js", "MongoDB", "Socket.IO", "AWS"],
    visualTag: "Platform / Real-Time",
    result: "Deployed / 10K+ users",
    image: "/pavitraatutrishta.png",
  },
  {
    idx: "03",
    cat: "client",
    tag: "Beverage E-Commerce",
    title: "Rezzilli Drinks",
    desc: "A specialized e-commerce platform for premium beverages in the United Kingdom, featuring personalized recommendations and a complete online shopping experience.",
    meta: ["Next.js", "Node.js", "MongoDB", "Redis", "AWS"],
    visualTag: "Store / Commerce",
    result: "Deployed / International client",
    image: "/rezzilli1.png",
  },
  {
    idx: "04",
    cat: "client",
    tag: "Enterprise ERP",
    title: "Divyansh ERP",
    desc: "A modular enterprise resource planning suite for manufacturing, inventory, and finance operations with role-based access control.",
    meta: ["Next.js", "Nest.js", "PostgreSQL", "Redis", "Docker"],
    visualTag: "Dashboard / System",
    result: "Deployed / 10+ operations",
    image: "/projects/divyansh-erp.png",
  },
  {
    idx: "05",
    cat: "research",
    tag: "AI / Healthcare",
    title: "Anya Meds",
    desc: "An AI-powered healthcare system for medicine identification and drug interaction analysis using image recognition and deep learning.",
    meta: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL"],
    visualTag: "Model / Healthcare",
    result: "98%+ model accuracy",
    image: "/anyamedslogo2.jpg",
  },
  {
    idx: "06",
    cat: "hackathon",
    tag: "Blockchain Explorer",
    title: "AetherScan",
    desc: "A real-time blockchain explorer with transaction tracing, smart contract verification, and analytics capabilities.",
    meta: ["React", "Web3.js", "Go", "PostgreSQL", "Kafka"],
    visualTag: "Blockchain / Analytics",
    result: "Real-time indexing",
    image: "/projects/aetherscan.png",
  },
  {
    idx: "07",
    cat: "hackathon",
    tag: "Content Platform",
    title: "The Medium",
    desc: "A publishing platform featuring rich-text editing, content versioning, and collaborative publishing capabilities.",
    meta: ["Next.js", "Nest.js", "MongoDB", "Redis", "S3"],
    visualTag: "Publishing / Platform",
    result: "Scaled infrastructure",
    image: "/projects/the-medium.png",
  },
  {
    idx: "08",
    cat: "personal",
    tag: "Cybersecurity",
    title: "Phishing Guardian",
    desc: "A browser extension and API for real-time phishing detection using machine-learning heuristics to identify potentially malicious links.",
    meta: ["Python", "FastAPI", "React", "ML", "Chrome Extension"],
    visualTag: "Security / Utility",
    result: "Browser extension",
    image: "/phishingguardian2.png",
  },
  {
    idx: "09",
    cat: "personal",
    tag: "Virtual World",
    title: "YMetaverse",
    desc: "A browser-based metaverse experience featuring spatial audio, interactive avatars, and collaborative virtual spaces.",
    meta: ["Three.js", "React", "WebRTC", "Node.js", "Redis"],
    visualTag: "3D / Virtual World",
    result: "WebRTC infrastructure",
    image: "/YMetaverse.png",
  },
  {
    idx: "10",
    cat: "personal",
    tag: "Communication",
    title: "YCall",
    desc: "A real-time video conferencing platform with screen sharing, recording, and meeting management capabilities.",
    meta: ["WebRTC", "Socket.IO", "React", "Node.js", "Redis"],
    visualTag: "Video / Real-Time",
    result: "Real-time communications",
    image: "/YCall.png",
  },
  {
    idx: "11",
    cat: "personal",
    tag: "Education",
    title: "Quiz Quest",
    desc: "A live quiz platform with real-time leaderboards, power-ups, and tournament modes designed for competitive learning experiences.",
    meta: ["React", "Node.js", "MongoDB", "Socket.IO"],
    visualTag: "Quiz / Real-Time",
    result: "Live tournaments",
    image: "/quizquest2.png",
  },
  {
    idx: "12",
    cat: "client",
    tag: "Industrial IoT",
    title: "Khan Cranes",
    desc: "An industrial crane monitoring dashboard integrating IoT sensor data with infrastructure designed for predictive maintenance workflows.",
    meta: ["Next.js", "PostgreSQL", "AWS", "IoT"],
    visualTag: "Dashboard / IoT",
    result: "IoT dashboard",
    image: "/khancrane.jpeg"
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
  {
    name: "Next.js",
    cat: "Frontend",
    use: "React, Next.js, Tailwind CSS, Shadcn UI, Framer Motion, GSAP",
  },
  {
    name: "TypeScript",
    cat: "Language",
    use: "Primary language for application logic across frontend and backend",
  },
  {
    name: "Node.js",
    cat: "Backend",
    use: "Node.js, Express.js — REST APIs and server-side logic",
  },
  {
    name: "PostgreSQL",
    cat: "Database",
    use: "Primary relational store for multi-tenant and transactional systems",
  },
  {
    name: "MongoDB",
    cat: "Database",
    use: "Document store for flexible, high-write workloads",
  },
  {
    name: "Redis",
    cat: "Infra",
    use: "Caching and session layers for performance-sensitive systems",
  },
  {
    name: "Python",
    cat: "AI / ML",
    use: "Deep Learning, CNNs, LLM integration for AI-powered systems",
  },
  {
    name: "React",
    cat: "Frontend",
    use: "Component architecture and interactive UI",
  },
  {
    name: "WebRTC",
    cat: "Real-Time",
    use: "Peer-to-peer audio/video for real-time applications",
  },
  {
    name: "Socket.IO",
    cat: "Real-Time",
    use: "Bi-directional real-time communication",
  },
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
    meta: [
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "SSR",
      "Core Web Vitals",
      "Node.js",
      "REST APIs",
      "Multi-Tenant DBs",
      "Automated PDF Workflows",
    ],
  },
  {
    year: "2025 —",
    role: "Freelance Full-Stack Software Engineer",
    org: "Independent",
    desc: "Designed and shipped client systems end-to-end — from Divyansh ERP to Pavitra Atut Rishta to international e-commerce platforms with cross-border payment support.",
    meta: [
      "Divyansh ERP",
      "Pavitra Atut Rishta",
      "International E-Commerce",
    ],
  },
];

export const proofStats = [
  {
    count: 1000,
    suffix: "+",
    decimal: false,
    label: "Active users across shipped products",
  },
  {
    count: 3,
    suffix: "",
    decimal: false,
    label: "Official copyrights",
  },
  {
    count: 4,
    suffix: "+",
    decimal: false,
    label: "1st place Hackathon victories",
  },
  {
    count: 9.31,
    suffix: "",
    decimal: true,
    label: "CGPA",
  },
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