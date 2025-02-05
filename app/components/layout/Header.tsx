import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FaSearchengin } from "react-icons/fa"
import { Tooltip } from "@/components/ui/tooltip"

export function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/logo.webp"
          alt="leeaarn logo"
          width={90}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Tooltip content="Search feature coming soon">
          <Button variant="ghost">
            <FaSearchengin />
          </Button>
        </Tooltip>
        <Tooltip content="Join feature coming soon">
          <Button>Join</Button>
        </Tooltip>
      </div>
    </header>
  )
}
