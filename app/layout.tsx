import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "42 Events Calendar - Event Management Platform",
  description: "Discover and manage events with ease",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://42events.vercel.app",
    siteName: "42 Events Calendar",
    title: "42 Events Calendar - Event Management Platform",
    description: "Discover and manage events with ease at 42 Abu Dhabi",
    images: [
      {
        url: "/images/42-abu-dhabi-logo.png",
        width: 1200,
        height: 630,
        alt: "42 Events Calendar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "42 Events Calendar - Event Management Platform",
    description: "Discover and manage events with ease at 42 Abu Dhabi",
    images: ["/images/42-abu-dhabi-logo.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
