import { motion } from "framer-motion"
import { Video } from "@/app/types"

interface VideoPlayerProps {
  video: Video
  slideDirection: "up" | "down"
}

export function VideoPlayer({ video, slideDirection }: VideoPlayerProps) {
  const slideVariants = {
    enterUp: { y: "100%", opacity: 0 },
    centerUp: { y: 0, opacity: 1 },
    exitUp: { y: "-100%", opacity: 0 },
    enterDown: { y: "-100%", opacity: 0 },
    centerDown: { y: 0, opacity: 1 },
    exitDown: { y: "100%", opacity: 0 },
  }

  return (
    <motion.div
      key={video.id}
      variants={slideVariants}
      initial={slideDirection === "up" ? "enterUp" : "enterDown"}
      animate={slideDirection === "up" ? "centerUp" : "centerDown"}
      exit={slideDirection === "up" ? "exitUp" : "exitDown"}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {video.url.includes('youtube.com') ? (
        <iframe
          src={video.url}
          title={video.title}
          className="max-h-[80vh] w-[80vw] h-[80vh] rounded-lg shadow-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <img
          src={video.url || "/placeholder.svg"}
          alt={video.title}
          className="max-h-[80vh] rounded-lg shadow-lg"
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
        <h2 className="text-xl font-bold">{video.title}</h2>
        <p className="text-sm opacity-75">{video.subject}</p>
      </div>
    </motion.div>
  )
}
