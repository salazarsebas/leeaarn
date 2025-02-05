import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FaSearchengin } from "react-icons/fa";

export function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/logo.webp"
          alt="leeaarn logo"
          width={50}
          height={30}
          className="object-contain"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost">
          <FaSearchengin />
        </Button>
        <Button>Join</Button>
      </div>
    </header>
  )
}
