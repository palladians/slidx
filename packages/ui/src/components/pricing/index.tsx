import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type TierCardProps = {
  name: string
  description: string
  features: string[]
  price?: number
  highlighted?: boolean
}

const TierCard = ({ name, description, features, price, highlighted }: TierCardProps) => {
  return (
    <Card className={cn(['flex flex-col gap-4 p-4', highlighted && 'border-foreground border-2'])}>
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p>{description}</p>
      {price
        ? <div className="flex items-end">
          <span className="text-4xl font-bold">${price}</span>
          <span>/month</span>
        </div>
        : <span className="text-4xl font-bold">Get Quote</span>
      }
      <Button variant={highlighted ? 'default' : 'outline'}>Select Tier</Button>
      <div className="flex flex-col gap-4">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckIcon size={16} />
            <span>{feature}</span>
          </div>)
        )}
      </div>
    </Card>
  )
}

export const Pricing = () => {
  return (
    <div className="py-8">
      <div className="container flex flex-col gap-8 items-center">
        <h2 className="text-3xl font-bold">Pricing tailored to your needs</h2>
        <p>Choose a suitable plan that fits the needs of your business.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <TierCard
            name="Individual"
            description="A plan that allows you to start hacking without headaches."
            features={['3 products', 'Up to 3,000 subscribers', 'Basic analytics', 'Discord support']}
            price={5}
          />
          <TierCard
            name="Startup"
            description="A plan that scales with your rapidly growing business."
            features={['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time']}
            price={30}
            highlighted
          />
          <TierCard
            name="Enterprise"
            description="A plan that asures you business a SLA grade availability."
            features={['Unlimited products', 'Unlimited subscribers', 'Advanced analytics', '24-hour support response time']}
          />
        </div>
      </div>
    </div>
  )
}
