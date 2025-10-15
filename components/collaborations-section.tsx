import Image from "next/image"

interface Partner {
  name: string
  description: string
  logo: string
}

interface CollaborationsSectionProps {
  content: {
    title: string
    description: string
    partners: Partner[]
  }
  language: string
}

export function CollaborationsSection({ content, language }: CollaborationsSectionProps) {
  const isRTL = language === "ar"

  return (
    <section id="collaborations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className={`font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 ${isRTL ? "text-right" : ""}`}>
            {content.title}
          </h2>
          <p className={`text-lg text-muted-foreground mb-12 ${isRTL ? "text-right" : ""}`}>{content.description}</p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {content.partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border/50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4 relative w-20 h-20 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
