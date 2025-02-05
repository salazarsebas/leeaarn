import { LucideIcon } from "lucide-react"

interface SubjectIconProps {
  icon: LucideIcon
  className?: string
}

export function SubjectIcon({ icon: Icon, className }: SubjectIconProps) {
  return <Icon className={className} />
}
