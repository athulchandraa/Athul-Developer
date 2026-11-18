"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import Navbar from "./navbar";
import { portfolioConfig, projects, skills } from "../data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
      <h2 className="section-title">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description && <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">{description}</p>}
    </Reveal>
  );
}

function ConfigLink({ href, children, className = "", label }) {
  if (!href) {
    return (
      <span className={`${className} cursor-not-allowed opacity-45`} aria-label={`${label} link not configured`}>
        {children}
      </span>
    );
  }
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual project-visual-${type}`}>
      <div className="visual-window">
        <div className="visual-toolbar"><i /><i /><i /><span /></div>
        {type === "civics" && (
          <div className="civics-preview">
            <div className="preview-sidebar"><b /><i /><i /><i /><i /></div>
            <div className="preview-content">
              <span className="preview-kicker">CITIZEN PORTAL</span>
              <b className="preview-heading">Governance,<br />within reach.</b>
              <div className="preview-metrics"><i /><i /><i /></div>
              <div className="preview-line" />
              <div className="preview-line short" />
            </div>
          </div>
        )}
        {type === "ride" && (
          <div className="ride-preview">
            <div className="map-roads"><i /><i /><i /><i /><b /></div>
            <div className="ride-card"><span>YOUR RIDE</span><b>Arriving in 4 min</b><i /></div>
            <div className="map-pin"><MapPin size={14} /></div>
          </div>
        )}
        {type === "visit" && (
          <div className="visit-preview">
            <div className="visit-panel"><span>VISITOR PASS</span><b>Welcome,<br />Guest</b><div className="qr-grid"><i /><i /><i /><i /></div><small>SCAN TO CHECK IN</small></div>
            <div className="visit-list"><b>Today&apos;s visits</b><i /><i /><i /></div>
          </div>
        )}
      </div>
      <span className="visual-orbit" />
      <span className="visual-glow" />
    </div>
  );
}

function ProjectCard({ project, index }) {
  const urls = portfolioConfig.projects[project.id];
  return (
    <motion.article
      className="project-card group"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <ProjectVisual type={project.visual} />
      <div className="p-6 md:p-7">
        <div className="mb-3 flex items-center justify-between">
          <span className="eyebrow !mb-0 !text-[10px]">{project.category}</span>
          <span className="font-mono text-xs text-slate-600">{project.number}</span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-white">{project.name}</h3>
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span className="tech-chip" key={technology}>{technology}</span>
          ))}
        </div>
        <div className="mt-6 flex gap-3 border-t border-white/[0.07] pt-5">
          <ConfigLink href={urls.live} label={`View ${project.name} project`} className="project-action">
            View Project <ArrowUpRight size={14} />
          </ConfigLink>
          <ConfigLink href={urls.github} label={`${project.name} GitHub repository`} className="project-action">
            <Github size={14} /> GitHub
          </ConfigLink>
        </div>
      </div>
    </motion.article>
  );
}

function Hero() {
  const roles = ["Full Stack Developer", "MERN Stack Developer", "Creative Builder"];
  return (
    <section id="home" className="hero-section relative flex min-h-screen items-center overflow-hidden">
      <div className="hero-grid" />
      <div className="hero-ambient hero-ambient-one" />
      <div className="hero-ambient hero-ambient-two" />
      <div className="section-wrap relative z-10 grid items-center gap-12 pb-20 pt-32 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:pt-24">
        <div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="hero-badge"><span /> FULL STACK <i>/</i> MERN</p>
          </motion.div>
          <motion.p
            className="mb-3 mt-8 font-mono text-sm tracking-[0.18em] text-slate-400"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            HELLO, I&apos;M
          </motion.p>
          <motion.h1
            className="max-w-3xl text-[clamp(3.6rem,10vw,7.3rem)] font-semibold leading-[0.92] tracking-[-0.075em] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            ATHUL <span className="gradient-text">C</span><span className="text-accent">.</span>
          </motion.h1>
          <motion.div
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-slate-300 md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <span className="text-accent">✳</span>
            <span className="role-rotator" aria-label="Full Stack Developer, MERN Stack Developer, Creative Builder">
              {roles.map((role, index) => <span key={role} style={{ "--role-index": index }}>{role}</span>)}
            </span>
          </motion.div>
          <motion.p
            className="mt-5 max-w-lg text-base leading-7 text-slate-400 md:text-lg md:leading-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6 }}
          >
            Building modern, scalable and user-focused web applications.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.6 }}
          >
            <a href="#projects" className="button-primary">View My Projects <ArrowDownRight size={16} /></a>
            <ConfigLink href={portfolioConfig.resume} label="Download resume" className="button-outline">
              Download Resume <ArrowDown size={15} />
            </ConfigLink>
          </motion.div>
          <motion.div
            className="mt-10 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.68, duration: 0.5 }}
          >
            <span className="mr-1 text-xs text-slate-500">FIND ME ON</span>
            <ConfigLink href={portfolioConfig.github} label="GitHub" className="social-icon"><Github size={16} /></ConfigLink>
            <ConfigLink href={portfolioConfig.linkedIn} label="LinkedIn" className="social-icon"><Linkedin size={16} /></ConfigLink>
            <ConfigLink href={portfolioConfig.email ? `mailto:${portfolioConfig.email}` : ""} label="Email" className="social-icon"><Mail size={16} /></ConfigLink>
          </motion.div>
        </div>
        <motion.div
          className="hero-art-wrap relative mx-auto w-full max-w-[500px]"
          initial={{ opacity: 0, scale: 0.92, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-art">
            <div className="art-ring art-ring-one" />
            <div className="art-ring art-ring-two" />
            <div className="art-ring art-ring-three" />
            <div className="art-core">
              <div className="core-shine" />
              <Code2 size={54} strokeWidth={1.2} />
            </div>
            <div className="float-card float-card-code"><span className="float-dot" /> <code>&lt;build /&gt;</code></div>
            <div className="float-card float-card-stack"><Sparkles size={14} /><span>Ideas into impact</span></div>
            <div className="orbit-point point-one" />
            <div className="orbit-point point-two" />
          </div>
          <div className="hero-art-caption"><span>DESIGN</span><i /> <span>DEVELOP</span><i /> <span>DELIVER</span></div>
        </motion.div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about section"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></a>
    </section>
  );
}

function About() {
  const stats = [
    { number: "2025", label: "BCA Graduate" },
    { number: "MERN", label: "Full Stack Focus" },
    { number: "03", label: "Featured Projects" },
  ];
  return (
    <section id="about" className="section-pad">
      <div className="section-wrap">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious mind." highlight="Practical maker." />
        <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:gap-20">
          <Reveal>
            <p className="text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              I&apos;m a <span className="text-white">BCA graduate</span> and MERN Stack developer who enjoys turning thoughtful ideas into useful digital experiences.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              My foundation in computer applications and hands-on internship experience have shaped my interest in full-stack development and modern web technologies. I&apos;m passionate about building practical applications, learning by doing, and solving real-world problems with clean, considered code.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-3 gap-3 sm:gap-4" delay={0.1}>
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <span className="gradient-text font-mono text-2xl font-semibold sm:text-3xl">{stat.number}</span>
                <span className="mt-3 text-xs leading-5 text-slate-400 sm:text-sm">{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
        <Reveal className="mt-12 grid gap-4 md:grid-cols-2" delay={0.1}>
          <div className="credential-card">
            <span className="credential-icon"><GraduationCap size={19} /></span>
            <div><p className="text-sm font-medium text-white">BCA Graduate</p><p className="mt-1 text-xs text-slate-400">University of Kerala</p></div>
            <ArrowUpRight size={15} className="ml-auto text-slate-600" />
          </div>
          <div className="credential-card">
            <span className="credential-icon"><BriefcaseBusiness size={18} /></span>
            <div><p className="text-sm font-medium text-white">MERN Stack Internship</p><p className="mt-1 text-xs text-slate-400">Luminar Technolab · Kochi</p></div>
            <ArrowUpRight size={15} className="ml-auto text-slate-600" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-pad section-tint">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="MY TOOLKIT"
          title="Tools for turning"
          highlight="ideas into reality."
          description="A growing set of technologies I use to design, build, and ship thoughtful web experiences."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => (
            <Reveal key={category} delay={index * 0.08}>
              <div className="skill-card h-full">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-white">{category}</h3>
                  <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      className="skill-chip"
                      whileHover={{ y: -3, borderColor: "rgba(139, 123, 255, .5)", color: "#fff" }}
                      transition={{ duration: 0.18 }}
                      style={{ transitionDelay: `${itemIndex * 12}ms` }}
                    >
                      <span className="skill-chip-dot" />{item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="A few things"
          highlight="I’ve built."
          description="Real-world ideas, thoughtfully shaped into useful products. A selection of projects from my journey so far."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-pad section-tint">
      <div className="section-wrap">
        <SectionHeading eyebrow="THE JOURNEY SO FAR" title="Learning by" highlight="building." />
        <div className="timeline">
          <Reveal className="timeline-entry">
            <span className="timeline-marker"><BriefcaseBusiness size={16} /></span>
            <article className="timeline-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="eyebrow !mb-2">INTERNSHIP</p>
                  <h3 className="text-xl font-semibold text-white">MERN Stack Intern</h3>
                  <p className="mt-1 text-sm text-slate-400">Luminar Technolab <span className="text-slate-600">·</span> Kochi</p>
                </div>
                <span className="timeline-date">{portfolioConfig.internshipDuration || "Duration to be added"}</span>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                {portfolioConfig.internshipResponsibilities || "Add your responsibilities and achievements here."}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["MongoDB", "Express.js", "React.js", "Node.js"].map((item) => <span className="tech-chip" key={item}>{item}</span>)}
              </div>
            </article>
          </Reveal>
          <Reveal className="timeline-entry" delay={0.08}>
            <span className="timeline-marker"><GraduationCap size={16} /></span>
            <article className="timeline-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="eyebrow !mb-2">EDUCATION</p>
                  <h3 className="text-xl font-semibold text-white">Bachelor of Computer Applications</h3>
                  <p className="mt-1 text-sm text-slate-400">Carmel College, Muhamma <span className="text-slate-600">·</span> University of Kerala</p>
                </div>
                <span className="timeline-date">2022 — 2025</span>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                Built a strong foundation in computer science, programming, and application development.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!portfolioConfig.email) {
      setStatus("Add your email in data/portfolio.js to enable this form.");
      return;
    }
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(`${formData.get("message")}\n\nReply to: ${formData.get("email")}`);
    window.location.href = `mailto:${portfolioConfig.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  }

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="section-wrap">
        <SectionHeading eyebrow="LET’S CONNECT" title="Have something" highlight="in mind?" description="A project, an opportunity, or just a good conversation — my inbox is open." />
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <h3 className="text-2xl font-semibold tracking-tight text-white">Let&apos;s make it<br /><span className="gradient-text">happen.</span></h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">I&apos;m always interested in meaningful projects and opportunities to grow. Reach out and let&apos;s start a conversation.</p>
            <div className="mt-8 space-y-3">
              <ConfigLink href={portfolioConfig.email ? `mailto:${portfolioConfig.email}` : ""} label="Email Athul" className="contact-link">
                <span className="contact-link-icon"><Mail size={17} /></span>
                <span><small>EMAIL</small><b>{portfolioConfig.email || "Add email in portfolio config"}</b></span>
                <ArrowUpRight size={15} className="ml-auto text-slate-500" />
              </ConfigLink>
              <ConfigLink href={portfolioConfig.linkedIn} label="LinkedIn profile" className="contact-link">
                <span className="contact-link-icon"><Linkedin size={17} /></span>
                <span><small>LINKEDIN</small><b>{portfolioConfig.linkedIn ? "Connect with me" : "Add LinkedIn in portfolio config"}</b></span>
                <ArrowUpRight size={15} className="ml-auto text-slate-500" />
              </ConfigLink>
              <ConfigLink href={portfolioConfig.github} label="GitHub profile" className="contact-link">
                <span className="contact-link-icon"><Github size={17} /></span>
                <span><small>GITHUB</small><b>{portfolioConfig.github ? "Explore my work" : "Add GitHub in portfolio config"}</b></span>
                <ArrowUpRight size={15} className="ml-auto text-slate-500" />
              </ConfigLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="form-field"><span>Your name</span><input name="name" placeholder="Jane Smith" required /></label>
                <label className="form-field"><span>Email address</span><input name="email" type="email" placeholder="jane@example.com" required /></label>
              </div>
              <label className="form-field mt-4"><span>What&apos;s on your mind?</span><textarea name="message" rows="5" placeholder="Tell me a little about it..." required /></label>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button className="button-primary" type="submit">Send a message <Send size={15} /></button>
                {status && <p role="status" className="text-xs leading-5 text-slate-400">{status}</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-white/[0.06] py-7">
        <div className="section-wrap flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <a href="#home" className="font-mono tracking-tight text-slate-300">ATHUL<span className="text-accent">.</span>C</a>
          <p>Designed & built with intention <span className="text-accent">✳</span></p>
          <a href="#home" className="inline-flex items-center gap-2 transition hover:text-white">Back to top <ArrowRight size={13} className="-rotate-90" /></a>
        </div>
      </footer>
    </>
  );
}
