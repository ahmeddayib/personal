import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content")

export interface ProjectFrontmatter {
  title: string
  slug: string
  date: string
  featured: boolean
  tags: string[]
  tech: string[]
  github: string | null
  demo: string | null
  image: string
  marketCategory?: string
  problemStatement?: string
  thesis?: string
}

export interface ExperienceFrontmatter {
  company: string
  role: string
  location: string
  period: string
  type: string
  tech: string[]
  order: number
}

export interface WritingFrontmatter {
  title: string
  slug: string
  date: string
  description: string
  category: string
  featured: boolean
  lastUpdated?: string
  relatedSlugs?: string[]
}

export interface Project {
  frontmatter: ProjectFrontmatter
  content: string
}

export interface Experience {
  frontmatter: ExperienceFrontmatter
  content: string
}

export interface Writing {
  frontmatter: WritingFrontmatter
  content: string
  readingTime: number
}

function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / 230)
}

export function getAllProjects(): Project[] {
  const projectsDirectory = path.join(contentDirectory, "projects")

  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(projectsDirectory)
  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        frontmatter: data as ProjectFrontmatter,
        content,
      }
    })
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    })

  return projects
}

export function getProjectBySlug(slug: string): Project | null {
  const projectsDirectory = path.join(contentDirectory, "projects")
  const fullPath = path.join(projectsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    frontmatter: data as ProjectFrontmatter,
    content,
  }
}

export function getAllExperiences(): Experience[] {
  const experienceDirectory = path.join(contentDirectory, "experience")

  if (!fs.existsSync(experienceDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(experienceDirectory)
  const experiences = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(experienceDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        frontmatter: data as ExperienceFrontmatter,
        content,
      }
    })
    .sort((a, b) => {
      return a.frontmatter.order - b.frontmatter.order
    })

  return experiences
}

export function getAllWriting(): Writing[] {
  const writingDirectory = path.join(contentDirectory, "writing")

  if (!fs.existsSync(writingDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(writingDirectory)
  const writing = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(writingDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        frontmatter: data as WritingFrontmatter,
        content,
        readingTime: calculateReadingTime(content),
      }
    })
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    })

  return writing
}

export function getWritingBySlug(slug: string): Writing | null {
  const writingDirectory = path.join(contentDirectory, "writing")
  const fullPath = path.join(writingDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    frontmatter: data as WritingFrontmatter,
    content,
    readingTime: calculateReadingTime(content),
  }
}
