"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurStory() {
  return (
    <section className="relative h-96 w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Image src="/story.jpg" alt="Our love story" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          className="text-center text-white max-w-sm"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm leading-relaxed font-sans">
            Join us on this joyous journey of love and commitment as we promise each other a lifetime of happiness,
            laughter, and endless memories.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
