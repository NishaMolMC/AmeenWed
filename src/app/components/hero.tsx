"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src="/hero.jpg"
          alt="Johny and June walking together"
          fill
          className="object-cover object-center"
          priority
        />
        <motion.div
          className="absolute inset-0 bg-black/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 -mt-48">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-4 tracking-wide leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Johny & June
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
