"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

import styles from "./hero-banner.module.css"
import { useRouter } from "next/navigation";

export default function HeroBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage();
  const router = useRouter();
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bannerRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = bannerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      bannerRef.current.style.setProperty("--mouse-x", `${x}`)
      bannerRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={bannerRef}
      className={styles.heroBanner}
      style={{
        backgroundPosition:
          "calc(50% + calc(var(--mouse-x, 0.5) * 20px - 10px)) calc(50% + calc(var(--mouse-y, 0.5) * 20px - 10px))",
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.gradientOverlay} />
        <div className={styles.topBorder} />
        <div className={styles.bottomBorder} />

        <motion.div
          className={`${styles.animatedShape} ${styles.blue}`}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className={`${styles.animatedShape} ${styles.purple}`}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container">
        <div className={styles.content}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1>
              {t("hero.title")}
              <span className={`${styles.highlight} gradient-text`}></span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>{t("hero.subtitle")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={styles.buttons}
          >
              <Button size="lg" className="text-base" onClick={() => router.push("/contact")}>
        {t("hero.cta.start")}
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="text-base bg-white"
        onClick={() => router.push("/portfolio")}
      >
        {t("hero.cta.work")}
      </Button>
          </motion.div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <div className={styles.mouse}>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className={styles.wheel}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

