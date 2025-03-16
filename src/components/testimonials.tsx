"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, HealthPlus",
      company: "HealthPlus",
      avatar: "/placeholder.svg?height=100&width=100&text=SJ",
      content:
        "TechSolutions transformed our healthcare platform, improving patient engagement by 45%. Their expertise in healthcare IT is unmatched.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, EduTech",
      company: "EduTech",
      avatar: "/placeholder.svg?height=100&width=100&text=MC",
      content:
        "The learning management system developed by TechSolutions has revolutionized how we deliver educational content. Student satisfaction has increased dramatically.",
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Marketing Director, ShopNow",
      company: "ShopNow",
      avatar: "/placeholder.svg?height=100&width=100&text=JW",
      content:
        "Our e-commerce sales increased by 60% after implementing TechSolutions' custom platform. Their attention to detail and user experience expertise made all the difference.",
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "CFO, FinanceHub",
      company: "FinanceHub",
      avatar: "/placeholder.svg?height=100&width=100&text=DR",
      content:
        "TechSolutions delivered a secure, compliant fintech solution that exceeded our expectations. Their understanding of financial regulations was impressive.",
    },
  ]

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="border-none shadow-lg bg-primary/5">
                <CardContent className="pt-10 pb-10">
                  <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/20" />
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0">
                      <Avatar className="h-24 w-24 border-4 border-primary/10">
                        <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].name} />
                        <AvatarFallback>
                          {testimonials[current].name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="text-center md:text-left">
                      <blockquote className="text-xl mb-4 italic">"{testimonials[current].content}"</blockquote>
                      <div>
                        <p className="font-bold text-lg">{testimonials[current].name}</p>
                        <p className="text-muted-foreground">
                          {testimonials[current].role}, {testimonials[current].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`h-3 w-3 rounded-full transition-colors ${
                  current === index ? "bg-primary" : "bg-primary/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 rounded-full hidden md:flex"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rounded-full hidden md:flex"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

