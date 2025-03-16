"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, Globe, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"

import styles from "./header.module.css"

const navigation = [
  { name: "nav.home", href: "/" },
  { name: "nav.services", href: "/services" },
  { name: "nav.about", href: "/about" },
  { name: "nav.portfolio", href: "/portfolio" },
];

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { currentLanguage, setLanguage, languages, t } = useLanguage()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className={`${styles.logo} gradient-text`}>TrueLiTech</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.active : "text-muted-foreground"}`}
            >
              {t(item.name)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className={`${styles.languageDropdown} relative`}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="p-2 text-muted-foreground hover:text-foreground"
            >
              <Globe className="h-5 w-5" />
            </Button>
            {isLanguageOpen && (
              <div className={styles.dropdownMenu}>
                <div className="py-1 bg-white">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`${styles.languageOption} ${currentLanguage === lang.code ? styles.active : ""}`}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsLanguageOpen(false)
                      }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-foreground"
          >
            {theme && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button onClick={() => router.push("/contact")} className="hidden md:inline-flex">{t("nav.contact")}</Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-transparent backdrop-blur-md">
              <div className="flex flex-col space-y-6 m-8">
                {navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      pathname === item.href ? "text-primary" : "text-white"
                    }`}
                  >
                    {t(item.name)}
                  </Link>
                  </SheetClose>
                ))}
                <Button onClick={() => router.push("/contact")} className="mt-4">{t("nav.contact")}</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

