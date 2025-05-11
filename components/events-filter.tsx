"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { DatePicker } from "@/components/ui/date-picker"

export default function EventsFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [date, setDate] = useState<Date | undefined>(undefined)

  const categories = [
    "Technology",
    "Business",
    "Entertainment",
    "Sports",
    "Education",
    "Networking",
    "Charity",
    "Workshop",
    "Examination",
  ]

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("category") ? [searchParams.get("category") as string] : [],
  )

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) => (checked ? [...prev, category] : prev.filter((c) => c !== category)))
  }

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    // Handle categories
    if (selectedCategories.length === 1) {
      params.set("category", selectedCategories[0].toLowerCase())
    } else if (selectedCategories.length > 1) {
      // For multiple categories, we'd need a different approach
      // This is simplified for the example
      params.set("category", selectedCategories[0].toLowerCase())
    } else {
      params.delete("category")
    }

    // Handle date filter
    if (date) {
      params.set("date", date.toISOString().split("T")[0])
    } else {
      params.delete("date")
    }

    // Preserve search query if exists
    const query = searchParams.get("q")
    if (query) {
      params.set("q", query)
    }

    router.push(`/events?${params.toString()}`)
  }

  const resetFilters = () => {
    setSelectedCategories([])
    setDate(undefined)
    router.push("/events")
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center">
          <Filter className="mr-2 h-4 w-4" />
          Filter Events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                />
                <Label htmlFor={`category-${category}`}>{category}</Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-medium">Date</h3>
          <DatePicker date={date} setDate={setDate} className="w-full" />
        </div>

        <div className="flex flex-col space-y-2 pt-4">
          <Button onClick={applyFilters}>Apply Filters</Button>
          <Button variant="outline" onClick={resetFilters}>
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
