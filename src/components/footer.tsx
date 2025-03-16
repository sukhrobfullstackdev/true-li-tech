"use client";
import Link from "next/link"
import { Instagram, Linkedin, MessageSquareText, Phone, MapPin } from "lucide-react"
import { useLanguage } from "./language-provider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">TrueLiTech</h3>
            <p className="mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
            <Link 
      href="https://www.instagram.com/truelitech" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-primary transition-colors"
    >
      <Instagram size={20} />
      <span className="sr-only">Instagram</span>
    </Link>
    <Link 
      href="https://www.linkedin.com/company/truelitech" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-primary transition-colors"
    >
      <Linkedin size={20} />
      <span className="sr-only">LinkedIn</span>
    </Link>
    <Link 
      href="https://t.me/truelitech" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-primary transition-colors"
    >
      <MessageSquareText size={20} />
      <span className="sr-only">Telegram</span>
    </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">{t("footer.quick_links")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors">
                {t("nav.portfolio")} 
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">{t("nav.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                {t("services_page.web_development_title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  {t("services_page.mobile_title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  {t("services_page.ui_title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                {t("services_page.mvp_title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                {t("services_page.erp_title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                {t("services_page.bots_title")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">{t("nav.contact")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span>Taras Shevchenko 21A, Tashkent, Uzbekistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0" />
                <a href="tel:+998903356910" className="text-muted-foreground hover:text-primary transition">
      +998 90 335 69 10
    </a>
              </li>
              <li className="flex items-center">
                <MessageSquareText className="mr-2 h-5 w-5 shrink-0" />
                <a href="https://t.me/truelitech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
      @truelitech
    </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} TrueLiTech. {t("footer.all_rights_reserved")}.</p>
        </div>
      </div>
    </footer>
  )
}

