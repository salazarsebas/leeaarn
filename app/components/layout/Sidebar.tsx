import { Button } from "@/components/ui/button"
import { SubjectIcon } from "@/app/components/icons/SubjectIcon"
import { Subject } from "@/app/types"

interface SidebarProps {
  subjects: Subject[]
}

export function Sidebar({ subjects }: SidebarProps) {
  return (
    <div className="w-16 border-r flex flex-col items-center py-4 space-y-6">
      {subjects.map((subject) => (
        <Button
          key={subject.name}
          variant="ghost"
          size="icon"
          className={`rounded-full p-2 ${subject.color}`}
        >
          <SubjectIcon icon={subject.icon} className="w-6 h-6 text-white" />
        </Button>
      ))}
    </div>
  )
}
