"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { BookOpen, Code, FlaskRoundIcon as Flask, Globe, Music, Palette } from "lucide-react"
import { Tooltip } from "@/components/ui/tooltip"

import { Header } from "@/app/components/layout/Header"
import { Sidebar } from "@/app/components/layout/Sidebar"
import { VideoPlayer } from "@/app/components/video/VideoPlayer"
import { VideoControls } from "@/app/components/video/VideoControls"
import type { Subject, Video } from "@/app/types"

const subjects: Subject[] = [
  { name: "Literature", icon: BookOpen, color: "bg-yellow-500" },
  { name: "Programming", icon: Code, color: "bg-blue-500" },
  { name: "Science", icon: Flask, color: "bg-green-500" },
  { name: "History", icon: Globe, color: "bg-red-500" },
  { name: "Music", icon: Music, color: "bg-purple-500" },
  { name: "Art", icon: Palette, color: "bg-pink-500" },
]

const videos: Video[] = [
  {
    id: 1,
    subject: "Literature",
    title: "Shakespeare in 60 Seconds",
    url: "/learn_france.mp4",
    likes: 124,
    comments: 15,
    author: "french_teacher"
  },
  {
    id: 2,
    subject: "Programming",
    title: "Quick React Hooks Tutorial",
    url: "/learn_corean.mp4",
    likes: 89,
    comments: 8,
    author: "korean_master"
  },
  {
    id: 3,
    subject: "Science",
    title: "The Big Bang Theory Explained",
    url: "/learn_spanish.mp4",
    likes: 256,
    comments: 42,
    author: "spanish_tutor"
  }
]

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<"up" | "down">("up")

  const currentVideo = videos[currentVideoIndex]

  const changeVideo = (direction: "up" | "down") => {
    setSlideDirection(direction)
    if (direction === "up") {
      setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
    } else {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }
  }

  return (
    <div className="flex h-screen bg-white">
      <Sidebar subjects={subjects} />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <div className="flex-1 flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <VideoPlayer
              video={currentVideo}
              slideDirection={slideDirection}
            />
          </AnimatePresence>
          <VideoControls onChangeVideo={changeVideo} />
        </div>
      </div>
    </div>
  )
}
