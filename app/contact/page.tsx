import Link from "next/link"
import { Mail } from "lucide-react"

export const metadata = {
  title: "Contact - Ahmed Dayib",
  description: "Get in touch.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl py-16 md:py-24">
      <div className="max-w-4xl">
        <div className="mb-16 md:mb-24 space-y-6">
          <span className="font-mono text-xs text-muted-foreground block">
            $ cat contact.md
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Get in touch
          </h1>
        </div>

        <div className="space-y-8">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            I like talking to people building interesting things, especially in AI, infrastructure, and developer tools.
          </p>

          <Link
            href="mailto:dayibahmed03@gmail.com"
            className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="underline underline-offset-4">dayibahmed03@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
