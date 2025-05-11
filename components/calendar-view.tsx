"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Event } from "@/lib/types"

interface CalendarViewProps {
  events: Event[]
}

export function CalendarView({ events }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  // Get current month and year
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Get first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
  const dayOfWeek = firstDayOfMonth.getDay()

  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // Get month name
  const monthName = currentDate.toLocaleString("default", { month: "long" })

  // Previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  // Next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  // Export events to CSV
  const exportToCSV = () => {
    // Filter events for the current month
    const monthEvents = events.filter((event) => {
      const eventDate = new Date(event.startDate)
      return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
    })

    // Create CSV content
    let csvContent = "Title,Date,Time,Location,Category\n"

    monthEvents.forEach((event) => {
      const eventDate = new Date(event.startDate)
      const date = eventDate.toLocaleDateString()
      const time = eventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

      // Escape commas in text fields
      const title = `"${event.title.replace(/"/g, '""')}"`
      const location = `"${event.location.replace(/"/g, '""')}"`
      const category = `"${event.category.replace(/"/g, '""')}"`

      csvContent += `${title},${date},${time},${location},${category}\n`
    })

    // Create a blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `events-${monthName}-${currentYear}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Create calendar days
  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < dayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-24 p-1 border border-border/20 bg-background/10"></div>)
  }

  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day)

    // Find events for this day
    const dayEvents = events.filter((event) => {
      const eventDate = new Date(event.startDate)
      return (
        eventDate.getDate() === day && eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
      )
    })

    calendarDays.push(
      <div
        key={`day-${day}`}
        className={`h-24 p-1 border border-border/20 ${dayEvents.length > 0 ? "bg-accent/10" : "bg-background/10"} overflow-auto`}
      >
        <div className="font-medium text-sm mb-1">{day}</div>
        {dayEvents.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <Badge className="w-full justify-start text-left mb-1 truncate bg-accent text-accent-foreground hover:bg-accent/80 cursor-pointer">
              {event.title}
            </Badge>
          </Link>
        ))}
      </div>,
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={goToPreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </Button>
          <h2 className="text-xl font-bold">
            {monthName} {currentYear}
          </h2>
          <Button variant="outline" onClick={goToNextMonth}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </Button>
        </div>

        <Button variant="outline" onClick={exportToCSV} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Export CSV</span>
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium text-sm py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{calendarDays}</div>

      <div className="mt-6">
        <Card className="p-4 bg-background/20">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Upcoming Events</h3>
            <Button variant="ghost" size="sm" onClick={exportToCSV} className="flex items-center gap-1">
              <Download className="h-3 w-3" />
              <span className="text-xs">Export</span>
            </Button>
          </div>
          <div className="space-y-2">
            {events
              .filter((event) => new Date(event.startDate) >= new Date())
              .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
              .slice(0, 5)
              .map((event) => (
                <div key={event.id} className="flex justify-between items-center">
                  <Link href={`/events/${event.id}`} className="hover:text-accent">
                    {event.title}
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    {new Date(event.startDate).toLocaleDateString()}
                  </span>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
