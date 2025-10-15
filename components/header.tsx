"use client"

import { LanguageSwitcher } from "./language-switcher"

interface HeaderProps {
  content: {
    name: string
    title: string
    navigation: Array<{ label: string; href: string }>
  }
  language: string
  onLanguageChange: (lang: string) => void
}

export function Header({ content, language, onLanguageChange }: HeaderProps) {
  const isRTL = language === "ar"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <h1 className="font-serif text-xl font-semibold tracking-tight text-foreground">{content.name}</h1>
          </div>

          <nav className={`hidden md:flex items-center gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
            {content.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
        </div>
      </div>
    </header>
  )
}
