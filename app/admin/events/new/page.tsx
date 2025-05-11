import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import EventForm from "@/components/admin/event-form"

export const metadata: Metadata = {
  title: "Create New Event | 42 Calendar Events",
  description: "Create a new event for your users",
}

export default function CreateEventPage() {
  return (
    <div className="container px-4 py-10 mx-auto">
      <div className="glass-card p-8 rounded-xl">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" size="sm" className="mr-4">
            <Link href="/admin">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Create New Event</h1>
            <p className="text-muted-foreground mt-1">Add a new event to your calendar</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <EventForm />
        </div>
      </div>
    </div>
  )
}
