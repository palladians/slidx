import { Button } from '@/components/ui/button'

export const CallToAction = () => {
  return (
    <div className="py-8">
      <div className="container flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">Ready to get started?</h2>
          <p className="text-accent-foreground">Get in touch or create an account.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary">Contact us</Button>
          <Button>Create Account</Button>
        </div>
      </div>
    </div>
  )
}
