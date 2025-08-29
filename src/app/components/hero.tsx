"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { useCallback, useState, useEffect } from "react"

const slides = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(goNext, 5000)
    return () => clearInterval(id)
  }, [goNext, isPaused])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        goNext()
      }
    },
    [goNext],
  )

  return (
    <section
      className="relative h-screen w-full overflow-hidden cursor-pointer"
      onClick={goNext}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      role="button"
      aria-label="Next background image"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.06 }}
              animate={{ scale: i === index ? 1 : 1.02 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt="Background slide"
                fill
                className="object-cover object-center"
                priority={i === index}
              />
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          className="absolute inset-0 bg-black/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 -mt-80">
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 tracking-wide leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Ameen & Resmiya
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-light tracking-widest"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          Save the Date
        </motion.p>
      </div>
    </section>
  )
}
