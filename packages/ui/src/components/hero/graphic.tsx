import { Button } from "@/components/ui/button"

export const HeroGraphic = () => {
  return (
    <div className="py-8">
      <header className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-start gap-4">
          <Button variant="secondary" size="sm" className="rounded-full">Follow on 𝕏</Button>
          <h1 className="text-4xl font-bold leading-[3rem]">A web application built using<br />Slidx and shadcn/ui components.</h1>
          <p className="text-lg leading-8">Slidx is a React starter kit based on shadcn/ui and Tailwind that comes with a set of pre-configured tools to kickstart your app development.</p>
          <div className="flex gap-4">
            <Button size="lg">Get Started</Button>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <img src="http://placehold.jp/800x600.png" alt="hero" className="rounded-lg" />
        </div>
      </header>
    </div>
  )
}
