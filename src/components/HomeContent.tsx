'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { projects } from '@/data/projects'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react'

const experiences = [
  {
    company: 'TV2Z',
    website: 'https://tv2z.com/',
    role: 'Software Engineer II',
    period: 'Jan 2026 — Present',
    summary: 'Building core systems for an OTT streaming platform across discovery, playback continuity, subscriber access and content operations.',
    stack: ['Node.js', 'MySQL', 'Redis', 'Laravel'],
    points: [
      'Built the platform search and suggestion system from scratch.',
      'Replaced full S3 electronic programme guide (EPG) file downloads with an API returning only the requested channels and time window, reducing the amount of data viewers need to download.',
      'Diagnosed EPG connection overhead (~200 ms per request versus ~68 ms of app work) and fixed connection reuse across Node.js, nginx and CloudFront.',
      'Built Continue Watching so viewers can return to unfinished content.',
      'Implemented user access control for subscriptions and content bundles.',
      'Redesigned regional content setup in the admin CMS across 10+ modules.',
      'Built digital asset management (DAM) integration for importing channels and collections into the platform.',
    ],
  },
  {
    company: 'BroChill',
    website: 'https://brochill.com/',
    role: 'Full Stack Developer',
    period: 'Jan 2025 — Dec 2025',
    summary: 'BroChill is a social app with 50M+ downloads on Google Play. Worked across backend engineering, subscriptions, internal tools and deployment, directly with the co-founder.',
    stack: ['Node.js', 'Next.js', 'Vue.js', 'MySQL', 'ClickHouse', 'Redis', 'MongoDB', 'Google Play Billing', 'Razorpay', 'Docker'],
    points: [
      'Designed and built the backend using Node.js, MySQL, Redis and MongoDB for an app with 50M+ downloads.',
      'Integrated Google Play Billing and built the full subscription and payment flow.',
      'Built alternative billing with Razorpay alongside Google Play Billing, giving users a choice of how to pay.',
      'Improved creator and admin panels so content could be managed faster.',
      'Built internal AI-based tools for content recommendations and content processing.',
      'Worked directly with the co-founder on feature planning, architecture and scaling.',
      'Set up stable Docker deployments and improved backend performance.',
    ],
  },
  {
    company: 'Telugu Labs · BroChill',
    projectId: 'engageon-tellow-ai',
    website: 'https://tellow.ai/',
    role: 'Full Stack Developer',
    period: 'May 2024 — Dec 2024',
    summary: 'Built two major SaaS platforms, EngageON and Tellow AI, spanning AI generation, model integration, dashboards and payments.',
    stack: ['Next.js', 'Node.js', 'Redis', 'MySQL', 'ClickHouse', 'Kafka', 'Cloudflare R2', 'Razorpay'],
    points: [
      'Built EngageON and Tellow AI using Next.js, Node.js and a multi-database architecture with Redis, MySQL and ClickHouse.',
      'Designed scalable backend systems and implemented event-driven workflows using Kafka, reducing API response times.',
      'Integrated AI image and video generation and character training pipelines, with flexible support for different models.',
      'Built reusable backend and frontend components that reduced AI model onboarding time by 50%.',
      'Developed end-to-end dashboards, admin systems, user panels and Razorpay payment integrations.',
    ],
  },
  {
    company: 'Eveez',
    projectId: 'eveez-recovery-tracker',
    website: 'https://eveez.in/',
    role: 'Full Stack Developer Intern',
    period: 'Jan 2024 — Apr 2024',
    summary: 'Developed the Recovery Tracker application for EV vehicles, bringing live status, battery insights and recovery operations into one workflow.',
    stack: ['Next.js', 'Node.js', 'SQL', 'MongoDB', 'AWS S3', 'Tailwind CSS'],
    points: [
      'Developed Recovery Tracker with live status updates, battery insights and real-time vehicle monitoring.',
      'Implemented vehicle validation through chassis number verification and image uploads with secure AWS S3 storage.',
      'Built admin dashboards using Next.js and Node.js to track vehicle health, alerts and recovery progress.',
      'Integrated third-party APIs for real-time vehicle telemetry and GPS tracking.',
      'Worked across UI development, backend APIs, authentication and deployment support.',
    ],
  },
]

const featuredProjects = projects.slice(0, 3).map(project => ({
  ...project,
  live: project.liveLink,
  source: project.githubLink,
}))

const skills = [
  ['Languages', 'JavaScript, TypeScript, Kotlin, Python, Java, HTML, CSS'],
  ['Frontend', 'React.js, Next.js, Vue.js, Tailwind CSS, SCSS'],
  ['Backend & automation', 'Node.js, Express.js, REST APIs, Kafka, n8n'],
  ['Data', 'MySQL, MongoDB, Redis, ClickHouse, Room'],
  ['Android', 'Jetpack Compose, WorkManager, Hilt'],
  ['Cloud & tools', 'AWS, Docker, Git, GitHub, Vercel'],
  ['Design', 'Figma, UI/UX fundamentals'],
  ['Product thinking', 'Product planning, product analysis, user research, product design fundamentals, SEO, product marketing basics'],
]

export default function HomeContent() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = 'hello@vishwanathkarka.com'
  const emailSubject = 'Project enquiry'
  const emailBody = 'Hi Vishwanath,\n\nI would like to discuss a project or opportunity with you.\n\n'
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = mailtoHref
    }
  }

  return (
    <main className="portfolio-page" id="top">
      <div className="portfolio-grid" aria-hidden="true" />

      <header className="portfolio-header portfolio-container">
        <a className="email-chip" href={mailtoHref}>
          <span className="email-chip-mark" />
          {email}
        </a>

        <nav id="portfolio-navigation" className={menuOpen ? 'portfolio-nav is-open' : 'portfolio-nav'} aria-label="Main navigation">
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="resume-link" href="/Vishwanath-Reddy-Karka-Resume.pdf" target="_blank" rel="noreferrer">
            Résumé <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          className="portfolio-menu"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section className="portfolio-hero portfolio-container">
        <div className="hero-topline">
          <div className="hero-status"><span /> Available for new opportunities</div>
        </div>

        <div className="hero-heading">
          <h1>
            <span className="hero-greeting">Hey, I&apos;m</span>
            <span className="inline-portrait" aria-hidden="true">
              <Image src="/vishwanath.png" alt="" fill priority sizes="(max-width: 760px) 64px, 96px" />
            </span>
            <span className="hero-name">Vishwanath Reddy.</span>
          </h1>

          <p className="hero-statement">
            I build <strong>full-stack products</strong> that make complex work feel simple.
          </p>
        </div>

        <p className="hero-context">Software Engineer II at TV2Z · Hyderabad<br />Node.js, TypeScript and full-stack engineering across OTT and SaaS.</p>

        <div className="hero-lower">
          <div className="hero-actions">
            <a className="primary-action" href="#work">View my work <ArrowDown size={16} /></a>
            <a className="secondary-action" href="/Vishwanath-Reddy-Karka-Resume.pdf" target="_blank" rel="noreferrer">View résumé <FileText size={16} aria-hidden="true" /></a>
          </div>
        </div>

      </section>

      <section className="portfolio-section portfolio-container" id="experience">
        <div className="section-label">
          <p>Work experience</p>
          <small>2024 — Present</small>
        </div>

        <div className="experience-intro">
          <h2>Experience building products that people actually use.</h2>
          <p>Product engineering across OTT streaming, a social app with 50M+ downloads, SaaS and mobility operations.</p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <details key={experience.company} open={index < 2}>
              <summary>
                <span className="experience-dot">{String(index + 1).padStart(2, '0')}</span>
                <span className="experience-title">
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    aria-label={`Visit ${experience.company} website`}
                  >
                    <strong>{experience.company}</strong>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  <small>{experience.role}</small>
                </span>
                <time>{experience.period}</time>
                <span className="experience-toggle"><ChevronDown size={17} /></span>
              </summary>
              <div className="experience-detail">
                <p>{experience.summary}</p>
                <p className="experience-stack"><strong>Tech stack</strong> {experience.stack.join(', ')}</p>
                <ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul>
                {experience.projectId && <Link className="experience-case-link" href={`/projects/${experience.projectId}`}>Read the project case study <ArrowRight size={14} aria-hidden="true" /></Link>}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="portfolio-section portfolio-container" id="work">
        <div className="section-label">
          <p>Selected work</p>
          <small>Featured projects</small>
        </div>

        <div className="projects-heading">
          <div>
            <h2>Products built to be useful, not just beautiful.</h2>
            <p>From the first interface to the final deployment, I turn real problems into clear, dependable digital products.</p>
          </div>
          <Link href="/projects">View more projects <ArrowRight size={15} /></Link>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <article className="featured-project" key={project.id}>
              {project.live ? (
                <a className="featured-project-image" href={project.live} target="_blank" rel="noreferrer">
                  <Image src={project.image!} alt={`${project.title} preview`} fill sizes="(max-width: 760px) 100vw, 62vw" />
                  <span className="featured-project-launch"><ArrowUpRight size={19} /></span>
                </a>
              ) : (
                <div className="featured-project-image">
                  <Image src={project.image!} alt={`${project.title} preview`} fill sizes="(max-width: 760px) 100vw, 62vw" />
                  {'status' in project && <span className="featured-project-status">{project.status}</span>}
                </div>
              )}
              <div className="featured-project-copy">
                <small>0{index + 1} / {project.category}</small>
                <h3><Link href={`/projects/${project.id}`}>{project.title}</Link></h3>
                <p>{project.description}</p>
                <ul className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <p className="project-impact"><span aria-hidden="true" />{project.impact}</p>
                <div>
                  <Link href={`/projects/${project.id}`}>Project details <ArrowRight size={14} /></Link>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={14} /></a>}
                  {project.source && <a href={project.source} target="_blank" rel="noreferrer">Source <Github size={14} /></a>}
                  {!project.live && !project.source && <span className="project-coming-soon">Coming soon</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section portfolio-container about-section" id="about">
        <div className="section-label">
          <p>About & capabilities</p>
          <small>Developer · Builder</small>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <h2>I care about the whole product, not just the code.</h2>
            <p>
              My journey started with WordPress in 2019 and grew into full-stack product development. Today I work across the complete product journey—from understanding the problem and planning the experience to designing, building, launching and improving the final product. I combine full-stack engineering with practical product thinking, UI/UX fundamentals and growth awareness.
            </p>
            <a href="/Vishwanath-Reddy-Karka-Resume.pdf" target="_blank" rel="noreferrer">Read my résumé <ArrowUpRight size={15} /></a>
          </div>
          <div className="skills-list">
            {skills.map(([title, list]) => (
              <div key={title}><span>{title}</span><p>{list}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section portfolio-container" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <p className="contact-kicker">Have a project or opportunity?</p>
        <h2>Let&apos;s build something useful.</h2>
        <a className="contact-email" href={mailtoHref}>{email}</a>

        <div className="contact-links">
          <button type="button" onClick={copyEmail}>{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? 'Copied' : 'Copy email'}</button>
          <a href={mailtoHref}><Mail size={15} /> Email</a>
          <a href="https://github.com/vishwanathkarka" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
          <a href="https://www.linkedin.com/in/vishwanathreddykarka/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
        </div>

        <footer>
          <span>Designed and built by Vishwanath Reddy</span>
          <span>Hyderabad, India</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </section>
    </main>
  )
}
