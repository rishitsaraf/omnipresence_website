"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "./button"
import { motion, AnimatePresence } from "framer-motion"

export function HiringBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if banner was previously closed
    const wasClosed = sessionStorage.getItem("hiringBannerClosed")
    if (!wasClosed) {
      setIsVisible(true)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem("hiringBannerClosed", "true")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 z-40 bg-red-500 text-white shadow-md"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-medium">🚀 We're Hiring for Interns!</span>
                <span>UI/UX & Front-End Intern (Founder’s Office)</span>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white text-red-500 hover:bg-white/90"
                  onClick={() => window.open("/careers", "_blank")}
                >
                  View Roles
                </Button>
                <button
                  onClick={handleClose}
                  className="rounded-full p-1 hover:bg-white/10 transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 