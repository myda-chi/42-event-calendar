import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Contact Us | Pure Glow Skincare",
  description: "Get in touch with our team for any questions or inquiries",
}

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">Contact Us</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Get in Touch</h2>

          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-700">
                  First Name
                </label>
                <Input id="first-name" placeholder="Your first name" required />
              </div>

              <div>
                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <Input id="last-name" placeholder="Your last name" required />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <Input id="email" type="email" placeholder="Your email address" required />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                Subject
              </label>
              <Input id="subject" placeholder="What is this regarding?" required />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" rows={5} required />
            </div>

            <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mt-1 mr-3 text-pink-600" />
              <div>
                <h3 className="font-medium text-gray-800">Address</h3>
                <p className="mt-1 text-gray-600">
                  123 Corniche Road, Al Bateen
                  <br />
                  Abu Dhabi, United Arab Emirates
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 mt-1 mr-3 text-pink-600" />
              <div>
                <h3 className="font-medium text-gray-800">Phone</h3>
                <p className="mt-1 text-gray-600">+971 2 123 4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-5 h-5 mt-1 mr-3 text-pink-600" />
              <div>
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="mt-1 text-gray-600">hello@pureglow.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 font-medium text-gray-800">Business Hours</h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </p>
            </div>
          </div>

          <div className="p-4 mt-8 bg-pink-50 rounded-lg">
            <h3 className="mb-2 font-medium text-gray-800">Customer Support</h3>
            <p className="text-gray-600">
              Need help with an order or have a question about our products? Our customer support team is here to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
