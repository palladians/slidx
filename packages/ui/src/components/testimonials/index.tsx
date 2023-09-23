import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const Testimonial = ({ name, company, content }: Record<string, string>) => {
  return (
    <div className="flex flex-col gap-4">
      <p>{content}</p>
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-sm">{company}</span>
        </div>
      </div>
    </div>
  )
}

export const Testimonials = () => {
  return (
    <div className="py-8">
      <div className="container flex flex-col gap-8">
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          <div className="grid gap-8">
            <Card className="p-4">
              <Testimonial content="This is literally the best team I've ever worked with." name="John Doe" company="Google" />
            </Card>
            <Card className="px-4 py-20">
              <Testimonial content="This is literally the best team I've ever worked with." name="John Doe" company="Google" />
            </Card>
          </div>
          <div className="grid gap-8">
            <Card className="p-4 py-12">
              <Testimonial content="This is literally the best team I've ever worked with." name="John Doe" company="Google" />
            </Card>
            <Card className="p-4 py-12">
              <Testimonial content="This is literally the best team I've ever worked with." name="John Doe" company="Google" />
            </Card>
          </div>
          <div className="grid gap-8">
            <Card className="p-4 py-20">
              <Testimonial content="This is literally the best team I've ever worked with." name="John Doe" company="Google" />
            </Card>
            <Card className="p-4">
              <Testimonial content="This is literally the best team I've ever worked with." name="John Doe" company="Google" />
            </Card>
          </div>
          <div className="grid gap-8">
            <Card className="p-4 py-12">
              <Testimonial content="This is literally the best team I've ever worked with." name="John Doe" company="Google" />
            </Card>
            <Card className="p-4 py-12">
              <Testimonial content="This is literally the best team I've ever worked with." name="John Doe" company="Google" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
