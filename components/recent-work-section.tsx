import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface RecentWorkSectionProps {
  content: {
    title: string
    featured: {
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
  }
  language: string
}

export function RecentWorkSection({ content, language }: RecentWorkSectionProps) {
  const isRTL = language === "ar"

  return (
    <section id="recent" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2
            className={`font-serif text-3xl md:text-5xl font-bold bg-gradient-to-r from-luxury to-accent bg-clip-text text-transparent mb-12 ${isRTL ? "text-right" : ""}`}
          >
            {content.title}
          </h2>
          {/* </CHANGE> */}

          <Link href={`/story/${content.featured.id}?lang=${language}`}>
            <Card className="border-border/50 bg-card hover:shadow-xl hover:border-luxury/30 transition-all duration-300 overflow-hidden cursor-pointer">
              {content.featured.image && (
                <div className="relative w-full h-64 md:h-80 overflow-hidden">
                  <img
                    src={content.featured.image || "/placeholder.svg"}
                    alt={content.featured.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <CardContent className="p-8 md:p-12">
                <div className={`flex items-center gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <span className="text-sm font-medium text-luxury">{content.featured.type}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{content.featured.date}</span>
                </div>

                <h3
                  className={`font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 ${isRTL ? "text-right" : ""}`}
                >
                  {content.featured.title}
                </h3>

                <p
                  className={`text-lg leading-relaxed text-foreground/80 mb-6 text-balance ${isRTL ? "text-right" : ""}`}
                >
                  {content.featured.excerpt}
                </p>

                <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
                  <span className="text-sm text-muted-foreground">{content.featured.readTime}</span>
                  <span
                    className={`inline-flex items-center gap-2 text-sm font-medium text-luxury hover:text-accent transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <span>{isRTL ? "اقرأ المزيد" : "Read more"}</span>
                    <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
          {/* </CHANGE> */}
        </div>
      </div>
    </section>
  )
}
