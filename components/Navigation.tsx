"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Work", href: "/work" },
  { name: "Writing", href: "/writing" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <Link href="/" className="flex items-center">
          <span className="font-mono text-sm tracking-tight">$ ahmed</span>
        </Link>

        <nav className="flex items-center gap-8 md:gap-12">
          <div className="hidden md:flex gap-8 md:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:text-foreground relative group",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-[1.4rem] left-0 right-0 h-[1px] bg-foreground" />
                )}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
