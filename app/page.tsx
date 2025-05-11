import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import { featuredEvents } from "@/lib/data"
import EventCard from "@/components/event-card"

export default function Home() {
  // Sort events by date (closest first)
  const sortedEvents = [...featuredEvents].sort((a, b) => {
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  })

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Featured Events Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="glass-card p-8 rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Featured Events</h2>
              <Button asChild variant="outline" className="mt-4 md:mt-0 border-accent text-accent hover:bg-accent/10">
                <Link href="/events">
                  View All Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Workshops", "Meetups", "Tech Talks", "Hackathons", "Conferences", "Social", "Sports", "Education"].map(
                (category) => (
                  <Link
                    key={category}
                    href={`/events?category=${category.toLowerCase()}`}
                    className="bg-background/20 rounded-lg p-6 text-center hover:bg-background/40 transition-colors border border-border/20"
                  >
                    <h3 className="font-medium text-foreground">{category}</h3>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-background/20 border-border/20">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-accent/20 w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-accent font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Find Events</h3>
                  <p className="text-muted-foreground">
                    Browse through our curated list of events or search for specific ones that match your interests.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/20 border-border/20">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-accent/20 w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-accent font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Register</h3>
                  <p className="text-muted-foreground">
                    Sign up for events with a simple registration process. Secure your spot in just a few clicks.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/20 border-border/20">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-accent/20 w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-accent font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Attend & Enjoy</h3>
                  <p className="text-muted-foreground">
                    Receive confirmation and reminders. Attend the event and enjoy the experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="glass-card p-8 rounded-xl bg-accent/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">View All Events</h2>
              <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
                Browse through our calendar to find events that interest you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-foreground border-foreground hover:bg-foreground/10"
                >
                  <Link href="/calendar">View Calendar</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
