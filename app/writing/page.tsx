import { getAllWriting } from "@/lib/markdown"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Writing - Ahmed Dayib",
  description: "Essays and analysis on AI systems, infrastructure, and how they work in practice.",
}

export default function WritingPage() {
  const writing = getAllWriting()

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl py-16 md:py-24">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-10 md:mb-14 space-y-6">
          <span className="font-mono text-xs text-muted-foreground block">
            $ ls writing/
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Writing
          </h1>
        </div>

        {/* Writing List */}
        {writing.length > 0 ? (
          <div className="space-y-0">
            {writing.map((piece) => {
              const isMarketMap = piece.frontmatter.slug === "agentic-market-map"

              return (
                <Link
                  key={piece.frontmatter.slug}
                  href={`/writing/${piece.frontmatter.slug}`}
                  className={cn(
                    "group block py-6 border-b border-border/40 hover:border-foreground/20 transition-colors duration-200",
                    isMarketMap && "bg-muted/30 -mx-4 px-4 rounded-sm"
                  )}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">
                        {piece.frontmatter.category}
                      </span>
                      <span className="text-muted-foreground/30">&middot;</span>
                      <span className="text-xs font-mono text-muted-foreground/50">
                        {new Date(piece.frontmatter.date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-muted-foreground/30">&middot;</span>
                      <span className="text-xs font-mono text-muted-foreground/50">
                        {piece.readingTime} min read
                      </span>
                      {isMarketMap && (
                        <>
                          <span className="text-muted-foreground/30">&middot;</span>
                          <span className="text-xs font-mono text-foreground/60 bg-foreground/5 px-1.5 py-0.5 rounded">
                            Living document
                          </span>
                        </>
                      )}
                      {isMarketMap && piece.frontmatter.lastUpdated && (
                        <>
                          <span className="text-muted-foreground/30">&middot;</span>
                          <span className="text-xs font-mono text-muted-foreground/50">
                            Updated {piece.frontmatter.lastUpdated}
                          </span>
                        </>
                      )}
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-foreground/90 group-hover:text-foreground transition-colors">
                      {piece.frontmatter.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                      {piece.frontmatter.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-muted-foreground">No writing yet. Check back soon.</p>
          </div>
        )}
      </div>
    </div>
  )
}
