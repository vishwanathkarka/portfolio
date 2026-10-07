import Link from 'next/link'
import type { Project } from '@/types/project'

export const ProjectNavigation = ({ currentProject, allProjects }: { currentProject: Project; allProjects: Project[] }) => {
  const index = allProjects.findIndex(project => project.id === currentProject.id)
  const previous = index > 0 ? allProjects[index - 1] : undefined
  const next = index >= 0 ? allProjects[index + 1] : undefined
  if (!previous && !next) return null

  return (
    <nav className="project-pagination" aria-label="More projects">
      <div>{previous && <Link href={`/projects/${previous.id}`}><span>← Previous project</span><strong>{previous.title}</strong></Link>}</div>
      <div>{next && <Link href={`/projects/${next.id}`}><span>Next project →</span><strong>{next.title}</strong></Link>}</div>
    </nav>
  )
}
