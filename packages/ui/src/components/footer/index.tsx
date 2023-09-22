import { Button } from '@/components/ui/button'
import { FacebookIcon, TwitterIcon } from "lucide-react"

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="flex flex-col gap-12 bg-background">
      <footer className="container grid grid-cols-[2fr_1fr_1fr] justify-between gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold">Acme</span>
          <p>Yet another million dolar SaaS idea.</p>
          <div className="flex gap-4">
            <Button variant="secondary" size="icon" className="rounded-full space-4">
              <FacebookIcon size={20} />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full">
              <TwitterIcon size={20} />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-lg font-semibold">Product</span>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-lg font-semibold">Documents</span>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="flex items-center justify-center p-8 border-t">
        <span>© {year} Acme</span>
      </div>
    </div>
  )
}
