import SiteAnimations from "@/components/SiteAnimations";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MoveUpRight, Terminal, Layers3, Cpu, Braces, Database, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    category: "OPEN SOURCE / DEVELOPER TOOLS",
    title: "AuthWarden",
    description:
      "An open-source authentication toolkit for FastAPI, designed to simplify secure authentication workflows and give developers flexible building blocks.",
    stack: ["Python", "FastAPI", "Authentication", "Open Source"],
    href: "https://timihack.github.io/authwarden/",
    symbol: "AW",
    tone: "orange",
  },
];

const capabilities: { icon: ReactNode; index: string; title: string; description: string; tools: string }[] = [
  { icon: <Braces size={25}/>, index: "01", title: "Backend engineering", description: "Reliable APIs, authentication, integrations and scalable application architecture.", tools: "FASTAPI / DJANGO / NESTJS" },
  { icon: <Cpu size={25}/>, index: "02", title: "AI & intelligent systems", description: "Practical AI integrations, ML workflows, retrieval systems and automation.", tools: "PYTHON / PYTORCH / ML" },
  { icon: <Layers3 size={25}/>, index: "03", title: "Product development", description: "From idea to polished interface, with a focus on maintainable products.", tools: "REACT / NEXT.JS / TYPESCRIPT" },
  { icon: <Database size={25}/>, index: "04", title: "Infrastructure & delivery", description: "Data systems, containers, deployment pipelines and engineering operations.", tools: "POSTGRESQL / DOCKER / CI/CD" }
];

const experience = [
  { role: "Backend Engineer", organization: "Ibadan Digital Academy", dates: "", description: "Backend engineering across products including Ajoti, DigitalBridge, TradePadi and StitchPro — working on APIs, application services, integrations and delivery." },
  { role: "Backend Developer", organization: "AI video & education platform", dates: "2025", description: "Backend architecture and AI-powered processing, search and automation workflows." },
  { role: "Backend Developer", organization: "DVCSSS", dates: "2025", description: "AI-assisted learning systems, existing-system modernization and application deployment." },
  { role: "Backend Developer · Contract", organization: "Davak Consult", dates: "2025", description: "Education and career platform services, authentication and administrative tooling." },
];

function BrandMark({ small = false }: { small?: boolean }) {
  return <span className={`brand-lockup ${small ? "brand-lockup-small" : ""}`}><Image src="/timihack-mark.svg" width={39} height={39} alt="TIMIHACK monogram" priority={!small}/><span>TIMIHACK<span className="brand-period">.</span></span></span>;
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description?: string }) {
  return <div className="section-top"><div><div className="eyebrow"><span className="eyebrow-dash"/>{eyebrow}</div><h2 className="section-title">{title}</h2></div>{description && <p className="section-description">{description}</p>}</div>;
}

export default function Home() {
  return <>
    <SiteAnimations />
    <div className="page-shell" id="top">
      <header className="site-header"><div className="container header-inner"><a href="#top" className="logo-link" aria-label="TIMIHACK home"><BrandMark/></a><nav className="desktop-nav" aria-label="Primary navigation"><a href="#about">About</a><a href="#work">Selected work</a><a href="#expertise">Expertise</a><a href="#experience">Experience</a></nav><a className="nav-cta" href="mailto:timihack.it@gmail.com">Let&apos;s talk <ArrowUpRight size={16}/></a></div></header>
      <main>
        <div className="stack-panel stack-panel-hero"><section className="hero container" aria-labelledby="hero-title"><div className="hero-copy"><div className="hero-status"><span className="status-dot"/> BACKEND ENGINEER <span className="status-divider">/</span> AI ENGINEER</div><h1 id="hero-title">Engineering<br/><span>what matters</span><span className="orange-dot">.</span></h1><p className="hero-summary">I&apos;m Adeniran John — a software engineer building dependable backend systems, intelligent products and tools that solve real problems.</p><div className="hero-actions"><a className="button button-orange" href="#work">Explore my work <ArrowUpRight size={18}/></a><a className="button button-outline" href="https://github.com/timihack" target="_blank" rel="noopener noreferrer"><Github size={18}/> View GitHub</a></div><div className="hero-bottom"><span>BASED IN NIGERIA · BUILDING FOR EVERYWHERE</span><a href="#about" aria-label="Scroll to about"><ArrowDownRight size={23}/></a></div></div><div className="hero-art" aria-hidden="true"><div className="art-grid"/><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="hero-mono"><span className="mono-top"/><span className="mono-left"/><span className="mono-right"/></div><div className="art-note art-note-top">FIG / 001 <span>DESIGNED TO BUILD</span></div><div className="art-note art-note-bottom">STRUCTURE <span>→</span> INTELLIGENCE</div><span className="art-corner art-corner-one"/><span className="art-corner art-corner-two"/></div></section>
        <div className="ticker" aria-hidden="true"><div className="container ticker-inner"><span>BUILD.</span><span>EXPLORE.</span><span>SOLVE.</span><span className="ticker-star">✳</span><span>BACKEND</span><span>AI SYSTEMS</span><span>OPEN SOURCE</span></div></div></div>
        <div className="stack-panel stack-panel-about"><section className="section container about-section" id="about"><div className="about-index">[ 01 / ABOUT ]</div><div className="about-main"><div className="eyebrow"><span className="eyebrow-dash"/> THE THINKING BEHIND THE CODE</div><h2 className="about-statement">Technology should do more than <em>look impressive.</em> It should work beautifully, scale thoughtfully, and make things better.</h2><div className="about-bottom"><p>I work across backend engineering, artificial intelligence and product development. I care about architecture, practical problem-solving and the details that turn an idea into dependable software.</p><a className="text-link" href="mailto:timihack.it@gmail.com">Start a conversation <ArrowUpRight size={19}/></a></div></div></section></div>
        <section className="section work-section stack-panel stack-panel-work" id="work"><div className="container"><SectionHeading eyebrow="02 / FEATURED PROJECTS" title={<>Selected <span className="title-muted">work.</span></>} description="AuthWarden — an open-source toolkit built to make authentication in FastAPI easier to implement and maintain."/><div className="projects-grid">{projects.map(p=><article className="project-card" key={p.number}><div className={`project-visual visual-${p.tone}`}><span className="project-visual-label">TIMIHACK / {p.number}</span><div className="project-symbol">{p.symbol}</div><span className="project-visual-bottom">ENGINEERED WITH INTENT <ArrowUpRight size={15}/></span></div><div className="project-info"><div className="project-meta">{p.category}<span>{p.number} / {String(projects.length).padStart(2, "0")}</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="tag-row">{p.stack.map(s=><span key={s}>{s}</span>)}</div>{p.href && <a className="project-link" href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} documentation`}><ExternalLink size={18}/></a>}</div></article>)}</div><a className="all-work" href="https://github.com/timihack?tab=repositories" target="_blank" rel="noopener noreferrer">Explore more on GitHub <ArrowRight size={19}/></a></div></section>
        <section className="section expertise-section stack-panel stack-panel-expertise" id="expertise"><div className="container"><SectionHeading eyebrow="03 / WHAT I DO" title={<>Areas of <span className="title-muted">expertise.</span></>} description="A combination of systems thinking, experimentation and hands-on engineering."/><div className="capability-grid">{capabilities.map(c=><article className="capability-card" key={c.index}><div className="capability-heading"><span>{c.index} / 04</span><span className="capability-icon">{c.icon}</span></div><h3>{c.title}</h3><p>{c.description}</p><div className="capability-tools"><Terminal size={14}/>{c.tools}</div></article>)}</div></div></section>
        <div className="stack-panel stack-panel-experience"><section className="section experience-section container" id="experience"><SectionHeading eyebrow="04 / THE JOURNEY" title={<>Experience <span className="title-muted">& impact.</span></>} description="Working on useful software, collaborating with teams and contributing to the developer ecosystem."/><div className="experience-list">{experience.map((e,i)=><div className="experience-row" key={e.organization}><span className="experience-num">0{i+1}</span><div className="experience-role"><h3>{e.role}</h3><p>{e.organization}</p></div><p className="experience-detail">{e.description}</p><span className="experience-date">{e.dates || ""}</span></div>)}</div></section></div>
        <section className="contact-section stack-panel stack-panel-contact" id="contact"><div className="container contact-inner"><div className="eyebrow"><span className="eyebrow-dash"/> 05 / HAVE SOMETHING IN MIND?</div><div className="contact-heading"><h2>Let&apos;s build<br/><em>something real.</em></h2><a href="mailto:timihack.it@gmail.com" className="contact-arrow" aria-label="Email TIMIHACK"><MoveUpRight size={46}/></a></div><p>Interesting problem? Ambitious product? Open-source idea?<br/>I&apos;m always interested in meaningful engineering conversations.</p><a className="contact-email" href="mailto:timihack.it@gmail.com">timihack.it@gmail.com <ArrowUpRight size={20}/></a></div></section>
      </main><footer className="footer"><div className="container footer-inner"><div><a href="#top" aria-label="Back to top"><BrandMark small/></a><p>Building thoughtfully. Shipping deliberately.</p></div><div className="footer-links"><a href="https://github.com/timihack" target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub</a><a href="https://www.linkedin.com/in/timihack" target="_blank" rel="noopener noreferrer"><Linkedin size={17}/> LinkedIn</a><a href="mailto:timihack.it@gmail.com"><Mail size={17}/> Email</a></div><div className="footer-credit">© {new Date().getFullYear()} TIMIHACK <span>BACK TO TOP ↑</span></div></div></footer>
    </div>
  </>;
}
