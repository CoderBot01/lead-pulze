import blogsData from "@/data/blogs.json"

export interface BlogContentBlock {
  type: "paragraph" | "heading" | "list" | "quote"
  text?: string
  level?: number
  items?: string[]
}

export interface Blog {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage: string
  author: string
  publishedDate: string
  readingTime: string
  content: BlogContentBlock[]
}

export async function getBlogs(): Promise<Blog[]> {
  return (blogsData.blogs as Blog[]) || []
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  return (blogsData.blogs as Blog[]).find((b) => b.slug === slug)
}
