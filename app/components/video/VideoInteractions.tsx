import { useState } from 'react'
import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface VideoInteractionsProps {
  videoId: number
  initialLikes?: number
  initialComments?: number
}

export function VideoInteractions({ videoId, initialLikes = 0, initialComments = 0 }: VideoInteractionsProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [liked, setLiked] = useState(false)
  const [showComments, setShowComments] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLikes(prev => prev - 1)
    } else {
      setLikes(prev => prev + 1)
    }
    setLiked(!liked)
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Check out this video on leeaarn',
        url: `${window.location.origin}/video/${videoId}`,
      })
    } catch (error) {
      // Fallback for browsers that don't support native sharing
      console.log('Sharing not supported')
    }
  }

  return (
    <div className="absolute bottom-20 right-4 flex flex-col space-y-4">
      <div className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLike}
          className={`rounded-full bg-gray-800/50 hover:bg-gray-700/50 ${
            liked ? 'text-red-500' : 'text-white'
          }`}
        >
          <Heart className={`w-6 h-6 ${liked ? 'fill-current' : ''}`} />
        </Button>
        <span className="text-white text-sm mt-1">{likes}</span>
      </div>

      <div className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowComments(!showComments)}
          className="rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-white"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        <span className="text-white text-sm mt-1">{initialComments}</span>
      </div>

      <div className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleShare}
          className="rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-white"
        >
          <Share2 className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
