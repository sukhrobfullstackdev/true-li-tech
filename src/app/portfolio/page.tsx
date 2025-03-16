"use client";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider";


export default function PortfolioPage() {
  const { t } = useLanguage();

  const filters = [
    { id: "all", label: t("portfolio.all_projects")},
    { id: "ecommerce", label: t("portfolio.e_commerce")},
    { id: "healthcare", label: t("portfolio.healthcare")},
    { id: "finance", label: t("portfolio.finance")},
    { id: "education", label: t("portfolio.education")},
    { id: "real-estate", label: t("portfolio.real_estate")},
    { id: "startup", label: t("portfolio.startup")},
  ];

  // const projects = [
  //   {
  //     id: 1,
  //     title: "MediConnect Health Platform",
  //     description: "A comprehensive telemedicine platform for healthcare providers",
  //     image: "/placeholder.svg?height=600&width=800&text=MediConnect",
  //     category: "healthcare",
  //     tags: ["React", "Node.js", "MongoDB"],
  //     link: "#",
  //     challenge:
  //       "The client needed a secure, HIPAA-compliant telemedicine platform to connect patients with healthcare providers remotely.",
  //     solution:
  //       "We developed a custom telemedicine platform with video consultations, secure messaging, and electronic health records integration.",
  //     results:
  //       "45% increase in patient engagement, 30% reduction in administrative costs, and expanded reach to rural areas.",
  //   },
  //   {
  //     id: 2,
  //     title: "EduLearn LMS",
  //     description: "Learning management system for educational institutions",
  //     image: "/placeholder.svg?height=600&width=800&text=EduLearn",
  //     category: "education",
  //     tags: ["Next.js", "PostgreSQL", "AWS"],
  //     link: "#",
  //     challenge:
  //       "A leading university needed a modern learning management system to support both in-person and remote learning.",
  //     solution:
  //       "We built a comprehensive LMS with course management, interactive content delivery, and advanced analytics.",
  //     results:
  //       "Improved student satisfaction by 60%, increased course completion rates by 25%, and simplified administrative workflows.",
  //   },
  //   {
  //     id: 3,
  //     title: "FinTrack Investment Platform",
  //     description: "Financial tracking and investment management application",
  //     image: "/placeholder.svg?height=600&width=800&text=FinTrack",
  //     category: "finance",
  //     tags: ["React", "Firebase", "Chart.js"],
  //     link: "#",
  //     challenge:
  //       "A financial services firm needed a user-friendly platform for clients to track investments and make informed decisions.",
  //     solution:
  //       "We created an intuitive investment tracking platform with real-time data visualization and personalized insights.",
  //     results:
  //       "User engagement increased by 75%, client retention improved by 40%, and new client acquisition rose by 35%.",
  //   },
  //   {
  //     id: 4,
  //     title: "ShopEase E-commerce",
  //     description: "Full-featured e-commerce platform with inventory management",
  //     image: "/placeholder.svg?height=600&width=800&text=ShopEase",
  //     category: "ecommerce",
  //     tags: ["Next.js", "Stripe", "Tailwind CSS"],
  //     link: "#",
  //     challenge:
  //       "A retail business needed to transition from brick-and-mortar to online sales with integrated inventory management.",
  //     solution:
  //       "We developed a custom e-commerce platform with seamless payment processing, inventory tracking, and marketing tools.",
  //     results: "Online sales increased by 120% in the first year, with a 30% reduction in inventory management time.",
  //   },
  //   {
  //     id: 5,
  //     title: "TechCloud SaaS Platform",
  //     description: "Cloud-based software service for technology startups",
  //     image: "/placeholder.svg?height=600&width=800&text=TechCloud",
  //     category: "tech",
  //     tags: ["Vue.js", "Node.js", "Docker"],
  //     link: "#",
  //     challenge:
  //       "A technology startup needed a scalable SaaS platform to deliver their innovative project management solution.",
  //     solution:
  //       "We built a cloud-native SaaS platform with multi-tenancy, subscription management, and robust API integrations.",
  //     results:
  //       "Achieved 200% user growth in 18 months, with 99.9% uptime and successful integration with 15+ third-party services.",
  //   },
  //   {
  //     id: 6,
  //     title: "HealthTrack Fitness App",
  //     description: "Fitness tracking and wellness monitoring application",
  //     image: "/placeholder.svg?height=600&width=800&text=HealthTrack",
  //     category: "healthcare",
  //     tags: ["React Native", "Express", "MongoDB"],
  //     link: "#",
  //     challenge:
  //       "A wellness company needed a mobile app to help users track fitness goals and connect with health professionals.",
  //     solution:
  //       "We developed a cross-platform mobile app with activity tracking, nutrition planning, and telehealth integration.",
  //     results: "Over 100,000 downloads in the first quarter, with 70% user retention and positive App Store ratings.",
  //   },
  //   {
  //     id: 7,
  //     title: "EduVirtual Classroom",
  //     description: "Virtual classroom platform for remote learning",
  //     image: "/placeholder.svg?height=600&width=800&text=EduVirtual",
  //     category: "education",
  //     tags: ["React", "WebRTC", "Firebase"],
  //     link: "#",
  //     challenge: "An educational technology company needed a virtual classroom solution during the pandemic.",
  //     solution:
  //       "We created an interactive virtual classroom with video conferencing, collaborative whiteboards, and resource sharing.",
  //     results: "Enabled 50,000+ students to continue learning remotely, with 95% teacher satisfaction rate.",
  //   },
  //   {
  //     id: 8,
  //     title: "RetailPro Inventory System",
  //     description: "Advanced inventory management for retail chains",
  //     image: "/placeholder.svg?height=600&width=800&text=RetailPro",
  //     category: "ecommerce",
  //     tags: ["Angular", ".NET", "SQL Server"],
  //     link: "#",
  //     challenge: "A retail chain needed a centralized inventory system to manage stock across multiple locations.",
  //     solution:
  //       "We developed a comprehensive inventory management system with real-time tracking, predictive ordering, and analytics.",
  //     results:
  //       "Reduced stockouts by 65%, decreased inventory costs by 25%, and improved order fulfillment times by 40%.",
  //   },
  // ]
  const projects = [
    {
      id: 1,
      title: "Mondak",
      description: t("portfolio.mondak"),
      image: "/assets/projects/mondak.png?height=600&width=800",
      category: ["finance"],
      link: "/portfolio/mondak",
    },
    {
      id: 2,
      title: "Mayo Clinic",
      description: t("portfolio.mayo"),
      image: "/assets/projects/ypd.png?height=600&width=800",
      category: ["healthcare", "startup"],
      link: "/portfolio/fintrack",
    },
    {
      id: 3,
      title: "LuxBoutique Online Store",
      description: t("portfolio.luxboutique"),
      image: "/assets/projects/luxboutique.png?height=600&width=800",
      category: ["ecommerce"],
      link: "/portfolio/luxboutique",
    },
    {
      id: 4,
      title: "ShopEase",
      description: t("portfolio.shopease"),
      image: "/assets/projects/shopease.png?height=600&width=800",
      category: ["ecommerce"],
      link: "/portfolio/shopease",
    },
    {
      id: 5,
      title: "Global Tech Academy",
      description: t("portfolio.globaltechacademy"),
      image: "/assets/projects/globaltechacademy.png?height=600&width=800",
      category: ["education"],
      link: "/portfolio/globaltechacademy",
    },
    {
      id: 6,
      title: "SkillMaster Academy",
      description: t("portfolio.skillmaster"),
      image: "/assets/projects/skillmaster.png?height=600&width=800",
      category: ["education"],
      link: "/portfolio/skillmaster",
    },
    {
      id: 7,
      title: "International Hugson University Online",
      description: t("portfolio.hugson"),
      image: "/assets/projects/hugson.png?height=600&width=800",
      category: ["education"],
      link: "/portfolio/hugson",
    },
    {
      id: 8,
      title: "Stargate Medical Center",
      description: t("portfolio.stargate"),
      image: "/assets/projects/stargate.png?height=600&width=800",
      category: ["healthcare"],
      link: "/portfolio/stargate",
    },
    {
      id: 9,
      title: "Magic",
      description: t("portfolio.magic"),
      image: "/assets/projects/magic.png?height=600&width=800",
      category: ["finance", "startup"],
      link: "/portfolio/magic",
    },
    {
      id: 10,
      title: "RealPropery Agency",
      description: t("portfolio.real_property_agency"),
      image: "/assets/projects/real_property_agency.png?height=600&width=800",
      category: ["real-estate"],
      link: "/portfolio/real-property",
    },
  ];
  return (
    <div className="flex flex-col gap-20">
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("portfolio.title")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("portfolio.description")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-12 h-auto bg-transparent">
              {filters.map((filter) => (
                <TabsTrigger
                  key={filter.id}
                  value={filter.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground m-1"
                >
                  {filter.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {filters.map((filter) => (
              <TabsContent key={filter.id} value={filter.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter((project) => filter.id === "all" || project.category.includes(filter.id))
                    .map((project) => (
                      <div
                        key={project.id}
                        className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground mb-4">{project.description}</p>

                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/contact`}>
                              {t("portflio_page.view_details")} <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case studies section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("portflio_page.featured_title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("portflio_page.featured_description")}
            </p>
          </div>

          <div className="space-y-16">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`${project.id % 2 === 0 ? "md:order-last" : ""}`}>
                  <div className="rounded-lg overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-auto" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                  {project.category.map(cat => (
                    <Badge key={cat} className="mb-4">{cat.charAt(0).toUpperCase() + cat.slice(1)}</Badge>
                  ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

                  <Button asChild>
                    <Link href={`/contact`}>
                      {t("portflio_page.view_details")} <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

