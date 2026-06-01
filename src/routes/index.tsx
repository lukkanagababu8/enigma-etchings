import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Shield, Terminal, Lock, Bug, Network, Code2, Database, Cpu,
  Github, Linkedin, Mail, Phone, ExternalLink, ChevronRight,
  Eye, ShieldCheck, Wifi, KeyRound, FileSearch, Server,
} from "lucide-react";
import portrait from "@/assets/nagababu.jpg";
import nptelCert from "@/assets/nptel-affective-computing.png.asset.json";
import datavalleyCert from "@/assets/datavalley-internship.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Nagababu Lukka — Cyber Security Portfolio" },
      { name: "description", content: "Portfolio of Nagababu Lukka, B.Tech Cyber Security student specializing in ethical hacking, vulnerability assessment, and network security." },
      { property: "og:title", content: "Nagababu Lukka — Cyber Security Portfolio" },
      { property: "og:description", content: "Cyber Security Student | Ethical Hacking Enthusiast" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" },
    ],
  }),
});

const skills = [
  { name: "Nmap", icon: Network, desc: "Network discovery & port scanning" },
  { name: "Burp Suite", icon: Bug, desc: "Web application security testing" },
  { name: "Wireshark", icon: Wifi, desc: "Packet analysis & sniffing" },
  { name: "Kali Linux", icon: Terminal, desc: "Pen-testing OS & toolkit" },
  { name: "Python", icon: Code2, desc: "Scripting & automation" },
  { name: "SQL", icon: Database, desc: "Databases & injection awareness" },
  { name: "Networking", icon: Server, desc: "TCP/IP, routing, protocols" },
];

const tools = [
  { name: "Metasploit", icon: ShieldCheck },
  { name: "John the Ripper", icon: KeyRound },
  { name: "Nikto", icon: FileSearch },
  { name: "Hydra", icon: Lock },
  { name: "OWASP ZAP", icon: Bug },
  { name: "Aircrack-ng", icon: Wifi },
  { name: "Hashcat", icon: Cpu },
  { name: "Recon-ng", icon: Eye },
];

const projects = [
  {
    title: "Network Scanning & Enumeration",
    desc: "Built a Python-orchestrated workflow using Nmap to map live hosts, fingerprint services, and identify exposed ports across a lab subnet. Generated risk-tiered reports highlighting misconfigured services.",
    tags: ["Nmap", "Python", "Recon"],
    icon: Network,
  },
  {
    title: "Web Application Security Basics",
    desc: "Performed OWASP Top 10 assessment on intentionally vulnerable apps (DVWA, bWAPP) using Burp Suite. Documented SQLi, XSS, and CSRF findings with remediation guidance.",
    tags: ["Burp Suite", "OWASP", "SQLi", "XSS"],
    icon: Bug,
  },
];

const certifications = [
  { title: "Python Full Stack Certification", issuer: "DataValley — 2-month Internship", icon: Code2 },
  { title: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", icon: ShieldCheck },
  { title: "Introduction to Cybersecurity", issuer: "Cisco", icon: Shield },
  { title: "Networking Fundamentals", issuer: "Cisco CCNA Track", icon: Network },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#tools", label: "Tools" },
    { href: "#projects", label: "Projects" },
    { href: "#certs", label: "Certs" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-neon">
          <Shield className="h-5 w-5" />
          <span className="font-mono-cyber text-sm">&gt; nagababu_</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-neon transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon px-4 py-1.5 mb-6 font-mono-cyber text-xs text-neon glow-sm animate-pulse-glow">
            <span className="h-2 w-2 rounded-full bg-neon animate-pulse" />
            SYSTEM ONLINE — ACCESS GRANTED
          </div>
          <p className="font-mono-cyber text-neon mb-4 animate-flicker">&gt; initializing_profile.exe</p>
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 animate-fade-up leading-[1.05]">
            NAGABABU <span className="text-neon block md:inline">LUKKA</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-4 font-mono-cyber animate-fade-up" style={{ animationDelay: "0.15s" }}>
            [ Cyber Security Student | Ethical Hacking Enthusiast ]
          </p>
          <p className="max-w-xl text-sm md:text-base text-muted-foreground/80 italic mb-8 mx-auto md:mx-0 animate-fade-up" style={{ animationDelay: "0.22s" }}>
            "Exploring the unseen side of technology — securing the future, one system at a time."
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 font-display font-bold text-primary-foreground glow hover:scale-105 transition-transform">
              View Projects
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-neon px-7 py-3 font-display font-bold text-neon hover:bg-primary/10 transition-colors">
              <Terminal className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <TiltPortrait />
        </div>
      </div>
    </section>
  );
}

function TiltPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, mx: 50, my: 50, active: false });

  useEffect(() => {
    let raf = 0;
    let a = 0;
    const loop = () => {
      a += 0.012;
      setT(prev => prev.active ? prev : { rx: Math.sin(a) * 5, ry: Math.cos(a) * 7, mx: 50 + Math.cos(a) * 12, my: 50 + Math.sin(a) * 12, active: false });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setT({ ry: (px - 0.5) * 26, rx: -(py - 0.5) * 26, mx: px * 100, my: py * 100, active: true });
  };
  const onLeave = () => setT(s => ({ ...s, active: false }));

  return (
    <div className="[perspective:1200px] animate-fade-up" style={{ animationDelay: "0.1s" }}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] md:w-[360px] md:h-[480px] [transform-style:preserve-3d] will-change-transform"
        style={{ transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`, transition: t.active ? "transform 0.08s linear" : "transform 0.4s ease-out" }}
      >
        <div className="absolute -inset-6 rounded-3xl bg-primary/30 blur-3xl opacity-60 animate-pulse-glow" style={{ transform: "translateZ(-60px)" }} />
        <div className="absolute -inset-2 rounded-3xl border border-neon/40" style={{ transform: "translateZ(20px)" }} />
        <div className="absolute -inset-4 rounded-3xl border border-neon/15" style={{ transform: "translateZ(40px)" }} />
        <div className="relative h-full w-full rounded-2xl overflow-hidden border border-neon/60 glow bg-card">
          <img src={portrait} alt="Nagababu Lukka" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 mix-blend-screen opacity-50 pointer-events-none"
            style={{ background: `radial-gradient(circle at ${t.mx}% ${t.my}%, oklch(0.78 0.20 230 / 0.55), transparent 55%)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(transparent 50%, oklch(0.75 0.18 230 / 0.10) 50%)",
            backgroundSize: "100% 4px",
          }} />
          {["top-2 left-2 border-t-2 border-l-2","top-2 right-2 border-t-2 border-r-2","bottom-2 left-2 border-b-2 border-l-2","bottom-2 right-2 border-b-2 border-r-2"].map(c => (
            <span key={c} className={`absolute ${c} border-neon w-6 h-6 rounded-sm`} />
          ))}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/95 to-transparent">
            <p className="font-mono-cyber text-[10px] text-neon flex justify-between">
              <span>ID://NAGABABU.LUKKA</span>
              <span className="animate-pulse">● LIVE</span>
            </p>
            <p className="font-mono-cyber text-[10px] text-muted-foreground">CLEARANCE: ETHICAL_HACKER</p>
          </div>
        </div>
        <span className="absolute top-6 -left-4 rounded-md bg-card/90 border border-neon px-2 py-1 font-mono-cyber text-[10px] text-neon glow-sm" style={{ transform: "translateZ(70px)" }}>
          &lt;/secure&gt;
        </span>
        <span className="absolute bottom-20 -right-4 rounded-md bg-card/90 border border-neon px-2 py-1 font-mono-cyber text-[10px] text-neon glow-sm" style={{ transform: "translateZ(70px)" }}>
          root@kali
        </span>
      </div>
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="font-mono-cyber text-neon text-sm mb-2">// {eyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">{title}</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary glow-sm" />
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="whoami" title="About Me">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="relative rounded-xl border border-neon/40 bg-card p-3 glow-sm overflow-hidden group">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
              <img src={portrait} alt="Nagababu Lukka" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(transparent 50%, oklch(0.75 0.18 230 / 0.08) 50%)", backgroundSize: "100% 4px" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <p className="mt-4 text-center font-mono-cyber text-xs text-muted-foreground">
              <span className="text-neon">root@nagababu</span>:~$ status: <span className="text-neon">final_year_btech</span>
            </p>
          </div>
        </div>
        <div className="md:col-span-2 space-y-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate <span className="text-neon font-semibold">final-year B.Tech Cyber Security student</span> at
            <span className="text-neon"> A.M. Reddy Memorial College of Engineering &amp; Technology</span>,
            driven by a love for ethical hacking, vulnerability assessment, and network security. I love
            breaking systems down to understand how they really work — and then helping make them safer.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I recently completed a <span className="text-neon font-semibold">2-month internship at DataValley</span> on
            Python Full Stack development, and I love building projects that merge creativity and security —
            from network reconnaissance scripts to web application security testing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {["Quick Learner", "Self-Motivated", "Problem Solver", "Team Player"].map(s => (
              <div key={s} className="rounded-lg border border-neon/30 bg-card/50 p-3 text-center">
                <p className="font-mono-cyber text-xs text-neon">{s}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { k: "College", v: "A.M. Reddy MCET" },
              { k: "Year", v: "Final / B.Tech" },
              { k: "CGPA", v: "7.0" },
            ].map(s => (
              <div key={s.k} className="rounded-lg border border-border bg-card/50 p-4">
                <p className="font-mono-cyber text-xs text-neon">{s.k}</p>
                <p className="mt-1 font-display font-bold">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="cat skills.json" title="Technical Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map(s => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-neon hover:-translate-y-1 hover:glow"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-neon group-hover:animate-pulse-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Tools() {
  return (
    <Section id="tools" eyebrow="ls /opt/security" title="Cyber Security Tools">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {tools.map(t => {
          const Icon = t.icon;
          return (
            <div
              key={t.name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-neon hover:glow-sm"
            >
              <Icon className="h-9 w-9 text-neon transition-transform group-hover:scale-110" />
              <span className="font-mono-cyber text-sm">{t.name}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="./projects --list" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => {
          const Icon = p.icon;
          return (
            <article
              key={p.title}
              className="scanline relative overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:border-neon hover:glow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-lg bg-primary/15 p-3 text-neon">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-mono-cyber text-xs text-muted-foreground">[ project ]</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full border border-neon/40 px-3 py-1 text-xs font-mono-cyber text-neon">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certs" eyebrow="cat certs/" title="Certifications">
      <article className="group relative mb-8 overflow-hidden rounded-2xl border border-neon/40 bg-card glow-sm transition-all hover:border-neon hover:glow">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-3 relative overflow-hidden bg-background/50">
            <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-neon bg-background/80 px-3 py-1 font-mono-cyber text-[10px] text-neon glow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" /> ELITE
            </div>
            <img
              src={nptelCert.url}
              alt="NPTEL Elite Certificate — Affective Computing"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(transparent 50%, oklch(0.75 0.18 230 / 0.06) 50%)", backgroundSize: "100% 4px" }} />
          </div>
          <div className="md:col-span-2 p-7 flex flex-col justify-center">
            <p className="font-mono-cyber text-xs text-neon mb-2">// featured_certification</p>
            <h3 className="text-xl md:text-2xl font-display font-bold mb-2 leading-tight">
              NPTEL Elite Certificate <span className="text-neon">— Affective Computing</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Successfully completed the Affective Computing course and earned <span className="text-neon">Elite</span> certification with a score of 75%.
            </p>
            <div className="grid grid-cols-3 gap-2 mb-5">
              <div className="rounded-lg border border-border bg-background/40 p-2 text-center">
                <p className="font-mono-cyber text-[10px] text-muted-foreground">ORG</p>
                <p className="font-display font-bold text-sm text-neon">NPTEL</p>
              </div>
              <div className="rounded-lg border border-border bg-background/40 p-2 text-center">
                <p className="font-mono-cyber text-[10px] text-muted-foreground">DURATION</p>
                <p className="font-display font-bold text-sm">12 Weeks</p>
              </div>
              <div className="rounded-lg border border-border bg-background/40 p-2 text-center">
                <p className="font-mono-cyber text-[10px] text-muted-foreground">SCORE</p>
                <p className="font-display font-bold text-sm text-neon">75%</p>
              </div>
            </div>
            <p className="font-mono-cyber text-[11px] text-muted-foreground mb-5">Jan 2026 – Apr 2026 · IIIT Delhi · IIT Madras</p>
            <a
              href={nptelCert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 font-display font-bold text-primary-foreground glow hover:scale-105 transition-transform"
            >
              <ExternalLink className="h-4 w-4" />
              View Certificate
            </a>
          </div>
        </div>
      </article>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map(c => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-neon hover:-translate-y-1 hover:glow-sm"
            >
              <Icon className="h-10 w-10 text-neon mx-auto mb-4" />
              <h3 className="font-display font-bold mb-2">{c.title}</h3>
              <p className="text-xs font-mono-cyber text-muted-foreground">{c.issuer}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: "lukkanagababu81@gmail.com", href: "mailto:lukkanagababu81@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8125412477", href: "tel:+918125412477" },
    { icon: Github, label: "GitHub", value: "lukkanagababu8", href: "https://github.com/lukkanagababu8" },
    { icon: Linkedin, label: "LinkedIn", value: "nagababu-lukka", href: "https://linkedin.com/in/nagababu-lukka29bb02394" },
  ];
  return (
    <Section id="contact" eyebrow="establish_connection()" title="Get In Touch">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-xl border border-border bg-card p-8 glow-sm">
          <p className="font-mono-cyber text-neon text-sm mb-6">
            &gt; Open to internships, collaborations, and CTF teams.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map(it => {
              const Icon = it.icon;
              const external = it.href.startsWith("http");
              return (
                <a
                  key={it.label}
                  href={it.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-background/50 p-4 transition-all hover:border-neon hover:glow-sm"
                >
                  <div className="rounded-lg bg-primary/15 p-3 text-neon">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono-cyber text-muted-foreground">{it.label}</p>
                    <p className="font-medium truncate">{it.value}</p>
                  </div>
                  {external && <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-neon" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono-cyber text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nagababu Lukka — <span className="text-neon">stay_secure();</span>
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/lukkanagababu8" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/nagababu-lukka29bb02394" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:lukkanagababu81@gmail.com" className="text-muted-foreground hover:text-neon transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
