import { useEffect } from 'react'
import { AnimatedCounter } from '../components/ui/animated-counter'
import { Button } from '../components/ui/button'

function HeroSection0() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 md:px-6">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      <div className="relative z-10 container mx-auto text-center max-w-4xl space-y-8">
        <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white">
          Style Chronicle
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
          Find Your Style Archetype
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto backdrop-blur-[2px]">
          Answer 10 questions to discover your personal style DNA. Are you a Minimalist, Maximalist, Classic, Avant-Garde, Bohemian, or Streetwear icon? Get personalized article recommendations and a curated shopping list.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#quiz-start">Start the Quiz</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="#">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function StatsSection1() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-primary via-primary/90 to-primary/70">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="500+" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Happy clients</div>
          </div>
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="15+" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Years experience</div>
          </div>
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="1000+" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Projects completed</div>
          </div>
          <div className="text-center space-y-2  px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="24/7" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function StyleQuizPage() {
  useEffect(() => {
    document.title = 'Find Your Style | Style Chronicle'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <StatsSection1 />
      </ScrollReveal>
    </main>
  )
}
