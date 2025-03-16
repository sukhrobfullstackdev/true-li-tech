"use client"

import { motion } from "framer-motion"
import { FileSearch, Lightbulb, Code, Rocket, BarChart, Headphones } from "lucide-react"

const steps = [
  {
    icon: <FileSearch className="h-8 w-8" />,
    title: "Discovery",
    description: "We start by understanding your business, goals, and challenges through in-depth consultation.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Strategy & Planning",
    description: "Our team develops a comprehensive strategy and project roadmap tailored to your needs.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Design & Development",
    description: "We create intuitive designs and build robust, scalable solutions using cutting-edge technologies.",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Launch",
    description: "After thorough testing, we deploy your solution and ensure a smooth transition to the new system.",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Growth & Optimization",
    description: "We continuously monitor performance and implement improvements to maximize ROI.",
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Ongoing Support",
    description: "Our dedicated support team ensures your solution remains up-to-date and performs optimally.",
  },
]

export default function ProcessFlow() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Process</h2>
            <p className="text-lg text-muted-foreground">
              We follow a proven methodology to deliver successful digital solutions that meet your business objectives.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground z-10">
                  {step.icon}
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"></div>
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

