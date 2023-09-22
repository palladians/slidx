import { Button } from "@/components/ui/button"

export const HeroTypographic = () => {
  return (
    <div className="py-8">
      <header className="container flex flex-col justify-center items-center text-center gap-6">
        <Button variant="secondary" size="sm" className="rounded-full">Follow on 𝕏</Button>
        <h1 className="text-6xl font-bold leading-[4rem]">A web application built using<br />Slidx and shadcn/ui components.</h1>
        <p className="max-w-[36rem] text-lg leading-8">Slidx is a React starter kit based on shadcn/ui and Tailwind that comes with a set of pre-configured tools to kickstart you app development.</p>
        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="secondary">Learn More</Button>
        </div>
      </header>
    </div>
  )
}
