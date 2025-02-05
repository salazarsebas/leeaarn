import { LucideIcon } from "lucide-react"

export interface Subject {
  name: string
  icon: LucideIcon
  color: string
}

export interface Video {
  id: number
  subject: string
  title: string
  url: string
}
