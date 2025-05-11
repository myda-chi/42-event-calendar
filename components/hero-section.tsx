import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center glass-card p-8 rounded-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Discover Amazing Events</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Find and attend events that match your interests.
          </p>

          <div className="max-w-md mx-auto">
            <form className="flex w-full items-center space-x-2 mb-8">
              <Input type="text" placeholder="Search events..." className="flex-1 bg-background/40" />
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/events">Browse Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
