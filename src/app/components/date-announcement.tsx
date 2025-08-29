"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function DateAnnouncement() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date("2025-09-14T00:00:00").getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleAddToCalendar = () => {
    const eventDetails = {
      title: "Wedding Reception",
      start: "20250914T000000Z",
      end: "20250914T030000Z",
      description: "Join us in celebrating our blessed union at our wedding reception!",
      location: "Reception Venue",
    }

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventDetails.title
    )}&dates=${eventDetails.start}/${eventDetails.end}&details=${encodeURIComponent(
      eventDetails.description
    )}&location=${encodeURIComponent(eventDetails.location)}`

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
      <div className="absolute inset-0 bg-white/85"></div>

      <div className="max-w-sm mx-auto relative z-10">
        {/* Bismillah image — slightly larger */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="bismillah.png"
            alt="Bismillah in Arabic calligraphy"
            className="mx-auto w-40 sm:w-52 lg:w-64 h-auto"
          />
        </motion.div>

        <motion.p
          className="text-gray-700 mb-8 -mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed font-serif"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Your gracious presence is requested at our Wedding Reception.
        </motion.p>

        {/* Date + beautiful day/time pill */}
        <motion.div
          className="mb-8"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-gray-800 mb-3">
            September 14th
          </h2>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 backdrop-blur px-4 py-1.5 sm:px-5 sm:py-2 text-gray-700 font-serif text-base sm:text-lg lg:text-xl shadow-sm">
              <span className="tracking-wide">Sunday</span>
              <span aria-hidden="true" className="text-gray-400">•</span>
              <span className="tabular-nums">
                <time dateTime="2025-09-14T18:00:00">6:00 pm</time>
                {" – "}
                <time dateTime="2025-09-14T21:00:00">9:00 pm</time>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-gray-800 mb-2 tabular-nums">
            {String(timeLeft.days).padStart(2, "0")}:
            {String(timeLeft.hours).padStart(2, "0")}:
            {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <p className="text-gray-500 text-lg sm:text-xl lg:text-2xl tracking-widest mb-6 font-serif">
            DD : HH : MM : SS
          </p>
        </motion.div>

        {/* Add to calendar */}
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