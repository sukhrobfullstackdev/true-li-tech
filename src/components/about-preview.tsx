"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Clock, Zap } from "lucide-react"
import Link from "next/link"

export function AboutPreview() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "50+",
      label: "Team Members",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "200+",
      label: "Projects Completed",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      value: "98%",
      label: "Client Satisfaction",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.title")}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              TechSolutions is a leading IT agency specializing in custom software development, web applications, and
              digital transformation for businesses across various industries.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experienced developers, designers, and strategists work together to deliver innovative
              solutions that drive business growth and enhance user experiences.
            </p>
            <Button asChild>
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg p-6 text-center border shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

