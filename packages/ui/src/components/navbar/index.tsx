import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"

export const Navbar = () => {
  return (
    <div className="border-b bg-background py-2">
      <nav className="container flex justify-between gap-8">
        <a href="/" className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-background invert">A</AvatarFallback>
          </Avatar>
          <span className="text-lg font-semibold">Acme</span>
        </a>
        <div className="hidden md:flex flex-1 items-center">
          <Button variant="link">About</Button>
          <Button variant="link">Contact</Button>
        </div>
        <div className="hidden md:flex items-center">
          <Button size="sm">Dashboard</Button>
        </div>
        <div className="flex md:hidden items-center">
          <Button size="sm">
            <MenuIcon size={16} />
          </Button>
        </div>
      </nav>
    </div>
  )
}
