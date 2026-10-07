import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import ProjectShell from './ProjectShell'
import type { Project } from '@/types/project'

export default function ProjectsListClient({ projects }: { projects: Project[] }) {
  return (
    <ProjectShell>
      <header className="project-story-heading project-index-heading">
        <p className="project-eyebrow">Selected work & experiments</p>
        <h1>Built to be useful.</h1>
        <p className="project-lede">The products, problems and engineering decisions behind my work.</p>
      </header>
      <div className="project-index">
        {projects.map(project => {
          const hasCaseStudy = Boolean(project.caseStudy)
          const destination = hasCaseStudy ? `/projects/${project.id}` : project.githubLink || project.liveLink || `/projects/${project.id}`
          const external = destination.startsWith('http')
          const action = hasCaseStudy ? 'Project details' : project.githubLink ? 'View source code' : project.liveLink ? 'View live project' : 'Project details'
          return (
          <article key={project.id} className="project-index-item">
            <Link href={destination} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="project-index-image" aria-label={external ? `Open ${project.title}` : `Read about ${project.title}`} >
              {project.image && <Image src={project.image} alt={`${project.title} preview`} width={900} height={600} sizes="(max-width: 760px) 100vw, 500px" />}
            </Link>
            <div>
              <p className="project-eyebrow">{project.date}</p>
              <h2>{external ? <a href={destination} target="_blank" rel="noreferrer">{project.title}</a> : <Link href={destination}>{project.title}</Link>}</h2>
              <p className="project-index-description">{project.description}</p>
              <ul className="project-tags" aria-label={`${project.title} technologies`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              {external ? <a className="project-back" href={destination} target="_blank" rel="noreferrer">{action} {project.githubLink ? <Github size={16} aria-hidden="true" /> : <ArrowUpRight size={16} aria-hidden="true" />}</a> : <Link className="project-back" href={destination}>{action} <ArrowRight size={16} aria-hidden="true" /></Link>}
            </div>
          </article>
          )
        })}
      </div>
    </ProjectShell>
  )
}
