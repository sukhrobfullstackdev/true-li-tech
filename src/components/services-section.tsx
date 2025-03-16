"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ShoppingCart,
  Heart,
  BarChart3,
  GraduationCap,
  Home,
  Plane,
  MonitorSmartphone,
  Utensils,
  Dumbbell,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useLanguage } from "./language-provider"

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const { t } = useLanguage();
  const services = [
    {
      id: 1,
      title: t("services.e_commerce_title"),
      description: t("services.e_commerce_description"),
      icon: <ShoppingCart className="h-10 w-10" />,
      href: "/services/ecommerce",
    },
    {
      id: 2,
      title: t("services.healthcare_title"),
      description: t("services.healthcare_description"),
      icon: <Heart className="h-10 w-10" />,
      href: "/services/healthcare",
    },
    {
      id: 3,
      title: t("services.finance_and_fintech_title"),
      description: t("services.finance_and_fintech_description"),
      icon: <BarChart3 className="h-10 w-10" />,
      href: "/services/fintech",
    },
    {
      id: 4,
      title: t("services.education_title"),
      description: t("services.education_description"),
      icon: <GraduationCap className="h-10 w-10" />,
      href: "/services/education",
    },
    {
      id: 5,
      title: t("services.real_estate_title"),
      description: t("services.real_estate_description"),
      icon: <Home className="h-10 w-10" />,
      href: "/services/real-estate",
    },
    {
      id: 6,
      title: t("services.tourism_title"),
      description:t("services.tourism_description"),
      icon: <Plane className="h-10 w-10" />,
      href: "/services/hospitality",
    },
    {
      id: 7,
      title: t("services.tourism_title"),
      description: t("services.tourism_description"),
      icon: <MonitorSmartphone className="h-10 w-10" />,
      href: "/services/saas",
    },
    {
      id: 8,
      title: t("services.food_beverage_title"),
      description: t("services.food_beverage_description"),
      icon: <Utensils className="h-10 w-10" />,
      href: "/services/food-beverage",
    },
    {
      id: 9,
      title: t("services.fitness_title"),
      description: t("services.fitness_description"),
      icon: <Dumbbell className="h-10 w-10" />,
      href: "/services/fitness",
    },
  ]
  return (
    <section className="section bg-muted/50">
      <div className="container">
        <h2 className="section-title">{t("services.title")}</h2>
        <p className="section-subtitle">{t("services.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className={`card-hover h-full ${hoveredId === service.id ? "" : ""}`}>
                <CardHeader>
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={service.href} className="text-primary hover:underline inline-flex items-center">
                    {t("services.learn_more")} <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

