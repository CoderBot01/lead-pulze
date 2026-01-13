import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getBlogBySlug } from "@/lib/blog-utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronLeft, Clock, Calendar, User } from "lucide-react"

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <Navbar />
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors group"
        >
          <ChevronLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          Back to all blogs
        </Link>

        <article className="section-reveal visible">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-brand-gradient p-[1px]">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <User className="size-4 text-primary" />
                  </div>
                </div>
                <span className="font-medium text-foreground">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{blog.publishedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4" />
                <span>{blog.readingTime}</span>
              </div>
            </div>
          </header>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-white/5">
            <Image
              src={blog.coverImage || "/placeholder.svg?height=600&width=1200&query=blog+detail"}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg prose-headings:text-foreground prose-li:text-muted-foreground">
            {blog.content.map((block, idx) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={idx} className="mb-6">
                      {block.text}
                    </p>
                  )
                case "heading":
                  const Tag = block.level === 3 ? "h3" : "h2"
                  return (
                    <Tag key={idx} className="text-2xl md:text-3xl font-bold mt-12 mb-6">
                      {block.text}
                    </Tag>
                  )
                case "list":
                  return (
                    <ul key={idx} className="list-disc pl-6 mb-8 space-y-3">
                      {block.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )
                case "quote":
                  return (
                    <blockquote
                      key={idx}
                      className="border-l-4 border-primary pl-6 py-2 my-10 bg-primary/5 italic text-xl text-foreground"
                    >
                      {block.text}
                    </blockquote>
                  )
                default:
                  return null
              }
            })}
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
