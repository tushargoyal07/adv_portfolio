"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <motion.div
      className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => setShow(false)}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white flex flex-col items-center"
      >
        <div className="bg-white rounded-full p-4 mb-4">
          <div className="h-16 w-16 relative">
            <svg viewBox="0 0 100 100" className="h-16 w-16">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#2F4858" strokeWidth="8" />
              <rect x="35" y="20" width="30" height="60" fill="#2F4858" />
            </svg>
          </div>
        </div>
        <motion.h1
          className="text-3xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Rakesh Associates
        </motion.h1>
      </motion.div>
    </motion.div>
  )
}

