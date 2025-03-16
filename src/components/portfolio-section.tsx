"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "./language-provider"


export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { t } = useLanguage();
  const categories = [
    { id: "all", label: t("portfolio.all_projects")},
    { id: "ecommerce", label: t("portfolio.e_commerce")},
    { id: "healthcare", label: t("portfolio.healthcare")},
    { id: "finance", label: t("portfolio.finance")},
    { id: "education", label: t("portfolio.education")},
    { id: "real-estate", label: t("portfolio.real_estate")},
    { id: "startup", label: t("portfolio.startup")},
  ];
  
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
  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category.includes(activeCategory));

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t("portfolio.title")}</h2>
        <p className="section-subtitle">{t("portfolio.description")}</p>

        <Tabs defaultValue="all" className="mt-12 w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center items-center mb-12">
            <TabsList className="flex flex-wrap justify-center h-auto bg-transparent">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground m-1">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-lg border bg-card transition-all">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className={`absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 ${hoveredId === project.id ? "opacity-100" : ""}`}
                        >
                          <Link href={"/portfolio"}>
                            <Button
                              variant="outline"
                              className="text-white border-white hover:bg-white/20 hover:text-white"
                            >
                              {t("all.view_all_projects")} <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                        <div className="mt-4 flex gap-1">
                          {project.category.map((category) => (
                            <span key={category} className="inline-block px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                            {categories.find((c) => c.id === category)?.label}
                          </span>
                          ))}
                          
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/portfolio">{t("all.view_all_projects")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

