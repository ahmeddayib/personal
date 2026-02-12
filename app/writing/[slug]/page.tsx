import { getAllWriting, getWritingBySlug } from "@/lib/markdown"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

export async function generateStaticParams() {
  const writing = getAllWriting()
  return writing.map((piece) => ({
    slug: piece.frontmatter.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const piece = getWritingBySlug(slug)

  if (!piece) {
    return { title: "Not Found" }
  }

  return {
    title: `${piece.frontmatter.title} - Ahmed Dayib`,
    description: piece.frontmatter.description,
  }
}

export default async function WritingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const piece = getWritingBySlug(slug)

  if (!piece) {
    notFound()
  }

  const { frontmatter, content, readingTime } = piece

  // Resolve related pieces from frontmatter
  const relatedPieces = (frontmatter.relatedSlugs || [])
    .map((relatedSlug) => getWritingBySlug(relatedSlug))
    .filter(Boolean)

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl py-16 md:py-24">
      <div className="max-w-4xl">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/writing">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Writing
          </Link>
        </Button>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">
              {frontmatter.category}
            </span>
            <span className="text-muted-foreground/30">&middot;</span>
            <span className="text-xs font-mono text-muted-foreground/50">
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-muted-foreground/30">&middot;</span>
            <span className="text-xs font-mono text-muted-foreground/50">
              {readingTime} min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {frontmatter.title}
          </h1>
        </header>

        <article className="prose prose-slate dark:prose-invert">
          <MDXRemote source={content} />
        </article>

        {/* Bottom Matter */}
        <div className="mt-16 pt-8 border-t border-border/40 space-y-10">
          {/* Email CTA */}
          <div className="bg-muted/30 rounded-sm px-6 py-5">
            <p className="text-sm text-foreground/80 leading-relaxed">
              Disagree with something here? I&apos;d like to hear why.{" "}
              <Link
                href="mailto:dayibahmed03@gmail.com"
                className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                dayibahmed03@gmail.com
              </Link>
            </p>
          </div>

          {/* Related Pieces */}
          {relatedPieces.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                Related
              </h3>
              <div className="space-y-2">
                {relatedPieces.map((related) => {
                  if (!related) return null
                  return (
                    <Link
                      key={related.frontmatter.slug}
                      href={`/writing/${related.frontmatter.slug}`}
                      className="group flex items-center gap-2 py-2 text-foreground/80 hover:text-foreground transition-colors"
                    >
                      <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                      <span>{related.frontmatter.title}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Back to Writing */}
          <div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/writing">
                <ArrowLeft className="h-3 w-3 mr-2" />
                Back to Writing
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
