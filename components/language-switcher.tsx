"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useRouter } from "next/navigation" 


interface LanguageSwitcherProps {
  currentLanguage: string
  onLanguageChange: (lang: string) => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {

  const router = useRouter()

  // Function to handle language change and update URL param
  const handleLanguageChange = (lang: string) => {
    onLanguageChange(lang)

    // Update the URL query parameter without refreshing the page
    router.push(`?lang=${lang}`)
  }


  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => handleLanguageChange(currentLanguage === "en" ? "ar" : "en")}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      <span>{currentLanguage === "en" ? "العربية" : "English"}</span>
    </Button>
  )
}
