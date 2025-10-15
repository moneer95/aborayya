interface FooterProps {
  content: {
    copyright: string
    contact: string
  }
  language: string
}

export function Footer({ content, language }: FooterProps) {
  const isRTL = language === "ar"

  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? "md:flex-row-reverse" : ""}`}
        >
          <p className="text-sm text-muted-foreground">{content.copyright}</p>
          <p className="text-sm text-muted-foreground">{content.contact}</p>
        </div>
      </div>
    </footer>
  )
}
