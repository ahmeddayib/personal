import { Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              © 2026 Ahmed Dayib
            </p>
          </div>

          <div className="flex gap-6">
            <Link
              href="mailto:dayibahmed03@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
