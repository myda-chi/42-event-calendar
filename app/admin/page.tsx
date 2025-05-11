import type { Metadata } from "next"
import Link from "next/link"
import { Plus, Calendar, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminEventList from "@/components/admin/event-list"
import AdminStats from "@/components/admin/stats"

export const metadata: Metadata = {
  title: "Admin Dashboard | 42 Events Calendar",
  description: "Manage events, users, and settings",
}

export default function AdminDashboardPage() {
  return (
    <div className="container px-4 py-10 mx-auto">
      <div className="glass-card p-8 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage events, users, and settings</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/admin/events/new">
                <Plus className="mr-2 h-4 w-4" />
                Add New Event
              </Link>
            </Button>
          </div>
        </div>

        <AdminStats />

        <Tabs defaultValue="all" className="mt-8">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-background/20">
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <AdminEventList filter="all" />
          </TabsContent>
          <TabsContent value="upcoming">
            <AdminEventList filter="upcoming" />
          </TabsContent>
          <TabsContent value="past">
            <AdminEventList filter="past" />
          </TabsContent>
          <TabsContent value="draft">
            <AdminEventList filter="draft" />
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-accent" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-2 border-accent pl-4 py-1">
                <p className="text-sm text-foreground">New event created: Web Development Workshop</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
              <div className="border-l-2 border-accent pl-4 py-1">
                <p className="text-sm text-foreground">Event updated: Hackathon 2025</p>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
              <div className="border-l-2 border-destructive pl-4 py-1">
                <p className="text-sm text-foreground">Event deleted: Old Meetup</p>
                <p className="text-xs text-muted-foreground">3 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-accent" />
              Upcoming Events
            </CardTitle>
            <CardDescription>Events happening soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Web Development Workshop", date: "Jun 15, 2025" },
                { name: "Networking Mixer", date: "May 20, 2025" },
                { name: "Hackathon 2025", date: "Jul 10, 2025" },
              ].map((event, i) => (
                <div key={i} className="flex justify-between items-center">
                  <p className="text-sm text-foreground">{event.name}</p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-accent" />
              Top Attendees
            </CardTitle>
            <CardDescription>Most active users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "John Doe", events: 12 },
                { name: "Jane Smith", events: 8 },
                { name: "Alex Johnson", events: 7 },
              ].map((user, i) => (
                <div key={i} className="flex justify-between items-center">
                  <p className="text-sm text-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.events} events</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
