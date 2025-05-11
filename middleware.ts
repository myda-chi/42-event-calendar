import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Admin protection - only allow specific IP addresses or with a special admin token
  if (path.startsWith("/admin")) {
    // Get the authorization header or cookie
    const adminToken = request.cookies.get("admin_token")?.value
    const clientIp = request.headers.get("x-forwarded-for") || request.ip

    // Check if the admin token is valid or if the IP is in the allowed list
    // In a real app, you would use a more secure method like JWT verification
    const isValidAdminToken = adminToken === "your-secret-admin-token"

    // List of allowed IPs - replace with your actual IP
    const allowedIps = ["127.0.0.1", "your-actual-ip-address"]
    const isAllowedIp = allowedIps.includes(clientIp || "")

    // If not authorized, redirect to login
    if (!isValidAdminToken && !isAllowedIp) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*"],
}
