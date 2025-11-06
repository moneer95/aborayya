"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { RecentWorkSection } from "@/components/recent-work-section"
import { SelectedStoriesSection } from "@/components/selected-stories-section"
import { CollaborationsSection } from "@/components/collaborations-section"
import { Footer } from "@/components/footer"
import contentEn from "@/data/content-en.json"
import contentAr from "@/data/content-ar.json"

export default function Home() {
  const [language, setLanguage] = useState("ar")
  const [mounted, setMounted] = useState(false)
  const searchParams = useSearchParams() // Use useSearchParams to get the query parameters

  useEffect(() => {
    setMounted(true)

    // Check if the language param exists in the search query
    const langFromSearch = searchParams.get("lang")
    if (langFromSearch === "en" || langFromSearch === "ar") {
      setLanguage(langFromSearch) // Update language based on the search parameter
    }
  }, [searchParams]) // The effect will run again when the search params change

  const content = language === "en" ? contentEn : contentAr
  const isRTL = language === "ar"

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Header content={content.header} language={language} onLanguageChange={setLanguage} />

      <main>
        <AboutSection content={content.about} language={language} />
        <RecentWorkSection content={content.recentWork} language={language} />
        <SelectedStoriesSection content={content.selectedStories} language={language} />
        <CollaborationsSection content={content.collaborations} language={language} />
      </main>

      <Footer content={content.footer} language={language} />
    </div>
  )
}
