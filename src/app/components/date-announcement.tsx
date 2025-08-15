"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function DateAnnouncement() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Set target date to September 3, 2025
    const targetDate = new Date("2025-09-03T00:00:00").getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleAddToCalendar = () => {
    const eventDetails = {
      title: "Engagement Ceremony",
      start: "20250903T000000Z",
      end: "20250903T030000Z",
      description: "Join us in celebrating our love at our engagement ceremony!",
      location: "Ceremony Venue",
    }

    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.start}/${eventDetails.end}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`

    window.open(googleCalendarUrl, "_blank")
  }

  return (
    <section
      className="py-12 px-6 text-center bg-white relative overflow-hidden"
      style={{
        backgroundImage: "url(/date.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay for opacity */}
      <div className="absolute inset-0 bg-white/85"></div>

      <div className="max-w-sm mx-auto relative z-10">
        <motion.p
          className="text-gray-700 mb-8 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-serif"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Join us in celebrating our love at our Nikkah ceremony!
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-gray-800 mb-2">September 3rd</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-serif font-light mb-6">Tuesday</p>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-gray-800 mb-2">
            {String(timeLeft.hours).padStart(2, "0")}.{String(timeLeft.minutes).padStart(2, "0")}.
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <p className="text-gray-500 text-lg sm:text-xl lg:text-2xl tracking-widest mb-6 font-serif">
            H H . M M . S S
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleAddToCalendar}
            className="bg-red-200 text-gray-700 hover:bg-gray-100 bg-gray-50/80 px-6 sm:px-8 py-2 sm:py-3
             text-lg sm:text-xl font-serif font-medium rounded-full transition-all duration-300 
             hover:border-gray-600 hover:shadow-md"
          >
            Add to calendar
          </button>
        </motion.div>
      </div>
    </section>
  )
}
