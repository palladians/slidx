import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { BoxesIcon, LayoutDashboardIcon, SettingsIcon, UsersIcon, UserIcon } from 'lucide-react'

export const Sidebar = () => {
  return (
    <aside id="sidebar" className="h-full w-64" aria-label="Sidebar">
      <div className="flex flex-col border-r gap-8 p-4 h-full">
        <a href="#" className="flex gap-2 items-center ml-8">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-background invert">A</AvatarFallback>
          </Avatar>
          <span className="ml-3 text-base font-semibold">Acme</span>
        </a>
        <div className="flex flex-col flex-1 gap-4">
          <Button size="lg" variant="ghost" className="justify-start gap-4">
            <LayoutDashboardIcon />
            <span>Dashboard</span>
          </Button>
          <Button size="lg" variant="ghost" className="justify-start gap-4">
            <UsersIcon />
            <span>Customers</span>
          </Button>
          <Button size="lg" variant="ghost" className="justify-start gap-4">
            <BoxesIcon />
            <span>Products</span>
          </Button>
          <Button size="lg" variant="ghost" className="justify-start gap-4">
            <SettingsIcon />
            <span>Settings</span>
          </Button>
        </div>
        <div className="mt-auto flex flex-col">
          <Button size="lg" variant="ghost" className="justify-start gap-4">
            <UserIcon />
            <span>user@email.com</span>
          </Button>
        </div>
      </div>
    </aside >
  )
}
