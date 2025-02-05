"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Code, FlaskRoundIcon as Flask, Globe, Music, Palette, ChevronUp, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const subjects = [
  { name: "Literature", icon: BookOpen, color: "bg-yellow-500" },
  { name: "Programming", icon: Code, color: "bg-blue-500" },
  { name: "Science", icon: Flask, color: "bg-green-500" },
  { name: "History", icon: Globe, color: "bg-red-500" },
  { name: "Music", icon: Music, color: "bg-purple-500" },
  { name: "Art", icon: Palette, color: "bg-pink-500" },
]

const sebasVideoUrl = "https://www.youtube.com/embed/NWdEOAYm4FA?si=2no_Ga-7zJZ_S4CW&autoplay=1"

const videos = [
  { id: 1, subject: "Literature", title: "Shakespeare in 60 Seconds", url: "/placeholder.svg?height=720&width=405" },
  { id: 2, subject: "Programming", title: "Quick React Hooks Tutorial", url: "/placeholder.svg?height=720&width=405" },
  { id: 3, subject: "Science", title: "The Big Bang Theory Explained", url: "/placeholder.svg?height=720&width=405" },
  { id: 4, subject: "Programming", title: "Login for Sebas", url: sebasVideoUrl },
]

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState("up")

  const currentVideo = videos[currentVideoIndex]

  const changeVideo = (direction: "up" | "down") => {
    setSlideDirection(direction)
    if (direction === "up") {
      setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
    } else {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }
  }

  const slideVariants = {
    enterUp: { y: "100%", opacity: 0 },
    centerUp: { y: 0, opacity: 1 },
    exitUp: { y: "-100%", opacity: 0 },
    enterDown: { y: "-100%", opacity: 0 },
    centerDown: { y: 0, opacity: 1 },
    exitDown: { y: "100%", opacity: 0 },
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-16 border-r flex flex-col items-center py-4 space-y-6">
        {subjects.map((subject) => (
          <Button key={subject.name} variant="ghost" size="icon" className={`rounded-full p-2 ${subject.color}`}>
            <subject.icon className="w-6 h-6 text-white" />
          </Button>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            leeaarn
          </h1>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search videos..." className="w-64" />
            <Button variant="outline">Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </header>

        {/* Video feed */}
        <div className="flex-1 flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVideo.id}
              variants={slideVariants}
              initial={slideDirection === "up" ? "enterUp" : "enterDown"}
              animate={slideDirection === "up" ? "centerUp" : "centerDown"}
              exit={slideDirection === "up" ? "exitUp" : "exitDown"}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {currentVideo.url.includes('youtube.com') ? (
                <iframe
                  src={currentVideo.url}
                  title={currentVideo.title}
                  className="max-h-[80vh] w-[80vw] h-[80vh] rounded-lg shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={currentVideo.url || "/placeholder.svg"}
                  alt={currentVideo.title}
                  className="max-h-[80vh] rounded-lg shadow-lg"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h2 className="text-xl font-bold">{currentVideo.title}</h2>
                <p className="text-sm opacity-75">{currentVideo.subject}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => changeVideo("up")}
              className="text-gray-800 hover:bg-gray-100"
            >
              <ChevronUp className="w-8 h-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => changeVideo("down")}
              className="text-gray-800 hover:bg-gray-100"
            >
              <ChevronDown className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
