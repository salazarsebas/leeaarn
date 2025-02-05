import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

interface VideoControlsProps {
  onChangeVideo: (direction: "up" | "down") => void
}

export function VideoControls({ onChangeVideo }: VideoControlsProps) {
  return (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onChangeVideo("up")}
        className="text-gray-800 hover:bg-gray-100"
      >
        <ChevronUp className="w-8 h-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onChangeVideo("down")}
        className="text-gray-800 hover:bg-gray-100"
      >
        <ChevronDown className="w-8 h-8" />
      </Button>
    </div>
  )
}
