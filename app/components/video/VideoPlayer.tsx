import { motion } from "framer-motion"
import { Video } from "@/app/types"
import { VideoInteractions } from "./VideoInteractions"

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
      className="relative flex items-center justify-center w-full h-full"
    >
      <div className="relative w-[calc(100vh*9/16)] max-w-[500px] h-[80vh] bg-black rounded-lg overflow-hidden">
        {video.url.endsWith('.mp4') && (
          <video
            src={video.url}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onClick={(e) => {
              const video = e.currentTarget;
              if (video.paused) {
                video.play();
              } else {
                video.pause();
              }
            }}
          />
        )}
        <VideoInteractions
          videoId={video.id}
          initialLikes={video.likes}
          initialComments={video.comments}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
          <p className="text-sm font-medium mb-1">@{video.author}</p>
          <h2 className="text-xl font-bold">{video.title}</h2>
          <p className="text-sm opacity-75">{video.subject}</p>
        </div>
      </div>
    </motion.div>
  )
}
