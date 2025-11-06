import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Import content data
import contentEn from "@/data/content-en.json"
import contentAr from "@/data/content-ar.json"

interface StoryPageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ lang?: string }>
}

export default async function StoryPage({ params, searchParams }: StoryPageProps) {
  const { id } = await params
  const { lang } = await searchParams
  const content = lang === "ar" ? contentAr : contentEn
  const isRTL = lang === "ar"

  console.log(lang)
  // Find the story from either featured or stories array
  let story = content.recentWork.featured.id === id ? content.recentWork.featured : null

  if (!story) {
    story = content.selectedStories.stories.find((s) => s.id === id)
  }

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Story not found</h1>
          <Link href={`/?lang=${lang}`} className="text-luxury hover:text-accent">
            Return home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Header content={content.header} language={lang} />

      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Back button */}
            <Link
              href={`/?lang=${lang}`}
              className={`inline-flex items-center gap-2 text-sm text-luxury hover:text-accent transition-colors mb-8 ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <ArrowLeft className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
              <span>{isRTL ? "العودة للرئيسية" : "Back to home"}</span>
            </Link>

            {/* Story metadata */}
            <div className={`flex items-center gap-3 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <span className="text-sm font-medium text-luxury">{story.type}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{story.date}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{story.readTime}</span>
            </div>

            {/* Story title */}
            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 ${isRTL ? "text-right" : ""}`}
            >
              {story.title}
            </h1>

            {/* Story image */}
            {story.image && (
              <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg mb-12">
                <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Story content */}
            <div className={`prose prose-lg max-w-none ${isRTL ? "text-right" : ""}`}>
              {/* <div className="text-xl leading-relaxed text-foreground/90 mb-8 font-serif">{story.excerpt}</div> */}

              <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                {story.content ? (
                  story.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-balance">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-muted-foreground italic">
                    {isRTL ? "المحتوى الكامل للقصة سيتم إضافته قريباً..." : "Full story content will be added soon..."}
                  </p>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="my-16 border-t border-luxury/20"></div>

            {/* Back to home link */}
            <div className="text-center">
              <Link
                href={`/?lang=${lang}`}
                className="inline-flex items-center gap-2 text-luxury hover:text-accent transition-colors font-medium"
              >
                <ArrowLeft className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
                <span>{isRTL ? "العودة للرئيسية" : "Back to home"}</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer content={content.footer} language={lang} />
    </div>
  )
}
