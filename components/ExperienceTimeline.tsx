import { Badge } from "./ui/badge"
import { MDXRemote } from "next-mdx-remote/rsc"
import type { Experience } from "@/lib/markdown"

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => {
        const { frontmatter, content } = experience
        
        return (
          <div key={index} className="relative pl-8 pb-8 border-l-2 border-border last:pb-0">
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
            
            <div className="space-y-3">
              {/* Header */}
              <div>
                <h3 className="text-xl font-bold">{frontmatter.company}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <p className="text-muted-foreground">{frontmatter.role}</p>
                  <span className="text-muted-foreground">•</span>
                  <Badge variant="secondary" className="text-xs">
                    {frontmatter.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {frontmatter.location} • {frontmatter.period}
                </p>
              </div>

              {/* Content */}
              <article className="prose prose-sm dark:prose-invert max-w-none">
                <MDXRemote source={content} />
              </article>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {frontmatter.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="font-mono text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
