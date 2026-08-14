"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useInView } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Cpu,
  Database,
  Globe,
  Layers,
  Zap,
  Box,
  GitBranch,
  Terminal,
  Server,
  Cloud,
  Lock,
  Camera,
  Activity,
  CheckCircle2,
  Loader2,
  Circle,
  ChevronRight,
  Braces,
  Boxes,
  Network,
  Radar,
  ScanLine,
  Cog,
  Gauge,
  ShieldCheck,
  Workflow,
  FileCode2,
  Binary,
  CircuitBoard,
  Command,
  Crosshair,
  Fingerprint,
  ScanFace,
  Microscope,
  Satellite,
  Signal,
  Antenna,
  RadioTower,
  Factory,
  Wrench,
  Hammer,
  Ruler,
  HardHat,
  Cable,
  Plug,
  Power,
  MemoryStick,
  HardDrive,
  Monitor,
  Keyboard,
  MousePointerClick,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Flame,
  Rocket,
  Target,
  Trophy,
  Medal,
  Award,
  Star,
  Crown,
  Swords,
  Timer,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Building2,
  Send,
} from "lucide-react";

// ----------------------------------------------------------------------
// TYPES
// ----------------------------------------------------------------------

type Project = {
  id: string;
  index: string;
  name: string;
  domain: string;
  stack: string[];
  description: string;
  visual: string; // ASCII-inspired string or simple graphic identifier
  result: string;
  accent?: string;
};

type Role = {
  company: string;
  period: string;
  title: string;
  location: string;
  tech: string[];
  active: boolean;
};

type Metric = {
  value: string;
  label: string;
  supported: boolean;
};

// ----------------------------------------------------------------------
// CONSTANTS
// ----------------------------------------------------------------------

const COLORS = {
  black: "#050505",
  carbon: "#0C0D0D",
  graphite: "#151616",
  surface: "#1C1D1C",
  border: "#303130",
  text: "#ECE8E1",
  muted: "#85837F",
  primary: "#D45F28",
  secondary: "#74331C",
  pale: "#EAA77E",
};

const PROJECTS: Project[] = [
  {
    id: "divyansh-erp",
    index: "01",
    name: "DIVYANSH ERP",
    domain: "ENTERPRISE RESOURCE PLANNING",
    stack: ["NEXT.JS", "NEST.JS", "POSTGRESQL", "REDIS", "DOCKER"],
    description: "Modular ERP suite for manufacturing, inventory, and finance with role-based access control.",
    visual: "ER",
    result: "DEPLOYED / 40+ MODULES",
  },
  {
    id: "pavitra-atut-rishta",
    index: "02",
    name: "PAVITRA ATUT RISHTA",
    domain: "MATRIMONIAL PLATFORM",
    stack: ["REACT", "NODE.JS", "MONGODB", "SOCKET.IO", "AWS"],
    description: "High-traffic matrimonial platform with real-time chat, verification, and match algorithms.",
    visual: "PR",
    result: "10K+ USERS",
  },
  {
    id: "anya-meds",
    index: "03",
    name: "ANYA MEDS",
    domain: "AI HEALTHCARE",
    stack: ["PYTHON", "TENSORFLOW", "FASTAPI", "REACT", "POSTGRESQL"],
    description: "AI-powered medicine identification and drug interaction checker with image recognition.",
    visual: "AM",
    result: "98%+ MODEL ACCURACY",
  },
  {
    id: "international-ecommerce",
    index: "04",
    name: "INTL. E-COMMERCE",
    domain: "CROSS-BORDER COMMERCE",
    stack: ["NEXT.JS", "GRAPHQL", "POSTGRESQL", "STRIPE", "REDIS"],
    description: "Multi-currency, multi-language e-commerce platform with global logistics integration.",
    visual: "EC",
    result: "MULTI-REGION DEPLOYED",
  },
  {
    id: "aetherscan",
    index: "05",
    name: "AETHERSCAN",
    domain: "BLOCKCHAIN EXPLORER",
    stack: ["REACT", "WEB3.JS", "GO", "POSTGRESQL", "KAFKA"],
    description: "Real-time blockchain explorer with transaction tracing, contract verification, and analytics.",
    visual: "AS",
    result: "REAL-TIME INDEXING",
  },
  {
    id: "the-medium",
    index: "06",
    name: "THE MEDIUM",
    domain: "CONTENT PLATFORM",
    stack: ["NEXT.JS", "NEST.JS", "MONGODB", "REDIS", "S3"],
    description: "Publishing platform with rich text editing, versioning, and collaborative features.",
    visual: "TM",
    result: "SCALED INFRASTRUCTURE",
  },
  {
    id: "phishing-guardian",
    index: "07",
    name: "PHISHING GUARDIAN",
    domain: "CYBERSECURITY",
    stack: ["PYTHON", "FASTAPI", "REACT", "ML", "CHROME EXT"],
    description: "Browser extension and API for real-time phishing detection using ML heuristics.",
    visual: "PG",
    result: "BROWSER EXTENSION",
  },
  {
    id: "ymetaverse",
    index: "08",
    name: "YMETAVERSE",
    domain: "VIRTUAL WORLD",
    stack: ["THREE.JS", "REACT", "WEBRTC", "NODE.JS", "REDIS"],
    description: "Browser-based metaverse with spatial audio, avatars, and collaborative spaces.",
    visual: "YM",
    result: "WEBRTC INFRASTRUCTURE",
  },
  {
    id: "ycall",
    index: "09",
    name: "YCALL",
    domain: "COMMUNICATION",
    stack: ["WEBRTC", "SOCKET.IO", "REACT", "NODE.JS", "REDIS"],
    description: "Video conferencing platform with screen sharing, recording, and meeting management.",
    visual: "YC",
    result: "REAL-TIME COMMS",
  },
  {
    id: "quiz-quest",
    index: "10",
    name: "QUIZ QUEST",
    domain: "EDUCATION",
    stack: ["REACT", "NODE.JS", "MONGODB", "SOCKET.IO"],
    description: "Live quiz platform with leaderboards, power-ups, and tournament modes.",
    visual: "QQ",
    result: "LIVE TOURNAMENTS",
  },
  {
    id: "khan-cranes",
    index: "11",
    name: "KHAN CRANES",
    domain: "INDUSTRIAL",
    stack: ["NEXT.JS", "POSTGRESQL", "AWS", "IOT"],
    description: "Industrial crane monitoring dashboard with IoT sensor integration and predictive maintenance.",
    visual: "KC",
    result: "IOT DASHBOARD",
  },
];

const WINS = [
  { place: "1ST", event: "CYBERSTRIKE" },
  { place: "1ST", event: "HORIZON" },
  { place: "1ST", event: "TECHTSAR" },
  { place: "1ST", event: "ECHELON" },
  { place: "2ND", event: "FIESTRON" },
];

const ROLES: Role[] = [
  {
    company: "ENTWICKLERA",
    period: "2024 — PRESENT",
    title: "FULL-STACK ENGINEER",
    location: "MUMBAI / INDIA",
    tech: ["NEXT.JS", "NEST.JS", "POSTGRESQL", "AWS", "DOCKER"],
    active: true,
  },
  {
    company: "FREELANCE",
    period: "2021 — 2024",
    title: "SOFTWARE ENGINEER",
    location: "REMOTE / INDIA",
    tech: ["REACT", "NODE.JS", "MONGODB", "FIREBASE", "SOCKET.IO"],
    active: false,
  },
];

const STACK_CATEGORIES = [
  {
    name: "LANGUAGES",
    icon: FileCode2,
    items: ["TYPESCRIPT", "JAVASCRIPT", "PYTHON", "GO", "SQL", "HTML/CSS"],
  },
  {
    name: "FRONTEND",
    icon: Monitor,
    items: ["REACT", "NEXT.JS", "TAILWIND CSS", "FRAMER MOTION", "REDUX", "THREE.JS"],
  },
  {
    name: "BACKEND",
    icon: Server,
    items: ["NODE.JS", "NEST.JS", "FASTAPI", "GRAPHQL", "REST", "MICROSERVICES"],
  },
  {
    name: "DATABASE",
    icon: Database,
    items: ["POSTGRESQL", "MONGODB", "REDIS", "PRISMA", "MONGOOSE", "SQL ALCHEMY"],
  },
  {
    name: "AI",
    icon: Cpu,
    items: ["TENSORFLOW", "PYTORCH", "SCIKIT-LEARN", "OPENCV", "HUGGINGFACE", "LANGCHAIN"],
  },
  {
    name: "REAL-TIME",
    icon: Zap,
    items: ["SOCKET.IO", "WEBRTC", "KAFKA", "REDIS PUB/SUB", "SSE", "MQTT"],
  },
  {
    name: "TOOLS",
    icon: Wrench,
    items: ["GIT", "DOCKER", "AWS", "GCP", "NGINX", "CI/CD"],
  },
];

const AI_STAGES = [
  { label: "IMAGE", icon: Camera, desc: "Input Capture" },
  { label: "MODEL", icon: Cpu, desc: "Processing" },
  { label: "INFERENCE", icon: ScanLine, desc: "Prediction" },
  { label: "API", icon: Network, desc: "Delivery" },
  { label: "PRODUCT", icon: Box, desc: "Anya Meds" },
];

const METRICS: Metric[] = [
  { value: "1000+", label: "USERS", supported: true },
  { value: "98%+", label: "MODEL ACCURACY", supported: true },
  { value: "3", label: "COPYRIGHTS", supported: true },
  { value: "PUBLISHED", label: "RESEARCH", supported: true },
  { value: "MULTIPLE", label: "COMPETITION WINS", supported: true },
];

// ----------------------------------------------------------------------
// HELPER COMPONENTS
// ----------------------------------------------------------------------

function useCountUp(target: number, duration: number = 2000, start: boolean = true) {
  const [value, setValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!start) return;
    let animationFrame: number;
    let startTime: number | null = null;
    setIsAnimating(true);

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return { value, isAnimating };
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 md:mb-8">
      <div className="h-px w-10 bg-primary" />
      <span className="font-mono text-xs tracking-widest text-primary">{number}</span>
      <span className="font-display text-sm font-bold tracking-[0.2em] text-text">{title}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function GlitchText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 text-primary opacity-30 translate-x-[1px] translate-y-[1px] z-0">{text}</span>
    </span>
  );
}

function MachineLine({ className = "" }: { className?: string }) {
  return (
    <div className={`h-px bg-border relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-primary"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface border border-border text-xs font-mono text-muted hover:text-text hover:border-primary/50 transition-colors">
      <Circle className="w-1.5 h-1.5 fill-primary text-primary" />
      {label}
    </span>
  );
}

function CursorLabel({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed z-[100] pointer-events-none px-3 py-1.5 bg-primary text-black text-xs font-bold tracking-widest font-mono"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
          INSPECT
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function RotatingRing({ size = 200, duration = 20, reverse = false, borderColor = COLORS.primary, children }: {
  size?: number;
  duration?: number;
  reverse?: boolean;
  borderColor?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      className="relative rounded-full border"
      style={{
        width: size,
        height: size,
        borderColor: `${borderColor}40`,
        borderWidth: 1,
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute inset-2 rounded-full border"
        style={{ borderColor: `${borderColor}20`, borderWidth: 1 }}
      />
      <motion.div
        className="absolute inset-4 rounded-full border"
        style={{ borderColor: `${borderColor}10`, borderWidth: 1 }}
      />
      {children}
    </motion.div>
  );
}

function ParticleFlow({ active, count = 6 }: { active: boolean; count?: number }) {
  const particles = Array.from({ length: count });
  return (
    <div className="relative h-full w-full overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{ left: `${(i * 100) / count}%`, top: "50%" }}
          animate={active ? {
            x: [0, 100],
            opacity: [0, 1, 0],
          } : { x: 0, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function MachineVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center">
        {/* Outer rotating ring */}
        <RotatingRing size={380} duration={30}>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 font-mono text-[10px] text-primary tracking-widest">SYS.ACTIVE</div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted tracking-widest">v2.6.1</div>
          <div className="absolute top-1/2 -left-3 -translate-y-1/2 font-mono text-[10px] text-muted tracking-widest">INPUT</div>
          <div className="absolute top-1/2 -right-3 -translate-y-1/2 font-mono text-[10px] text-muted tracking-widest">OUTPUT</div>
        </RotatingRing>

        {/* Middle rotating ring */}
        <RotatingRing size={260} duration={20} reverse>
          <div className="absolute -top-1.5 left-1/4 font-mono text-[9px] text-pale tracking-widest">CORE</div>
          <div className="absolute -bottom-1.5 right-1/4 font-mono text-[9px] text-pale tracking-widest">DATA</div>
        </RotatingRing>

        {/* Inner rotating ring */}
        <RotatingRing size={150} duration={12}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Cpu className="w-8 h-8 text-primary" />
          </div>
        </RotatingRing>

        {/* Static connector lines */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-border" />
        <div className="absolute top-1/4 bottom-1/4 left-1/4 w-px bg-border rotate-45" />
        <div className="absolute top-1/4 bottom-1/4 right-1/4 w-px bg-border -rotate-45" />

        {/* Labels */}
        <div className="absolute top-[10%] left-[10%] font-mono text-[10px] text-muted tracking-widest">FRAME</div>
        <div className="absolute top-[10%] right-[10%] font-mono text-[10px] text-muted tracking-widest">SYSTEM</div>
        <div className="absolute bottom-[10%] left-[10%] font-mono text-[10px] text-muted tracking-widest">DATA</div>
        <div className="absolute bottom-[10%] right-[10%] font-mono text-[10px] text-muted tracking-widest">OUTPUT</div>

        {/* Data points */}
        <motion.div
          className="absolute w-2 h-2 bg-primary rounded-full"
          style={{ top: "30%", left: "30%" }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-primary rounded-full"
          style={{ top: "70%", right: "30%" }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-pale rounded-full"
          style={{ bottom: "30%", left: "50%" }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const layers = [
    { name: "FRONTEND", icon: Monitor, x: "50%", y: "8%", color: COLORS.primary },
    { name: "BACKEND", icon: Server, x: "50%", y: "28%", color: COLORS.pale },
    { name: "DATABASE", icon: Database, x: "50%", y: "48%", color: COLORS.muted },
    { name: "AI", icon: Cpu, x: "50%", y: "68%", color: COLORS.primary },
    { name: "REAL-TIME", icon: Zap, x: "50%", y: "88%", color: COLORS.pale },
  ];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-carbon border border-border overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(${COLORS.border} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.border} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border" />

      {/* Layers */}
      {layers.map((layer, i) => (
        <motion.div
          key={layer.name}
          className="absolute -translate-x-1/2 cursor-pointer"
          style={{ left: layer.x, top: layer.y }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          onMouseEnter={() => setActiveLayer(layer.name)}
          onMouseLeave={() => setActiveLayer(null)}
        >
          <motion.div
            className={`flex items-center gap-3 px-4 py-3 bg-surface border transition-all ${
              activeLayer === layer.name ? "border-primary shadow-lg shadow-primary/20" : "border-border"
            }`}
            animate={{ scale: activeLayer === layer.name ? 1.05 : 1 }}
          >
            <layer.icon className={`w-5 h-5 ${activeLayer === layer.name ? "text-primary" : "text-muted"}`} />
            <span className="font-display font-bold tracking-widest text-sm text-text">{layer.name}</span>
          </motion.div>
          {activeLayer === layer.name && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 mt-2 px-3 py-2 bg-black border border-primary/50"
            >
              <div className="font-mono text-xs text-primary">{layer.name} MODULE</div>
              <div className="font-mono text-[10px] text-muted mt-1">STATUS: ACTIVE</div>
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Connection lines */}
      {layers.slice(0, -1).map((layer, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute left-1/2 w-px bg-primary/30"
          style={{
            top: `calc(${layer.y} + 30px)`,
            height: `calc(${layers[i + 1].y} - ${layer.y} - 60px)`,
            transform: "translateX(-50%)",
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
        />
      ))}

      {/* Data flow dots */}
      {layers.map((layer, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 bg-primary rounded-full left-1/2 -translate-x-1/2"
          style={{ top: `calc(${layer.y} + 28px)` }}
          animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </div>
  );
}

function Timeline() {
  const [activeRole, setActiveRole] = useState(0);

  return (
    <div className="relative py-8">
      {/* Progress line */}
      <div className="absolute left-0 right-0 top-[60px] h-[3px] bg-border">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          whileInView={{ width: activeRole === 0 ? "50%" : "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>

      <div className="relative grid grid-cols-2 gap-8">
        {ROLES.map((role, i) => (
          <motion.div
            key={role.company}
            className="cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            onMouseEnter={() => setActiveRole(i)}
            onClick={() => setActiveRole(i)}
          >
            <div className="flex items-start gap-4">
              {/* Node */}
              <motion.div
                className={`relative z-10 w-4 h-4 rounded-full border-2 mt-[2px] ${
                  activeRole === i ? "bg-primary border-primary" : "bg-carbon border-border"
                }`}
                animate={{ scale: activeRole === i ? 1.3 : 1 }}
              >
                {activeRole === i && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>

              <div>
                <div className="font-display text-lg font-bold text-text tracking-wider">{role.company}</div>
                <div className="font-mono text-xs text-primary mt-1">{role.period}</div>
                <div className="font-mono text-xs text-muted mt-0.5">{role.title}</div>
                <div className="font-mono text-[10px] text-muted/70 mt-0.5">{role.location}</div>

                <AnimatePresence>
                  {activeRole === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-3"
                    >
                      <div className="flex flex-wrap gap-1.5">
                        {role.tech.map((tech) => (
                          <TechTag key={tech} label={tech} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AIEngine() {
  const [activeStage, setActiveStage] = useState(0);
  const [isFlowing, setIsFlowing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % AI_STAGES.length);
      setIsFlowing(true);
      setTimeout(() => setIsFlowing(false), 2000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-carbon border border-border p-6 md:p-8 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-primary" />
          <span className="font-display font-bold tracking-widest text-text">AI ENGINE</span>
        </div>
        <div className="font-mono text-xs text-muted">ANYA MEDS / SUBSYSTEM</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {AI_STAGES.map((stage, i) => (
          <motion.div
            key={stage.label}
            className={`relative p-4 border transition-all ${
              activeStage === i ? "border-primary bg-primary/5" : "border-border bg-surface"
            }`}
            animate={{ scale: activeStage === i ? 1.03 : 1 }}
            onMouseEnter={() => setActiveStage(i)}
          >
            <div className="flex items-center gap-2 mb-3">
              <stage.icon className={`w-5 h-5 ${activeStage === i ? "text-primary" : "text-muted"}`} />
              <span className="font-mono text-xs font-bold text-text">{stage.label}</span>
            </div>
            <div className="font-mono text-[10px] text-muted">{stage.desc}</div>
            {i === 4 && (
              <div className="mt-2 font-mono text-xs text-primary font-bold">PRODUCT</div>
            )}
            <div className="absolute bottom-2 right-2 font-mono text-[10px] text-muted/50">0{i + 1}</div>
          </motion.div>
        ))}
      </div>

      {/* Particle flow */}
      <div className="relative h-12 mt-4 border border-border bg-black/50">
        <ParticleFlow active={isFlowing} count={10} />
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
          <span className="font-mono text-[10px] text-muted">INPUT</span>
          <span className="font-mono text-[10px] text-muted">FLOW</span>
          <span className="font-mono text-[10px] text-muted">OUTPUT</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div className="p-3 bg-surface border border-border">
          <div className="font-mono text-lg text-primary font-bold">98%+</div>
          <div className="font-mono text-[10px] text-muted mt-1">MODEL ACCURACY</div>
        </div>
        <div className="p-3 bg-surface border border-border">
          <div className="font-mono text-lg text-primary font-bold">IMG</div>
          <div className="font-mono text-[10px] text-muted mt-1">INPUT TYPE</div>
        </div>
        <div className="p-3 bg-surface border border-border">
          <div className="font-mono text-lg text-primary font-bold">API</div>
          <div className="font-mono text-[10px] text-muted mt-1">DELIVERY</div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-mono text-xs text-muted mb-2">IDENTIFIER</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-carbon border border-border px-4 py-3 font-mono text-sm text-text focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
            placeholder="YOUR NAME"
          />
        </div>
        <div>
          <label className="block font-mono text-xs text-muted mb-2">EMAIL</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-carbon border border-border px-4 py-3 font-mono text-sm text-text focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
            placeholder="YOU@EXAMPLE.COM"
          />
        </div>
      </div>
      <div>
        <label className="block font-mono text-xs text-muted mb-2">MESSAGE</label>
        <textarea
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full bg-carbon border border-border px-4 py-3 font-mono text-sm text-text focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50 resize-none"
          placeholder="DESCRIBE YOUR PROJECT..."
        />
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold font-mono text-sm tracking-widest hover:bg-pale transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              TRANSMITTING...
            </>
          ) : (
            <>
              INITIALIZE
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 font-mono text-sm text-primary"
            >
              <CheckCircle2 className="w-4 h-4" />
              CONNECTION ESTABLISHED
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="font-mono text-sm text-red-500"
            >
              TRANSMISSION FAILED
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function AboutSection() {
  const words = ["ENGINEER", "BUILDER", "PROBLEM SOLVER", "COMPETITOR", "RESEARCHER"];
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <SectionLabel number="SYSTEM" title="PROFILE" />
      <div className="space-y-4">
        {words.map((word, i) => (
          <motion.div
            key={word}
            className={`text-3xl md:text-5xl font-display font-bold tracking-tight transition-colors ${
              activeWord === i ? "text-primary" : "text-text/30"
            }`}
            animate={{ opacity: activeWord === i ? 1 : 0.3 }}
            onMouseEnter={() => setActiveWord(i)}
          >
            <span className="font-mono text-sm text-muted mr-4">0{i + 1}</span>
            {word}
          </motion.div>
        ))}
      </div>
      <div className="mt-8 font-mono text-sm text-muted leading-relaxed">
        <p className="mb-4">
          <span className="text-primary">//</span> FULL-STACK ENGINEER WITH DEEP SYSTEMS THINKING.
        </p>
        <p className="mb-4">
          <span className="text-primary">//</span> I DESIGN, BUILD, AND DEPLOY MACHINES THAT SERVE PEOPLE.
        </p>
        <p>
          <span className="text-primary">//</span> FROM ENTERPRISE ERP TO AI HEALTHCARE, FROM BLOCKCHAIN TO REAL-TIME COMMS.
        </p>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// MAIN PAGE
// ----------------------------------------------------------------------

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const buildRef = useRef<HTMLDivElement>(null);
  const systemsRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const winsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};

  const navItems = [
    { label: "INPUT", ref: inputRef },
    { label: "BUILD", ref: buildRef },
    { label: "SYSTEMS", ref: systemsRef },
    { label: "RESULTS", ref: resultsRef },
    { label: "WINS", ref: winsRef },
    { label: "EXPERIENCE", ref: experienceRef },
    { label: "AI", ref: aiRef },
    { label: "STACK", ref: stackRef },
    { label: "PROFILE", ref: aboutRef },
    { label: "CONNECT", ref: contactRef },
  ];

  return (
    <div className="min-h-screen bg-black text-text overflow-x-hidden" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[200] origin-left"
        style={{ scaleX }}
      />

      {/* Cursor label */}
      <CursorLabel show={cursorVisible} />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-[150] bg-black/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="font-mono font-bold text-black text-sm">YR</span>
            </div>
            <div className="font-mono text-xs tracking-widest text-muted">SYSTEM / 00</div>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.slice(0, 5).map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.ref)}
                className="font-mono text-xs text-muted hover:text-primary transition-colors tracking-widest"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-text"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-carbon border-t border-border overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      scrollTo(item.ref);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left font-mono text-sm text-muted hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-mono text-xs tracking-widest text-primary mb-6"
              >
                SYSTEM / 00
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-display text-7xl md:text-9xl font-bold leading-none tracking-tight"
              >
                <span className="block">YASH</span>
                <span className="block text-primary">RAJAK</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 font-mono text-sm tracking-widest text-muted"
              >
                FULL-STACK<br />SOFTWARE ENGINEER
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 font-display text-xl md:text-2xl text-text/80 leading-relaxed"
              >
                I BUILD<br />
                THE MACHINES<br />
                BEHIND THE EXPERIENCE.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex items-center gap-4"
              >
                <motion.button
                  onClick={() => scrollTo(contactRef)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold font-mono text-sm tracking-widest hover:bg-pale transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  INITIALIZE
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={() => scrollTo(systemsRef)}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text font-mono text-sm tracking-widest hover:border-primary hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW SYSTEMS
                </motion.button>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2 flex items-center justify-center">
              <MachineVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Section 01 - INPUT */}
      <section ref={inputRef} className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel number="01" title="INPUT" />
          <div className="space-y-6 md:space-y-8">
            {["PROBLEMS", "USERS", "REQUIREMENTS", "CONSTRAINTS"].map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex items-center gap-6"
              >
                <span className="font-mono text-sm text-primary">0{i + 1}</span>
                <h3 className="font-display text-4xl md:text-7xl font-bold tracking-tight text-text/70 hover:text-primary transition-colors">
                  {word}
                </h3>
                <div className="flex-1 h-px bg-border" />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 font-mono text-sm text-muted">
            <span className="text-primary">//</span> EVERY MACHINE STARTS WITH RAW INPUT.
          </div>
        </div>
      </section>

      {/* Section 02 - BUILD */}
      <section ref={buildRef} className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel number="02" title="BUILD" />
          <ArchitectureDiagram />
        </div>
      </section>

      {/* Section 03 - SYSTEMS */}
      <section ref={systemsRef} className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel number="03" title="SYSTEMS" />
          <div className="space-y-4">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group border border-border hover:border-primary transition-all"
                onMouseEnter={() => {
                  setActiveProject(project.id);
                  setCursorVisible(true);
                }}
                onMouseLeave={() => {
                  setActiveProject(null);
                  setCursorVisible(false);
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center p-4 md:p-6 gap-4">
                  {/* Index */}
                  <div className="font-mono text-3xl md:text-5xl font-bold text-muted group-hover:text-primary transition-colors w-20">
                    {project.index}
                  </div>

                  {/* Name & Domain */}
                  <div className="flex-1">
                    <div className="font-display text-xl md:text-2xl font-bold text-text group-hover:text-primary transition-colors">
                      {project.name}
                    </div>
                    <div className="font-mono text-xs text-muted mt-1">{project.domain}</div>
                  </div>

                  {/* Visual */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-carbon border border-border group-hover:border-primary/50 transition-colors">
                    <span className="font-display font-bold text-lg text-muted group-hover:text-primary">{project.visual}</span>
                  </div>

                  {/* Result */}
                  <div className="font-mono text-sm text-primary">{project.result}</div>

                  {/* Arrow */}
                  <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                </div>

                <AnimatePresence>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="p-4 md:p-6 bg-carbon">
                        <p className="font-mono text-sm text-muted mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <TechTag key={tech} label={tech} />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section - RESULTS */}
      <section ref={resultsRef} className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel number="04" title="RESULTS" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {METRICS.filter((m) => m.supported).map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-carbon border border-border hover:border-primary/50 transition-colors"
              >
                <div className="font-display text-5xl md:text-6xl font-bold text-primary">{metric.value}</div>
                <div className="font-mono text-xs text-muted mt-3 tracking-widest">{metric.label}</div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 h-px bg-border" />
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="font-mono text-sm text-muted">
              <span className="text-primary">3</span> OFFICIAL COPYRIGHTS
            </div>
            <div className="font-mono text-sm text-muted">
              <span className="text-primary">PUBLISHED</span> RESEARCH
            </div>
            <div className="font-mono text-sm text-muted">
              <span className="text-primary">MULTIPLE</span> COMPETITION WINS
            </div>
          </div>
        </div>
      </section>

      {/* Section - WINS */}
      <section ref={winsRef} className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel number="05" title="WINS" />
          <div className="space-y-2">
            {WINS.map((win, i) => (
              <motion.div
                key={win.event}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-carbon border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group"
              >
                <div className={`font-mono font-bold text-lg w-20 ${i === 0 ? "text-primary" : "text-muted group-hover:text-primary"}`}>
                  {win.place}
                </div>
                <div className="font-display text-xl md:text-2xl font-bold text-text group-hover:text-primary transition-colors">
                  {win.event}
                </div>
                <div className="flex-1 h-px bg-border group-hover:bg-primary/30 transition-colors" />
                <Trophy className={`w-5 h-5 ${i === 0 ? "text-primary" : "text-muted group-hover:text-primary"}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section - EXPERIENCE */}
      <section ref={experienceRef} className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel number="06" title="EXPERIENCE" />
          <Timeline />
        </div>
      </section>

      {/* Section - AI */}
      <section ref={aiRef} className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AIEngine />
        </div>
      </section>

      {/* Section - STACK */}
      <section ref={stackRef} className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel number="07" title="STACK" />
          <div className="space-y-4">
            {STACK_CATEGORIES.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-carbon border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <category.icon className="w-4 h-4 text-primary" />
                  <span className="font-mono text-xs font-bold text-text tracking-widest">{category.name}</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-surface border border-border font-mono text-xs text-muted hover:text-text hover:border-primary/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section - ABOUT */}
      <section ref={aboutRef} className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AboutSection />
        </div>
      </section>

      {/* Section - CONTACT */}
      <section ref={contactRef} className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel number="08" title="CONNECT" />
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl font-bold tracking-tight"
            >
              READY<br />
              <span className="text-primary">TO BUILD?</span>
            </motion.h2>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-carbon">
        <div className="h-px bg-primary" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="font-display text-2xl font-bold text-text">YASH RAJAK</div>
              <div className="font-mono text-xs text-muted mt-2">SOFTWARE ENGINEER</div>
              <div className="font-mono text-xs text-muted mt-1">MUMBAI / INDIA</div>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@yashrajak.com" className="text-muted hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="font-mono text-xs text-muted">© 2026</div>
          </div>
        </div>
      </footer>
    </div>
  );
}