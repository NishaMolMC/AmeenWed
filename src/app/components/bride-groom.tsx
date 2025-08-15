"use client"

import { motion } from "framer-motion"

export default function BrideGroom() {
  return (
    <section
      className="py-16 px-6 relative overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="max-w-2xl mx-auto -mt-12 relative z-10">
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-serif font-semibold text-center mb-12 text-gray-800"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Bride & Groom
          </motion.h2>

          <div className="space-y-8">
            {/* Groom */}
            <div className="text-center">
              <h3 className="text-2xl font-serif font-medium mb-4 text-gray-800">Johny</h3>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  The son of Mr. & Mrs. Brown James & Mr. James Practical House, Pune.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Grand Son of Mr. & Mrs. Jolly & Mr. Jolly Practical House, Pune, Tamilnadu.
                </p>
              </div>
            </div>

            {/* Bride */}
            <div className="text-center">
              <h3 className="text-2xl font-serif font-medium mb-4 text-gray-800">June</h3>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  The daughter of Mr. & Mrs. Brown James & Mr. James Practical House, Pune.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Grand Daughter of Mr. & Mrs. Jolly & Mr. Jolly Practical House, Pune, Tamilnadu.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
