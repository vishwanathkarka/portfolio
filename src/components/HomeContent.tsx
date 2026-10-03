'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
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
    summary: 'Building core systems for an OTT streaming platform across discovery, playback continuity, access and content operations.',
    points: [
      'Built the platform search and suggestion system from scratch.',
      'Improved TV guide APIs through caching and query optimization.',
      'Built Continue Watching, subscription access control and regional CMS workflows across 10+ modules.',
      'Integrated a media library for importing channels and collections.',
    ],
  },
  {
    company: 'Brochill',
    website: 'https://brochill.com/',
    role: 'Full-stack Developer',
    period: 'Jan 2025 — Dec 2025',
    summary: 'Worked on the backend and internal product systems supporting an application with more than 50 million downloads.',
    points: [
      'Architected backend systems using MySQL, Redis and MongoDB.',
      'Improved creator and admin panels for faster content management.',
      'Built Razorpay alternative billing alongside Google Play Billing.',
    ],
  },
  {
    company: 'Telugu Labs · Brochill',
    website: 'https://tellow.ai/',
    role: 'Full-stack Developer',
    period: 'May 2024 — Dec 2024',
    summary: 'Led development of two SaaS products, EngageON and Tellow.AI.',
    points: [
      'Architected scalable applications with Redis, ClickHouse, MySQL and Kafka.',
      'Used event-driven design for dependable product workflows.',
      'Built reusable AI image and video components that made model integration 50% faster.',
    ],
  },
  {
    company: 'Eveez',
    website: 'https://eveez.in/',
    role: 'Full-stack Developer Intern',
    period: 'Jan 2024 — Apr 2024',
    summary: 'Built a Recovery Tracker application for live vehicle operations and evidence capture.',
    points: [
      'Implemented live vehicle tracking and AWS S3 image uploads.',
      'Worked across Next.js, Node.js, SQL, MongoDB and Tailwind CSS.',
    ],
  },
]

const featuredProjects = [
  {
    id: 'still-discount',
    title: 'Still Discount',
    category: 'Full-stack · Learning',
    description: 'A platform sharing verified 100%-off Udemy coupon codes that has helped 185,000+ learners enroll in courses for free.',
    impact: '185K+ learners enrolled for free',
    tags: ['Next.js', 'Node.js', 'Redis', 'ClickHouse', 'n8n'],
    image: '/images/stilldiscount-free-courses-hero.png',
    live: 'https://stilldiscount.com/',
    source: '',
  },
  {
    id: 'abnormal-event-detection',
    title: 'Abnormal Event Detection on Pathway',
    category: 'AI/ML · Video surveillance',
    description: 'A real-time pathway surveillance system that uses YOLOv8 to detect abnormal events such as accidents, fighting, kidnapping and chain snatching.',
    impact: 'Automated detection, recording and cloud storage',
    tags: ['YOLOv8', 'Flask', 'OpenCV', 'Cloudinary'],
    image: '/images/abnormal-event-detection-pathway.png',
    live: '',
    source: 'https://github.com/vishwanathkarka/Abnormal-Event-Detection-On-Pathway',
  },
  {
    id: 'minspend',
    title: 'MinSpend',
    category: 'Android · Personal finance',
    description: 'An Android app that reads bank SMS alerts, automatically tracks and categorizes expenses, and turns them into clear budgets, insights and reminders.',
    impact: 'Coming soon · Internal testing',
    tags: ['Android', 'SMS tracking', 'Budgets', 'Insights'],
    image: '/images/minspend-expenses-autopilot.png',
    live: '',
    source: '',
    status: 'Internal testing',
  },
]

const skills = [
  ['Languages', 'JavaScript, TypeScript, Python, Java, HTML, CSS'],
  ['Frontend', 'React.js, Next.js, Vue.js, Tailwind CSS, SCSS'],
  ['Backend & automation', 'Node.js, Express.js, REST APIs, Kafka, n8n'],
  ['Data', 'MySQL, MongoDB, Redis, ClickHouse'],
  ['Cloud & tools', 'AWS, Docker, Git, GitHub, Vercel'],
  ['Design', 'Figma, UI/UX fundamentals'],
  ['Product thinking', 'Product planning, product analysis, user research, product design fundamentals, SEO, product marketing basics'],
]

export default function HomeContent() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = 'hello@vishwanathkarka.com'
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent('Project enquiry')}&body=${encodeURIComponent('Hi Vishwanath,\n\nI would like to discuss a project or opportunity with you.\n\n')}`

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
          <a className="resume-link" href="/Vishwanath_Reddy_K_resume.pdf" target="_blank" rel="noreferrer">
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

        <div className="hero-lower">
          <div className="hero-actions">
            <a className="primary-action" href="#work">View my work <ArrowDown size={16} /></a>
            <a className="secondary-action" href={mailtoHref}>Let&apos;s talk <ArrowUpRight size={16} /></a>
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
          <p>Product engineering across SaaS, mobility operations and modern full-stack applications.</p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <details key={experience.company} open={index === 0}>
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
                <ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul>
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
                  <Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 760px) 100vw, 62vw" />
                  <span className="featured-project-launch"><ArrowUpRight size={19} /></span>
                </a>
              ) : (
                <div className="featured-project-image">
                  <Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 760px) 100vw, 62vw" />
                  {'status' in project && <span className="featured-project-status">{project.status}</span>}
                </div>
              )}
              <div className="featured-project-copy">
                <small>0{index + 1} / {project.category}</small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <p className="project-impact"><span aria-hidden="true" />{project.impact}</p>
                <div>
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
            <a href="/Vishwanath_Reddy_K_resume.pdf" target="_blank" rel="noreferrer">Read my résumé <ArrowUpRight size={15} /></a>
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
