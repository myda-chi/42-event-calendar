import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 mx-auto text-center">
      <h1 className="text-6xl font-bold text-pink-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600">The page you are looking for doesn't exist or has been moved.</p>
      <Button asChild className="mt-8 bg-pink-600 hover:bg-pink-700">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}
