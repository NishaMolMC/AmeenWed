"use client"

import { motion } from "framer-motion"

export default function Quote() {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="max-w-sm mx-auto text-center">
        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl text-gray-400 font-serif">"</div>
        </motion.div>

        <motion.blockquote
          className="text-lg text-gray-700 font-light leading-relaxed italic"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I have found some one whom my soul loves.
        </motion.blockquote>
      </div>
    </section>
  )
}
