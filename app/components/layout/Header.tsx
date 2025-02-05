import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b p-4 flex justify-between items-center">
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
        <Input type="search" placeholder="Search videos..." className="w-64" />
        <Button variant="outline">Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  )
}
