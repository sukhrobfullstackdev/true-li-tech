"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, HealthPlus",
    company: "HealthPlus",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "TechSolutions transformed our healthcare platform, improving patient engagement by 45%. Their expertise in healthcare IT is unmatched, and they delivered a secure, compliant solution that exceeded our expectations.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO, ShopStream",
    company: "ShopStream",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "Working with TechSolutions on our e-commerce platform was a game-changer. They understood our unique challenges and delivered a scalable solution that increased our conversion rates by 32%.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Director of Innovation, EduTech",
    company: "EduTech",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "The learning management system developed by TechSolutions revolutionized how we deliver education. Student engagement is up, and our administrative workload is down. A true win-win partnership.",
  },
  {
    id: 4,
    name: "David Williams",
    position: "CFO, FinanceHub",
    company: "FinanceHub",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "Security and performance were our top priorities, and TechSolutions delivered on both fronts. Our financial platform is now faster, more secure, and our clients have noticed the difference.",
  },
  {
    id: 5,
    name: "Jessica Lee",
    position: "Marketing Director, PropertyFinder",
    company: "PropertyFinder",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "The real estate platform TechSolutions built for us has transformed our business. The virtual tour feature alone has increased property inquiries by 60%. Highly recommended!",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="section bg-muted/50">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>

        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div className="relative h-[400px] md:h-[300px]">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute w-full"
                onHoverStart={() => setAutoplay(false)}
                onHoverEnd={() => setAutoplay(true)}
              >
                <Card className="border-none shadow-lg bg-card">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/4 flex flex-col items-center text-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                          <Image
                            src={testimonials[currentIndex].image || "/placeholder.svg"}
                            alt={testimonials[currentIndex].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
                        <p className="text-muted-foreground text-sm">{testimonials[currentIndex].position}</p>
                        <p className="text-primary font-medium text-sm">{testimonials[currentIndex].company}</p>
                      </div>

                      <div className="md:w-3/4">
                        <Quote className="h-10 w-10 text-primary/20 mb-4" />
                        <p className="text-lg italic">"{testimonials[currentIndex].content}"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full p-2 bg-white">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full p-2 bg-white">
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

