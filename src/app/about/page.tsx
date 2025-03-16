"use client";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-20">
      {/* Hero section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("about_page.title")}</h1>
              <p className="text-xl text-muted-foreground mb-6">{t("about_page.description")}</p>
              <Button asChild>
                <Link href="/contact">
                  {t("contact.get_intouch")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about_page.our_story_title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("about_page.our_story_description")}
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t("about_page.founded_with_vision")}</h3>
              <p className="text-lg text-muted-foreground mb-6">
                {t("about_page.content")}
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about_page.values")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("about_page.values_description")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t("about_page.value_innovation_title"),
                description: t("about_page.value_innovation_description"),
              },
              {
                title: t("about_page.value_excellence_title"),
                description: t("about_page.value_excellence_description"),
              },
              {
                title: t("about_page.value_collobation_title"),
                description: t("about_page.value_collobation_description"),
              },
              {
                title: t("about_page.value_integrity_title"),
                description: t("about_page.value_integrity_description"),
              },
            ].map((value, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* 
      <section className="py-20" id="team">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Meet the experts behind our success</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "CEO & Founder",
                image: "/placeholder.svg?height=400&width=400&text=AJ",
              },
              {
                name: "Maria Rodriguez",
                role: "CTO",
                image: "/placeholder.svg?height=400&width=400&text=MR",
              },
              {
                name: "David Kim",
                role: "Design Director",
                image: "/placeholder.svg?height=400&width=400&text=DK",
              },
              {
                name: "Sarah Patel",
                role: "Development Lead",
                image: "/placeholder.svg?height=400&width=400&text=SP",
              },
            ].map((member, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden border shadow-sm">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/about/team">
                View Full Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Trusted by leading companies worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="flex items-center justify-center p-6">
                <img
                  src={`/placeholder.svg?height=100&width=200&text=Partner+${partner}`}
                  alt={`Partner ${partner}`}
                  className="max-h-16 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

<section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("services_page.free_consultation")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t("nav.contact")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">{t("hero.cta.work")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

