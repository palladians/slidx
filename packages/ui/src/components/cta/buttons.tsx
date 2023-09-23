import { Button } from '@/components/ui/button'

export const CallToActionButtons = () => {
  return (
    <div className="py-8">
      <div className="container flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">Ready to get started?</h2>
          <p className="text-accent-foreground max-w-[24rem] leading-7">Get in touch or create an account.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" className="whitespace-nowrap">Contact us</Button>
          <Button className="whitespace-nowrap">Create Account</Button>
        </div>
      </div>
    </div>
  )
}
