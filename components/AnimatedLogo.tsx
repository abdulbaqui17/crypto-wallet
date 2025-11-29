"use client"

import { motion } from 'framer-motion'

export default function AnimatedLogo() {
  return (
    <div className="flex items-center justify-center mb-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-400 to-green-400 flex items-center justify-center shadow-2xl">
          <svg width="56" height="56" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" rx="40" fill="white" fillOpacity="0.06" />
            <path d="M128 40L216 128L128 216L40 128L128 40Z" fill="white" />
          </svg>
        </div>
      </motion.div>
    </div>
  )
}
