"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function MapSection() {
  const [isHovered, setIsHovered] = useState(false)

  // Wedding venue coordinates (Wayanad, Kerala)
  const venueLocation = {
    lat: 11.6854,
    lng: 76.132,
    name: "Grand Wedding Resort",
    address: "Vythiri, Wayanad, Kerala 673576",
    landmark: "Near Pookode Lake",
  }

  const handleLocationClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${venueLocation.lat},${venueLocation.lng}`
    window.open(googleMapsUrl, "_blank")
  }

  const handleGetDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${venueLocation.lat},${venueLocation.lng}`
    window.open(directionsUrl, "_blank")
  }

  return (
    <section className="py-12 px-6 bg-white/90">
      <div className="max-w-sm mx-auto">
        {/* Map Container */}
        <motion.div
          className="relative bg-white rounded-lg shadow-sm overflow-hidden mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Interactive Map Area */}
          <motion.div
            className="h-48 cursor-pointer relative overflow-hidden"
            onClick={handleLocationClick}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Map Background with Realistic Elements */}
            <div className="w-full h-full bg-gradient-to-br from-emerald-50 via-blue-50 to-green-100 relative">
              {/* Animated Road Lines */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: isHovered ? 0.6 : 0.3 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-full h-full" viewBox="0 0 300 200">
                  {/* Main Roads */}
                  <motion.path
                    d="M50,100 Q150,80 250,100"
                    stroke="#94a3b8"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.path
                    d="M150,50 Q150,100 150,150"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="3,3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />

                  {/* Decorative Elements */}
                  <circle cx="80" cy="70" r="4" fill="#10b981" opacity="0.4" />
                  <circle cx="220" cy="130" r="3" fill="#3b82f6" opacity="0.4" />
                  <rect x="120" y="40" width="6" height="6" fill="#10b981" opacity="0.3" rx="1" />
                  <rect x="200" y="160" width="4" height="4" fill="#3b82f6" opacity="0.3" rx="1" />
                </svg>
              </motion.div>

              {/* Venue Location Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  {/* Pin Shadow */}
                  <motion.div
                    className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-black/10 rounded-full blur-sm"
                    animate={{
                      scale: [1, 0.8, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Main Pin */}
                  <motion.div
                    className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg relative"
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      boxShadow: [
                        "0 4px 20px rgba(239, 68, 68, 0.3)",
                        "0 4px 30px rgba(239, 68, 68, 0.5)",
                        "0 4px 20px rgba(239, 68, 68, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>

                  {/* Pin Tail */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-red-500"></div>
                </motion.div>
              </div>

              {/* Ripple Effect on Hover */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="w-16 h-16 border-2 border-red-300 rounded-full"
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
              )}

              {/* Click Instruction */}
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3 }}
              >
                Click to open in Maps
              </motion.div>
            </div>
          </motion.div>

          {/* Venue Information */}
          <motion.div
            className="p-4 bg-white"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium text-gray-800 mb-1">{venueLocation.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{venueLocation.address}</p>
            <p className="text-xs text-gray-500">{venueLocation.landmark}</p>
          </motion.div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleGetDirections}
            className="border border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-2 text-sm bg-transparent rounded-md transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Directions
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
