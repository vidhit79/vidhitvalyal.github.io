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
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const LINKEDIN = "https://www.linkedin.com/in/vidhit-valyal-701880379?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const INSTAGRAM = "https://www.instagram.com/buildwith_vidhit?igsh=MXR0MXB1N3A3MWoweA==";
const PHONE = "+91 7757875121";
const TEL = "tel:+917757875121";

const projects = [
  {
    icon: ShieldCheck,
    title: "Smart AI Safety App",
    tag: "AI / ML",
    description:
      "Intelligent monitoring platform with real-time data analysis and predictive safety protocols that flag risk before it escalates.",
    stack: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
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
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href={TEL}
          className="hidden rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium text-silver backdrop-blur transition hover:border-electric hover:text-white md:inline-flex"
        >
          Let's talk
        </a>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-28">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-silver">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric" />
          Available for AI / ML collaborations
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
          <span className="text-white">Data Science</span>,{" "}
          <span className="text-white">Machine Learning</span>, and{" "}
          <span className="text-white">Intelligent Automation</span>. Studying at NK Orchid
          College of Engineering and Technology.
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
                Bachelor of Engineering · Ongoing
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                NK Orchid College of Engineering and Technology
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Specialized path in <span className="text-white">Artificial Intelligence &amp; Data Science</span>{" "}
                engineering — a curriculum tuned for modern ML systems, computational math, and
                applied automation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["AI & DS Major", "ML Focus", "Computational Math", "Applied Physics"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-silver"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="flex items-center gap-3 border-t border-border p-8 md:border-l md:border-t-0"
              style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--deep-purple) 12%, transparent))" }}
            >
              <MapPin className="h-5 w-5 text-electric" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Based in</div>
                <div className="text-lg font-semibold text-white">Solapur, India</div>
              </div>
            </div>
          </div>
        </div>
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
            <a
              href={TEL}
              className="mt-6 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Socials</div>
            <div className="flex flex-col gap-3 md:items-end">
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
            © {new Date().getFullYear()} Vidit Shashidhar Valyal — All rights reserved.
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
