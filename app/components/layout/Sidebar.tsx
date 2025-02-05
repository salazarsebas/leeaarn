import { Button } from "@/components/ui/button"
import { SubjectIcon } from "@/app/components/icons/SubjectIcon"
import { Tooltip } from "@/components/ui/tooltip"
import { Subject } from "@/app/types"

interface SidebarProps {
  subjects: Subject[]
}

export function Sidebar({ subjects }: SidebarProps) {
  return (
    <div className="w-16 border-r border-gray-800 flex flex-col items-center py-4 space-y-6">
      {subjects.map((subject) => (
        <Tooltip key={subject.name} content="Category filter coming soon">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full p-2 ${subject.color}`}
          >
            <SubjectIcon icon={subject.icon} className="w-6 h-6 text-white" />
          </Button>
        </Tooltip>
      ))}
    </div>
  )
}
