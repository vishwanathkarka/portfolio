'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, Home } from 'lucide-react'

export default function PageNavigation() {
  const pathname = usePathname()
  return (
    <nav className="legacy-page-nav" aria-label="Page navigation">
      <Link href="/"><Home size={16} aria-hidden="true" /> Home</Link>
      {pathname.startsWith('/projects/') && <Link href="/projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>}
    </nav>
  )
}
