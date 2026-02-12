import type { Metadata } from "next"
import { DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const siteDescription = "Software engineer who builds things to understand them. Projects and writing about AI systems, infrastructure, and how they work in practice."

export const metadata: Metadata = {
  title: "Ahmed Dayib - AI Engineer",
  description: siteDescription,
  keywords: ["Ahmed Dayib", "AI Engineer", "AI/ML", "Agentic AI", "Full Stack Developer"],
  authors: [{ name: "Ahmed Dayib" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmeddayib.dev",
    title: "Ahmed Dayib - AI Engineer",
    description: siteDescription,
    siteName: "Ahmed Dayib",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Dayib - AI Engineer",
    description: siteDescription,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
