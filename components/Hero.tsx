import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const questions = [
  {
    question: "How do you make AI systems that enterprises actually trust enough to deploy?",
    href: "/writing/agent-governance-bet",
  },
  {
    question: "Why does where a model runs sometimes matter more than which model you pick?",
    href: "/writing/healthcare-ai-deployment",
  },
  {
    question: "What happens to SaaS pricing when the \"user\" is an agent, not a person?",
    href: "/writing/outcome-pricing-shift",
  },
  {
    question: "When AI tools get commoditized, where does the value end up?",
    href: "/writing/agentic-market-map",
  },
]

export function Hero() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl py-12 md:py-20">
        <div className="max-w-4xl space-y-12 md:space-y-16">
          {/* Top: Name + Positioning */}
          <div className="space-y-6 opacity-0 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
              Ahmed Dayib
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/70 font-normal max-w-2xl">
              Software engineer who builds things to understand them
            </p>
          </div>

          {/* Middle: What I'm Thinking About */}
          <div className="space-y-6 opacity-0 animate-fadeIn delay-200">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              What I&apos;m Thinking About
            </h2>
            <div className="space-y-4">
              {questions.map((q) => (
                <Link
                  key={q.question}
                  href={q.href}
                  className="group flex items-start gap-3 py-3 border-b border-border/40 hover:border-foreground/20 transition-colors duration-200"
                >
                  <ArrowRight className="h-4 w-4 mt-1 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                  <span className="text-base md:text-lg text-foreground/90 group-hover:text-foreground transition-colors">
                    {q.question}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom: Bio */}
          <div className="space-y-6 opacity-0 animate-fadeIn delay-400">
            <div className="max-w-2xl space-y-4">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                I spent a summer building production software at Delaget (acquired by PAR Technology, NYSE: PAR), shipping features used by 22,000+ restaurants. That experience, watching how people actually use the things you build, changed how I think about engineering.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Since then I&apos;ve been building AI projects across different domains to learn how these systems work in practice, not just in tutorials. Each one taught me something I didn&apos;t expect.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link
                href="mailto:dayibahmed03@gmail.com"
                className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                dayibahmed03@gmail.com
              </Link>
              <Button variant="outline" size="sm" asChild>
                <Link href="/work">
                  See my work <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
