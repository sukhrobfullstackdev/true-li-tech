"use client"

import { motion } from "framer-motion"
import { Users, Award, Clock, Globe } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "200+",
    label: "Clients Worldwide",
    description: "Trusted by businesses across industries",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "50+",
    label: "Industry Awards",
    description: "Recognition for excellence in digital solutions",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    value: "10+",
    label: "Years Experience",
    description: "Decade of delivering innovative solutions",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    value: "500+",
    label: "Projects Completed",
    description: "Successful implementations across sectors",
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="font-medium mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

