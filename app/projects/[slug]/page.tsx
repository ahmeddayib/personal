import { getAllProjects, getProjectBySlug } from "@/lib/markdown"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.frontmatter.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.frontmatter.title} - Ahmed Dayib`,
    description: project.content.substring(0, 160),
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { frontmatter, content } = project

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl py-16 md:py-24">
      <div className="max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/work">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Work
          </Link>
        </Button>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {frontmatter.marketCategory && (
              <span className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">
                {frontmatter.marketCategory}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{frontmatter.title}</h1>

          {/* Links */}
          <div className="flex gap-3">
            {frontmatter.github && (
              <Button asChild>
                <Link href={frontmatter.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </Link>
              </Button>
            )}
            {frontmatter.demo && (
              <Button asChild variant="outline">
                <Link href={frontmatter.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-slate dark:prose-invert">
          <MDXRemote source={content} />
        </article>
      </div>
    </div>
  )
}
