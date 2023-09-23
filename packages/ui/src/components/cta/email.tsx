import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const CallToActionEmail = () => {
  return (
    <div className="py-8">
      <div className="container flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">Stay connected.</h2>
          <p className="text-accent-foreground max-w-[24rem] leading-7">Join our newsletter for updates on new products, promotions, and more.</p>
        </div>
        <div className="flex gap-4">
          <Input className="flex-1" placeholder="email@address.com" />
          <Button className="whitespace-nowrap">Join Newsletter</Button>
        </div>
      </div>
    </div>
  )
}
