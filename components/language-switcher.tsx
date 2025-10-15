"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  currentLanguage: string
  onLanguageChange: (lang: string) => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === "en" ? "ar" : "en")}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      <span>{currentLanguage === "en" ? "العربية" : "English"}</span>
    </Button>
  )
}
