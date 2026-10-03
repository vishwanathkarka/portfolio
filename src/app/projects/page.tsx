import { projects } from '@/data/projects'
import ProjectsListClient from '@/components/ProjectsListClient'

export const metadata = {
  title: 'Projects | Vishwanath Reddy',
  description: 'Selected projects built by Vishwanath Reddy.',
}

export default function ProjectsPage() {
  return <ProjectsListClient projects={projects} />
}
