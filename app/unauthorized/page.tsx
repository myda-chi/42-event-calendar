import Link from "next/link"
import { Shield, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UnauthorizedPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12 text-center">
      <div className="glass-card p-8 rounded-xl max-w-md">
        <div className="rounded-full bg-destructive/20 w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="h-8 w-8 text-destructive" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
        <p className="text-muted-foreground mb-6">
          You don't have permission to access this page. This area is restricted to administrators only.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link href="/login">
              <Shield className="mr-2 h-4 w-4" />
              Login as Admin
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
