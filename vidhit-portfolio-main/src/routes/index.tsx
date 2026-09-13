import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Linkedin,
  Instagram,
  ArrowRight,
  Brain,
  Sparkles,
  GraduationCap,
  MapPin,
  Code2,
  Database,
  Sigma,
  Cpu,
  Workflow,
  ShieldCheck,
  FileSpreadsheet,
  Globe,
  FileText,
  Download,
  ExternalLink,
  Eye,
  Mail,
  Github,
  Award,
  CheckCircle2,
  User,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const LINKEDIN = "https://www.linkedin.com/in/vidhit-valyal-701880379?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const INSTAGRAM = "https://www.instagram.com/buildwith_vidhit?igsh=MXR0MXB1N3A3MWoweA==";
const GITHUB = "https://github.com/vidhit79";
const EMAIL = "valyalvidhit@gmail.com";
const MAILTO = "mailto:valyalvidhit@gmail.com";
const PHONE = "+91 7757875121";
const TEL = "tel:+917757875121";
const RESUME_PDF = "./Vidhit_Valyal_Resume.pdf";

const projects = [
  {
    icon: ShieldCheck,
    title: "SafeGuard AI",
    tag: "AI / Computer Vision",
    description:
      "AI-powered vehicle accident detection & emergency response prototype. Integrates YOLO-based object and pose detection with OpenCV, multi-stage accident verification, voice-based rider response check, and automated emergency alerts.",
    stack: ["Python", "YOLO", "OpenCV", "Computer Vision", "Tkinter", "GNSS/GPS", "AI/ML"],
    accent: "electric",
  },
  {
    icon: FileSpreadsheet,
    title: "ExcelFlow AI",
    tag: "Automation",
    description:
      "Streamlines spreadsheet workflows and automates data processing, wiring AI-driven insights straight into everyday data pipelines.",
    stack: ["Python", "Pandas", "OpenAI", "Streamlit"],
    accent: "purple",
  },
  {
    icon: Globe,
    title: "Next-Gen Web Platforms Ecosystem",
    tag: "Full-Stack",
    description:
      "Custom, highly functional web platforms designed for businesses, college life management, and responsive personal portfolios.",
    stack: ["React", "TypeScript", "Tailwind", "Node"],
    accent: "electric",
  },
];

export function Index() {
  const [showPdfEmbed, setShowPdfEmbed] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />

      {/* NAV */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm tracking-tight text-silver hover:text-white"
        >
          <span className="text-gradient font-semibold">vidhit</span>
          <span className="text-muted-foreground">.dev</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#education" className="hover:text-white">Education</a>
          <a href="#resume" className="hover:text-white">Resume</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={RESUME_PDF}
            download="Vidhit_Valyal_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium text-silver backdrop-blur transition hover:border-electric hover:text-white"
          >
            <Download className="h-3.5 w-3.5 text-electric" />
            Resume PDF
          </a>
          <a
            href={TEL}
            className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium text-silver backdrop-blur transition hover:border-electric hover:text-white"
          >
            Let's talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-28">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-silver">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric" />
          Available for AI / ML &amp; Computer Vision internships
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient underline-offset-8 hover:underline"
          >
            Vidit Shashidhar Valyal
          </a>
          <span className="block text-white/90">| AI &amp; Data Science Engineer</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Engineering advanced solutions at the intersection of{" "}
          <span className="text-white">Computer Vision</span>,{" "}
          <span className="text-white">Machine Learning</span>, and{" "}
          <span className="text-white">Intelligent Automation</span>. Studying at NK Orchid
          College of Engineering and Technology (CGPA: 9.45 / 10.0).
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-silver backdrop-blur transition hover:border-electric hover:text-white"
          >
            <FileText className="h-4 w-4 text-electric" />
            Resume
          </a>
          <a
            href={TEL}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-silver backdrop-blur transition hover:border-electric hover:text-white"
          >
            <Phone className="h-4 w-4" />
            Contact Me
          </a>
        </div>

        {/* Stat strip */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            { k: "AI & DS", v: "Specialization" },
            { k: "3+", v: "Flagship Projects" },
            { k: "Python · SQL", v: "Core Stack" },
            { k: "Solapur, IN", v: "Based in" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-5">
              <div className="font-mono text-lg font-semibold text-white">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="01 — Work" title="Featured Projects" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-electric"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                  style={{
                    background:
                      p.accent === "electric"
                        ? "radial-gradient(400px circle at 50% 0%, color-mix(in oklab, var(--electric) 18%, transparent), transparent 60%)"
                        : "radial-gradient(400px circle at 50% 0%, color-mix(in oklab, var(--deep-purple) 22%, transparent), transparent 60%)",
                  }}
                />
                <div className="relative flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/50"
                    style={{
                      boxShadow: p.accent === "electric" ? "var(--shadow-glow)" : "var(--shadow-purple)",
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
                <h3 className="relative mt-6 text-xl font-semibold text-white">{p.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-secondary/40 px-2 py-1 font-mono text-[10px] text-silver"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SKILLS BENTO */}
      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="02 — Toolbox" title="Technical Skills & Domain Expertise" />
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          {/* Big card */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:col-span-3 md:row-span-2">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative flex items-center gap-3">
              <Brain className="h-5 w-5 text-electric" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Data Science & AI
              </span>
            </div>
            <h3 className="relative mt-6 text-2xl font-semibold text-white">
              Building models that learn, reason, and ship.
            </h3>
            <ul className="relative mt-8 grid grid-cols-2 gap-3 text-sm text-silver">
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Data Analytics",
                "Python",
                "SQL",
                "Predictive Modeling",
              ].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                  {x}
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Foundations */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:col-span-3">
            <div className="flex items-center gap-3">
              <Sigma className="h-5 w-5 text-deep-purple" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Engineering Foundations
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-silver">
              Advanced Computational Mathematics — Integration, Fourier Series, Differential
              Equations — plus Applied Physics and Systems Logic.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Integration", "Fourier", "Diff. Eq.", "Physics", "Systems Logic"].map((x) => (
                <span
                  key={x}
                  className="rounded-md border border-border bg-secondary/40 px-2 py-1 font-mono text-[10px] text-silver"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>

          {/* Dev tools */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:col-span-2">
            <Code2 className="h-5 w-5 text-electric" />
            <h4 className="mt-4 font-semibold text-white">Development Tools</h4>
            <p className="mt-2 text-xs text-muted-foreground">
              HTML · CSS · JS frameworks, Git, and modern data libraries.
            </p>
          </div>

          {/* Data libs */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
            <Database className="h-5 w-5 text-deep-purple" />
            <h4 className="mt-4 font-semibold text-white">Data Libraries</h4>
            <p className="mt-2 text-xs text-muted-foreground">Pandas · NumPy · scikit-learn</p>
          </div>

          {/* Automation */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
            <Workflow className="h-5 w-5 text-electric" />
            <h4 className="mt-4 font-semibold text-white">Automation</h4>
            <p className="mt-2 text-xs text-muted-foreground">Pipelines · Scripting · Ops</p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="03 — Academic Path" title="Education & Location" />
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid gap-0 md:grid-cols-[1fr_auto]">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-electric" />
                B.Tech in Artificial Intelligence &amp; Data Science · Expected 2029
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                N. K. Orchid College of Engineering &amp; Technology, Solapur
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Specialized engineering curriculum in <span className="text-white">AI, Machine Learning, and Computer Vision</span>{" "}
                integrated with computational mathematics and engineering systems logic.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="rounded-full border border-electric/50 bg-electric/10 px-3 py-1 font-mono text-[11px] font-semibold text-electric">
                  CGPA: 9.45 / 10.0
                </span>
                <span className="rounded-full border border-deep-purple/50 bg-deep-purple/10 px-3 py-1 font-mono text-[11px] text-silver">
                  Minor: Mechanical Engineering
                </span>
                <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] text-silver">
                  Graduation: 2029
                </span>
                <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] text-silver">
                  AI &amp; DS Major
                </span>
              </div>
            </div>
            <div
              className="flex items-center gap-3 border-t border-border p-8 md:border-l md:border-t-0"
              style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--deep-purple) 12%, transparent))" }}
            >
              <MapPin className="h-5 w-5 text-electric" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Based in</div>
                <div className="text-lg font-semibold text-white">Solapur, Maharashtra, India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESUME SECTION */}
      <section id="resume" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="04 — Credentials" title="Curriculum Vitae & Resume" />
          
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowPdfEmbed(!showPdfEmbed)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-mono text-silver transition hover:border-electric hover:text-white"
            >
              {showPdfEmbed ? <FileText className="h-4 w-4 text-electric" /> : <Eye className="h-4 w-4 text-electric" />}
              {showPdfEmbed ? "Structured View" : "View PDF Preview"}
            </button>
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-mono text-silver transition hover:border-deep-purple hover:text-white"
            >
              <ExternalLink className="h-4 w-4 text-deep-purple" />
              Open PDF
            </a>
            <a
              href={RESUME_PDF}
              download="Vidhit_Valyal_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-white transition hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>

        {showPdfEmbed ? (
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border bg-secondary/30 px-6 py-3">
              <div className="flex items-center gap-2 font-mono text-xs text-silver">
                <FileText className="h-4 w-4 text-electric" />
                <span>Vidhit_Valyal_Resume.pdf</span>
              </div>
              <a
                href={RESUME_PDF}
                download="Vidhit_Valyal_Resume.pdf"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-electric hover:underline"
              >
                <Download className="h-3.5 w-3.5" />
                Download file
              </a>
            </div>
            <iframe
              src={RESUME_PDF}
              title="Vidhit Valyal Resume"
              className="h-[780px] w-full border-0 bg-white"
            />
          </div>
        ) : (
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
            {/* Resume Header */}
            <div className="border-b border-border bg-gradient-to-r from-secondary/40 via-card to-secondary/40 p-8 md:p-10">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-electric">Resume · 2026 Profile</div>
                  <h3 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Vidhit Valyal
                  </h3>
                  <p className="mt-1 text-sm text-silver">
                    AI &amp; Data Science Undergraduate · Python &amp; Computer Vision Developer
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-silver">
                    <MapPin className="h-3.5 w-3.5 text-electric" />
                    Solapur, Maharashtra, India
                  </span>
                  <a
                    href={TEL}
                    className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-silver transition hover:border-electric hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5 text-electric" />
                    +91 7757875121
                  </a>
                  <a
                    href={MAILTO}
                    className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-silver transition hover:border-electric hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5 text-electric" />
                    {EMAIL}
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-silver transition hover:border-electric hover:text-white"
                  >
                    <Linkedin className="h-3.5 w-3.5 text-electric" />
                    LinkedIn
                  </a>
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-silver transition hover:border-electric hover:text-white"
                  >
                    <Github className="h-3.5 w-3.5 text-electric" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Career Objective */}
              <div className="mt-8 rounded-xl border border-electric/30 bg-electric/5 p-6 backdrop-blur">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-electric">
                  <User className="h-4 w-4" />
                  Career Objective
                </div>
                <p className="mt-3 text-sm leading-relaxed text-silver md:text-base">
                  AI &amp; Data Science undergraduate with hands-on experience in <span className="font-medium text-white">Python, computer vision, YOLO, OpenCV</span>, and AI-based application development. Currently strengthening Python and machine learning fundamentals through structured project-based learning. Developed <span className="font-medium text-white">SafeGuard AI</span>, an AI-powered vehicle accident detection and emergency response prototype integrating computer vision, voice verification, location services, and emergency communication. Seeking an internship in <span className="font-medium text-electric">AI/ML, Computer Vision, Python Development, or Data Science</span>.
                </p>
              </div>
            </div>

            {/* Resume Body */}
            <div className="grid gap-8 p-8 md:p-10">
              {/* Technical Skills */}
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <Code2 className="h-4 w-4 text-electric" />
                  Technical Skills
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Programming", items: ["Python", "C/C++"] },
                    { title: "AI & Computer Vision", items: ["YOLO", "OpenCV", "Computer Vision", "Pose Estimation", "Object Detection"] },
                    { title: "Data Science & ML", items: ["NumPy", "Pandas", "Basic Machine Learning"] },
                    { title: "Developer Tools", items: ["Git", "GitHub", "VS Code", "Linux / Ubuntu"] },
                    { title: "Frameworks & APIs", items: ["Tkinter", "REST APIs"] },
                  ].map((cat) => (
                    <div key={cat.title} className="rounded-xl border border-border bg-secondary/20 p-4">
                      <div className="font-mono text-xs text-electric">{cat.title}</div>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {cat.items.map((i) => (
                          <span key={i} className="rounded-md border border-border/80 bg-secondary/40 px-2 py-0.5 text-xs text-silver">
                            {i}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="border-t border-border pt-8">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-electric" />
                  Projects
                </div>

                <div className="mt-4 rounded-xl border border-border bg-secondary/20 p-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                    <h4 className="text-xl font-semibold text-white">
                      SafeGuard AI – AI-Powered Vehicle Accident Detection &amp; Emergency Response System
                    </h4>
                    <span className="font-mono text-xs text-electric">Featured Prototype</span>
                  </div>

                  <ul className="mt-4 space-y-2.5 text-sm text-silver">
                    {[
                      "Developed a Python-based AI safety prototype designed to detect potential vehicle accidents and initiate an automated emergency-response workflow.",
                      "Implemented YOLO-based object and pose detection with OpenCV for real-world visual analysis and rider-state assessment.",
                      "Designed a multi-stage accident verification workflow using movement, posture, and indicators to minimize false emergency alerts.",
                      "Integrated voice-based rider verification to determine whether the rider can respond following a suspected accident event.",
                      "Developed functional modules for location acquisition, hospital identification, emergency evidence generation, and automated communication.",
                      "Built a Tkinter-based live monitoring dashboard to track detection status, rider verification states, and emergency response workflows.",
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-electric" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border/60 pt-4 font-mono text-xs">
                    <span className="text-muted-foreground">Tech Stack:</span>
                    {["Python", "YOLO", "OpenCV", "Computer Vision", "Tkinter", "GNSS/GPS", "AI/ML"].map((t) => (
                      <span key={t} className="rounded-md border border-electric/30 bg-electric/10 px-2 py-0.5 text-[11px] text-electric">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education & Continuous Learning */}
              <div className="grid gap-6 border-t border-border pt-8 md:grid-cols-2">
                {/* Education Card */}
                <div className="rounded-xl border border-border bg-secondary/20 p-6">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    <GraduationCap className="h-4 w-4 text-electric" />
                    Education
                  </div>
                  <h4 className="mt-3 text-lg font-semibold text-white">
                    B.Tech in Artificial Intelligence &amp; Data Science
                  </h4>
                  <div className="text-sm text-silver">
                    N. K. Orchid College of Engineering &amp; Technology, Solapur
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono">
                    <span className="rounded-md border border-electric/40 bg-electric/10 px-2.5 py-1 font-semibold text-electric">
                      CGPA: 9.45 / 10.0
                    </span>
                    <span className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-silver">
                      Minor: Mechanical Engineering
                    </span>
                    <span className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-silver">
                      Expected: 2029
                    </span>
                  </div>
                </div>

                {/* Workshops & Learning */}
                <div className="rounded-xl border border-border bg-secondary/20 p-6">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    <Award className="h-4 w-4 text-deep-purple" />
                    Workshops &amp; Continuous Learning
                  </div>

                  <div className="mt-3 space-y-4 text-sm">
                    <div>
                      <div className="font-semibold text-white">
                        100 Days of Code: Python Learning Journey
                      </div>
                      <div className="font-mono text-xs text-deep-purple">Active Learner · 50+ Days Completed</div>
                      <p className="mt-1 text-xs text-silver">
                        Completed rigorous daily coding modules covering core Python programming, Object-Oriented Programming (OOP), file handling, APIs, and automation scripts.
                      </p>
                    </div>

                    <div>
                      <div className="font-semibold text-white">
                        National Intellectual Property Awareness Mission (NIPAM 2.0)
                      </div>
                      <div className="font-mono text-xs text-silver">Participant</div>
                      <p className="mt-1 text-xs text-silver">
                        Completed specialized workshop training focused on intellectual property rights, patents, and innovation frameworks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Let's build something intelligent
            </div>
            <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Have an idea worth engineering?
            </h3>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={TEL}
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
              >
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
              <a
                href={MAILTO}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-silver backdrop-blur transition hover:border-electric hover:text-white"
              >
                <Mail className="h-4 w-4 text-electric" />
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Connect</div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-silver transition hover:border-electric hover:text-white"
              >
                <Github className="h-4 w-4 text-electric" />
                <span className="font-mono">github.com/vidhit79</span>
                <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-silver transition hover:border-electric hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-electric" />
                <span className="font-mono">/in/vidhit-valyal</span>
                <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-silver transition hover:border-deep-purple hover:text-white"
              >
                <Instagram className="h-4 w-4 text-deep-purple" />
                <span className="font-mono">@buildwith_vidhit</span>
                <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="font-mono">
            © {new Date().getFullYear()} Vidhit Shashidhar Valyal — All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-mono">
            <Cpu className="h-3.5 w-3.5" />
            Built with intent · AI &amp; DS
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-electric" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        <span className="text-gradient">{title.split(" ")[0]}</span>{" "}
        {title.split(" ").slice(1).join(" ")}
      </h2>
    </div>
  );
}
