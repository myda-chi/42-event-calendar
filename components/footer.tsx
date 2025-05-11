import { Calendar } from "lucide-react"

export default function Footer() {
  return (
    <footer className="glass-footer">
      <div className="container px-4 py-6 mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold">42 Events Calendar</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} 42 Events Calendar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
