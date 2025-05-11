"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Event } from "@/lib/types"

interface ExportEventsButtonProps {
  events: Event[]
}

export default function ExportEventsButton({ events }: ExportEventsButtonProps) {
  const exportToCSV = () => {
    // Create CSV content
    let csvContent = "Title,Date,Time,Location,Category,Organizer\n"

    events.forEach((event) => {
      const eventDate = new Date(event.startDate)
      const date = eventDate.toLocaleDateString()
      const time = eventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

      // Escape commas in text fields
      const title = `"${event.title.replace(/"/g, '""')}"`
      const location = `"${event.location.replace(/"/g, '""')}"`
      const category = `"${event.category.replace(/"/g, '""')}"`
      const organizer = `"${event.organizer.name.replace(/"/g, '""')}"`

      csvContent += `${title},${date},${time},${location},${category},${organizer}\n`
    })

    // Create a blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `events-export.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button variant="outline" onClick={exportToCSV} className="flex items-center gap-2">
      <Download className="h-4 w-4" />
      <span>Export CSV</span>
    </Button>
  )
}
