import type { Metadata } from "next"
import { CalendarView } from "@/components/calendar-view"
import { getAllEvents } from "@/lib/data"

export const metadata: Metadata = {
  title: "Calendar | 42 Calendar Events",
  description: "View all events in a calendar format",
}

export default async function CalendarPage() {
  const events = await getAllEvents()

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="glass-card p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-8">Event Calendar</h1>
        <CalendarView events={events} />
      </div>
    </div>
  )
}
