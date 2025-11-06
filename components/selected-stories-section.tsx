import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Story {
  id: string
  title: string
  type: string
  date: string
  excerpt: string
  readTime: string
  link: string
  image?: string
  content?: string
}

interface SelectedStoriesSectionProps {
  content: {
    title: string
    stories: Story[]
  }
  language: string
}

export function SelectedStoriesSection({ content, language }: SelectedStoriesSectionProps) {
  const isRTL = language === "ar"

  return (
    <section id="stories" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2
            className={`font-serif text-3xl md:text-5xl font-bold bg-gradient-to-r from-luxury to-accent bg-clip-text text-transparent mb-12 py-1 ${isRTL ? "text-right" : ""}`}
          >
            {content.title}
          </h2>
          {/* </CHANGE> */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.stories.map((story) => (
              <Link key={story.id} href={`/story/${story.id}?lang=${language}`}>
                <Card className="border-border/50 bg-card hover:shadow-xl hover:border-luxury/30 transition-all duration-300 overflow-hidden cursor-pointer h-full">
                  {story.image && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}

                  <CardContent className="p-6">
                    <div className={`flex items-center gap-2 mb-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <span className="text-xs font-medium text-luxury">{story.type}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{story.date}</span>
                    </div>

                    <h3
                      className={`font-serif text-xl font-semibold text-foreground mb-3 ${isRTL ? "text-right" : ""}`}
                    >
                      {story.title}
                    </h3>

                    <p
                      className={`text-sm line-clamp-1 leading-relaxed text-foreground/70 mb-4 text-balance ${isRTL ? "text-right" : ""}`}
                    >
                      {story.excerpt}
                    </p>

                    <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
                      <span className="text-xs text-muted-foreground">{story.readTime}</span>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium text-luxury hover:text-accent transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                      >
                        <span>{isRTL ? "اقرأ" : "Read"}</span>
                        <ArrowRight className={`h-3 w-3 ${isRTL ? "rotate-180" : ""}`} />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              // </CHANGE>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
