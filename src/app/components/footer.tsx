"use client"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 bg-white text-center">
      <div className="max-w-sm mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.csiitt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm font-light"
            aria-label="Visit csiitt website"
          >
            csiitt
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
