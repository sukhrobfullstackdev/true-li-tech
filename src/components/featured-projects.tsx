"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export function FeaturedProjects() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "healthcare", label: "Healthcare" },
    { id: "finance", label: "Finance" },
    { id: "education", label: "Education" },
    { id: "tech", label: "Technology" },
  ]

  const projects = [
    {
      id: 1,
      title: "MediConnect Health Platform",
      description: "A comprehensive telemedicine platform for healthcare providers",
      image: "/placeholder.svg?height=600&width=800&text=MediConnect",
      category: "healthcare",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "EduLearn LMS",
      description: "Learning management system for educational institutions",
      image: "/placeholder.svg?height=600&width=800&text=EduLearn",
      category: "education",
      tags: ["Next.js", "PostgreSQL", "AWS"],
      link: "#",
    },
    {
      id: 3,
      title: "FinTrack Investment Platform",
      description: "Financial tracking and investment management application",
      image: "/placeholder.svg?height=600&width=800&text=FinTrack",
      category: "finance",
      tags: ["React", "Firebase", "Chart.js"],
      link: "#",
    },
    {
      id: 4,
      title: "ShopEase E-commerce",
      description: "Full-featured e-commerce platform with inventory management",
      image: "/placeholder.svg?height=600&width=800&text=ShopEase",
      category: "ecommerce",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 5,
      title: "TechCloud SaaS Platform",
      description: "Cloud-based software service for technology startups",
      image: "/placeholder.svg?height=600&width=800&text=TechCloud",
      category: "tech",
      tags: ["Vue.js", "Node.js", "Docker"],
      link: "#",
    },
    {
      id: 6,
      title: "HealthTrack Fitness App",
      description: "Fitness tracking and wellness monitoring application",
      image: "/placeholder.svg?height=600&width=800&text=HealthTrack",
      category: "healthcare",
      tags: ["React Native", "Express", "MongoDB"],
      link: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("portfolio.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="mb-2"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.link}>
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/portfolio">
              {t("all.view_all_projects")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

