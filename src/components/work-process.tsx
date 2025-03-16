"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Lightbulb, PenTool, Code2, TestTube, Rocket, HeartHandshake } from "lucide-react"

export function WorkProcess() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Discovery",
      description: "We understand your business needs and objectives through in-depth consultation.",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Design",
      description: "Our designers create intuitive and engaging user experiences tailored to your audience.",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Development",
      description: "Our engineers build robust, scalable solutions using cutting-edge technologies.",
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Testing",
      description: "Rigorous quality assurance ensures your solution works flawlessly across all devices.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Deployment",
      description: "We launch your solution and ensure smooth operation in the production environment.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Support",
      description: "Ongoing maintenance and support to keep your solution running optimally.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("process.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("process.subtitle")}</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="bg-card rounded-lg p-6 h-full border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      {step.icon}
                    </div>
                    <span className="text-4xl font-bold text-primary/20">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connecting line (visible on larger screens) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 hidden lg:block" />
        </motion.div>
      </div>
    </section>
  )
}

