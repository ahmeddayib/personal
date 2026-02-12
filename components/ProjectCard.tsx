import Link from "next/link"
import { Badge } from "./ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import type { Project } from "@/lib/markdown"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { frontmatter } = project
  const displayTech = frontmatter.tech.slice(0, 4)
  const remainingTech = frontmatter.tech.length - 4

  const dateLabel = new Date(frontmatter.date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })

  return (
    <div className="relative pl-8 pb-10 border-l-2 border-border last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 -translate-x-[9px] w-4 h-4 rounded-full bg-primary border-4 border-background" />

      <div className="space-y-3">
        {/* Date + Market Category */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-mono text-muted-foreground">{dateLabel}</span>
          {frontmatter.marketCategory && (
            <>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">
                {frontmatter.marketCategory}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold leading-tight">
          <Link
            href={`/projects/${frontmatter.slug}`}
            className="hover:text-muted-foreground transition-colors duration-200"
          >
            {frontmatter.title}
          </Link>
        </h3>

        {/* Problem Statement */}
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          {frontmatter.problemStatement || project.content.split("\n")[0] || "Click to read more about this project."}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {displayTech.map((tech) => (
            <Badge key={tech} variant="outline" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
          {remainingTech > 0 && (
            <Badge variant="outline" className="font-mono text-xs">
              +{remainingTech}
            </Badge>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 pt-1">
          {frontmatter.github && (
            <Button variant="outline" size="sm" asChild>
              <Link href={frontmatter.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Link>
            </Button>
          )}
          {frontmatter.demo && (
            <Button variant="outline" size="sm" asChild>
              <Link href={frontmatter.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Link>
            </Button>
          )}
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/projects/${frontmatter.slug}`}>
              Read More →
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
