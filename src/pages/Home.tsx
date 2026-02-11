import { useEffect } from 'react'
import { ArrowRight, Calendar, ZoomIn } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

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
          Style Chronicle
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto backdrop-blur-[2px]">
          Where fashion meets storytelling. Trend reports, personal style guides, street style from the world&#39;s most stylish cities, and the stories behind the clothes we wear.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="/blog">Read Latest</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="/style-quiz">Take the Style Quiz</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function GallerySection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">The Return of Quiet Luxury: Why 2026 Is the Year of Understated Elegance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format"
              alt="Gallery image 1"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80&auto=format"
              alt="Gallery image 2"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format"
              alt="Gallery image 3"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format"
              alt="Gallery image 4"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format"
              alt="Gallery image 5"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format"
              alt="Gallery image 6"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function BlogSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Fresh Off the Press</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format"
                alt="How We Help Your Business Grow"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 left-3">Strategy</Badge>
            </div>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>2026-01-15</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">How We Help Your Business Grow</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Discover our proven strategies for sustainable growth.</p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80&auto=format"
                alt="5 Trends You Cannot Afford to Miss"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 left-3">Trends</Badge>
            </div>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>2026-01-10</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">5 Trends You Cannot Afford to Miss</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Stay ahead with these important industry developments.</p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format"
                alt="Success Story: A Client Shares Their Experience"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge className="absolute top-3 left-3">Clients</Badge>
            </div>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>2026-01-05</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Success Story: A Client Shares Their Experience</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Read how we helped a client achieve their goals.</p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function ContentBlockSection3() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Explore by Topic</h2>
        <div className="text-muted-foreground space-y-4">
          <p>Dive into what interests you most — from runway analysis to everyday styling tips.</p>
        </div>

      </div>
    </section>
  )
}

function ContentBlockSection4() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">The Edit — What I Am Loving Right Now</h2>
        <div className="text-muted-foreground space-y-4">
          <p>My handpicked selection of the most covetable pieces this season. From a perfect black blazer to the sneaker everyone is talking about.</p>
        </div>
        <div className="mt-8">
          <a href="/shop-edit" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Shop All My Picks</a>
        </div>
      </div>
    </section>
  )
}

function NewsletterSection5() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">The Weekly Thread</h2>
        <div className="text-muted-foreground space-y-4">
          <p>Every Friday, I send a curated digest of the week&#39;s best fashion stories, my personal outfit diary, one thing I bought, and one thing I resisted. Join 12,000+ readers.</p>
        </div>
        <div className="mt-8">
          <a href="#newsletter-signup" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Subscribe Free</a>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  useEffect(() => {
    document.title = 'Homepage | Style Chronicle'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <GallerySection1 />
      </ScrollReveal>
      <ScrollReveal>
        <BlogSection2 />
      </ScrollReveal>
      <ScrollReveal>
        <ContentBlockSection3 />
      </ScrollReveal>
      <ScrollReveal>
        <ContentBlockSection4 />
      </ScrollReveal>
      <ScrollReveal>
        <NewsletterSection5 />
      </ScrollReveal>
    </main>
  )
}
