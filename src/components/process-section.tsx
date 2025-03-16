"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, Search, PenTool, Code, TestTube, Rocket } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage();

const processes = [
  {
    id: 1,
    title: t("services.process_discovery_title"),
    description: t("services.process_discovery_description"),
    icon: <Lightbulb className="h-8 w-8" />,
  },
  {
    id: 2,
    title: t("services.process_research_title"),
    description: t("services.process_research_description"),
    icon: <Search className="h-8 w-8" />,
  },
  {
    id: 3,
    title: t("services.process_design_title"),
    description: t("services.process_design_description"),
    icon: <PenTool className="h-8 w-8" />,
  },
  {
    id: 4,
    title: t("services.process_developement_title"),
    description: t("services.process_developement_description"),
    icon: <Code className="h-8 w-8" />,
  },
  {
    id: 5,
    title: t("services.process_testing_title"),
    description: t("services.process_testing_description"),
    icon: <TestTube className="h-8 w-8" />,
  },
  {
    id: 6,
    title: t("services.process_launch_title"),
    description: t("services.process_launch_description"),
    icon: <Rocket className="h-8 w-8" />,
  },
];
  return (
    <section className="section" ref={ref}>
      <div className="container">
        <h2 className="section-title">{t("services.our_process_title")}</h2>
        <p className="section-subtitle">{t("services.our_process_description")}</p>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 md:space-y-0">
            {processes.map((process, index) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:items-center md:gap-8 relative`}
              >
                <div className="absolute left-1/2 top-8 w-8 h-8 bg-background border-4 border-primary rounded-full -translate-x-1/2 hidden md:block" />

                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4 md:hidden">
                  {process.id}
                </div>

                <div className={`md:w-5/12 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="bg-card p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center mb-4 gap-3 text-primary">
                      <div className={`${index % 2 === 0 ? "md:order-2" : ""}`}>{process.icon}</div>
                      <h3 className={`text-xl font-bold ${index % 2 === 0 ? "md:order-1" : ""}`}>{process.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>

                <div className="md:w-2/12 flex justify-center items-center py-4 md:py-0">
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {process.id}
                  </div>
                </div>

                <div className="md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

