import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

export default function ProjectShell({ children }: { children: ReactNode }) {
  return (
    <main className="portfolio-page project-page">
      <div className="portfolio-grid" aria-hidden="true" />
      <header className="portfolio-header portfolio-container project-header">
        <Link className="project-home" href="/">Vishwanath Reddy<span>Software Engineer II</span></Link>
        <nav className="project-nav" aria-label="Main navigation">
          <Link href="/projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
          <a href="/Vishwanath-Reddy-Karka-Resume.pdf" target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
      </header>
      <div className="portfolio-container">{children}</div>
      <footer className="project-footer portfolio-container">
        <span>Designed and built by Vishwanath Reddy</span>
        <Link href="/">Back to home ↗</Link>
      </footer>
    </main>
  )
}
