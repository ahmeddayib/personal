import { getAllProjects } from "@/lib/markdown"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Work - Ahmed Dayib",
  description: "Projects I built to learn how AI systems work in practice.",
}

const allProjectSlugs = [
  "earnings-analyst",
  "trial-match",
  "agent-orchestrator",
  "support-agent",
  "product-discovery",
]

const projectDescriptions: Record<string, { question: string; learned: string }> = {
  "earnings-analyst": {
    question: "Can you make AI output that financial compliance teams would actually approve?",
    learned: "The hardest part was not NLP extraction. It was building an output format that compliance officers would trust. Structured outputs with citations solved the last mile.",
  },
  "trial-match": {
    question: "Does where a model runs matter more than which model you pick?",
    learned: "A less capable model running locally inside a hospital network is infinitely more deployable than a better model in the cloud. Deployment architecture is the real bottleneck.",
  },
  "agent-orchestrator": {
    question: "What actually blocks enterprises from deploying AI agents?",
    learned: "Multi agent workflows are fragile at the handoff points. I spent more time building schema validation between agents than on any individual agent. Real time cost tracking had to be built into the orchestration layer, not on top of it.",
  },
  "support-agent": {
    question: "Is the pricing model more important than the agent itself?",
    learned: "Binary escalation (auto or human) failed immediately. Most support actions live in a gray zone where context matters. The graduated autonomy model was harder to build than the agent reasoning itself.",
  },
  "product-discovery": {
    question: "In platform ecosystems, does distribution beat technology?",
    learned: "OpenCLIP embeddings broke down at catalog scale because product photography is not natural photography. Two white t shirts on white backgrounds produce nearly identical embeddings. Had to build attribute extraction as a secondary pass.",
  },
}

export default function WorkPage() {
  const allProjects = getAllProjects()
  const projects = allProjectSlugs
    .map((slug) => allProjects.find((p) => p.frontmatter.slug === slug))
    .filter(Boolean)

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl py-16 md:py-24">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-16 md:mb-24 space-y-6">
          <span className="font-mono text-xs text-muted-foreground block">
            $ cat work.md
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Work
          </h1>
        </div>

        {/* Background */}
        <section className="mb-20 md:mb-28">
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-8">
            Background
          </h2>
          <div className="prose prose-slate dark:prose-invert">
            <p>
              I spent a summer building production software at Delaget, shipping dashboard features and backend services used by 22,000+ restaurant locations. Shipping to that many locations taught me that production systems are about reliability, not cleverness. A query that is 10% faster but harder to debug is a net negative when something breaks.
            </p>
            <p>
              Since then I have been building AI projects across different domains to learn how these systems work in practice. Each one started with a question I wanted to think through by building something.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-10">
            Projects
          </h2>
          <div className="space-y-14">
            {projects.map((project) => {
              if (!project) return null
              const { frontmatter } = project
              const desc = projectDescriptions[frontmatter.slug]

              return (
                <div key={frontmatter.slug} className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">
                      {frontmatter.marketCategory}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    <Link
                      href={`/projects/${frontmatter.slug}`}
                      className="hover:text-muted-foreground transition-colors duration-200"
                    >
                      {frontmatter.title}
                    </Link>
                  </h3>

                  {desc && (
                    <p className="text-sm text-foreground/60 italic leading-relaxed">
                      {desc.question}
                    </p>
                  )}

                  {desc && (
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {desc.learned}
                    </p>
                  )}

                  <Link
                    href={`/projects/${frontmatter.slug}`}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Read more <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
