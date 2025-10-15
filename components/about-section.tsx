interface AboutSectionProps {
  content: {
    title: string
    greeting: string
    bio: string
    description: string
    profileImage?: string
  }
  language: string
}

export function AboutSection({ content, language }: AboutSectionProps) {
  const isRTL = language === "ar"

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-row-reverse  lg:flex-row items-center lg:gap-12 mb-12">
            <div className="flex items-center justify-center mb-6 lg:mb-0 flex-shrink-0">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-luxury/30 shadow-lg ring-4 ring-luxury-light/20">
                  <img
                    src={content.profileImage || "/placeholder.svg"}
                    alt={content.greeting}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <p
                className={`text-sm uppercase tracking-wider text-luxury mb-4 ${isRTL ? "text-right lg:text-right" : "lg:text-left"}`}
              >
                {content.title}
              </p>
              <h2
                className={`font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 ${isRTL ? "text-right lg:text-right" : "lg:text-left"}`}
              >
                {content.greeting}
              </h2>
            </div>
          </div>
          {/* </CHANGE> */}

          <div className={`space-y-6 text-lg leading-relaxed text-foreground/90 ${isRTL ? "text-right" : ""}`}>
            <p className="text-balance">{content.bio}</p>
            <p className="text-balance text-muted-foreground">{content.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
