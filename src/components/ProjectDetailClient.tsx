import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import ProjectShell from './ProjectShell'
import { ProjectNavigation } from './ProjectNavigation'
import type { Project } from '@/types/project'

export default function ProjectDetailClient({ project, allProjects }: { project: Project; allProjects: Project[] }) {
  return (
    <ProjectShell>
      <article className="project-story">
        <Link className="project-back" href="/projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
        <header className="project-story-heading">
          <p className="project-eyebrow">{project.date}</p>
          <h1>{project.title}</h1>
          <p className="project-lede">{project.description}</p>
          {(project.role || project.status) && <div className="project-facts">
            {project.role && <p><span>Focus</span>{project.role}</p>}
            {project.status && <p><span>Status</span>{project.status}</p>}
          </div>}
          <ul className="project-tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <div className="project-story-actions">
            {project.liveLink && <a className="primary-action" href={project.liveLink} target="_blank" rel="noreferrer">Visit project <ArrowUpRight size={16} aria-hidden="true" /></a>}
            {project.githubLink && <a className="secondary-action" href={project.githubLink} target="_blank" rel="noreferrer">View source <Github size={16} aria-hidden="true" /></a>}
          </div>
        </header>
        {project.image && <div className="project-story-image"><Image src={project.image} alt={`${project.title} preview`} width={1440} height={960} sizes="(max-width: 760px) 100vw, 1040px" priority /></div>}
        {project.metrics && <section className="project-evidence" aria-label="Project results">
          <dl className="project-metrics">{project.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>
          {project.metricsNote && <p className="project-evidence-note">{project.metricsNote}</p>}
        </section>}
        <div className="project-story-body">
          <section className="project-story-section"><h2>Overview</h2><p>{project.longDescription || project.description}</p></section>
          {project.caseStudy && <>
            <section className="project-story-section"><h2>The problem</h2><p>{project.caseStudy.problem}</p></section>
            <section className="project-story-section"><h2>Implementation</h2><ul>{project.caseStudy.contribution.map(item => <li key={item}>{item}</li>)}</ul></section>
            <section className="project-story-section project-story-outcome"><h2>Outcome & status</h2><p>{project.caseStudy.outcome}</p></section>
          </>}
        </div>
        {project.architecture && <section className="project-deep-dive" aria-labelledby="architecture-heading">
          <p className="project-eyebrow">From input to outcome</p>
          <h2 id="architecture-heading">How it works</h2>
          <ol className="project-flow">{project.architecture.map(step => <li key={step.title}><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol>
        </section>}
        {project.decisions && <section className="project-deep-dive" aria-labelledby="decisions-heading">
          <p className="project-eyebrow">Inside the implementation</p>
          <h2 id="decisions-heading">Engineering decisions</h2>
          <div className="project-decisions">{project.decisions.map(decision => <section key={decision.title}><h3>{decision.title}</h3><p>{decision.detail}</p></section>)}</div>
        </section>}
        {project.gallery && <section className="project-deep-dive" aria-labelledby="evidence-heading">
          <p className="project-eyebrow">A closer look</p>
          <h2 id="evidence-heading">{project.metrics ? 'Analytics & evidence' : 'Project examples'}</h2>
          <div className="project-gallery">{project.gallery.map(item => <figure key={item.src}>
            <a href={item.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${item.alt}`}><Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 760px) 100vw, 1040px" /></a>
            <figcaption>{item.caption} <a href={item.src} target="_blank" rel="noreferrer">Open full size ↗</a></figcaption>
          </figure>)}</div>
        </section>}
        {project.resources && <section className="project-deep-dive" aria-labelledby="resources-heading">
          <h2 id="resources-heading">Explore further</h2>
          <ul className="project-resources">{project.resources.map(resource => <li key={resource.href}><a href={resource.href} target="_blank" rel="noreferrer">{resource.label}<ArrowUpRight size={16} aria-hidden="true" /></a></li>)}</ul>
        </section>}
        <div className="project-story-contact"><p>Interested in how I build?</p><Link href="/#contact">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        <ProjectNavigation currentProject={project} allProjects={allProjects} />
      </article>
    </ProjectShell>
  )
}
