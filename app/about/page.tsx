import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Pure Glow Skincare",
  description: "Learn about our story, mission, and commitment to natural skincare",
}

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">About Pure Glow</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-lg aspect-square">
          <Image src="/placeholder.svg?height=600&width=600" alt="Our story" fill className="object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Our Story</h2>
          <p className="mb-4 text-gray-600">
            Pure Glow was founded in 2025 by Myda-Chi, a skincare enthusiast who was frustrated with the lack of truly
            natural products in the market. After years of struggling with sensitive skin and trying countless products
            that claimed to be "natural" but were filled with harsh chemicals, Myda-Chi decided to create her own line
            of skincare products.
          </p>
          <p className="text-gray-600">
            Starting in her kitchen with simple, natural ingredients, Jane developed formulations that were gentle yet
            effective. Friends and family who tried her products were amazed by the results, and word quickly spread.
            What began as a small passion project soon grew into Pure Glow Skincare, a brand dedicated to creating
            products that nurture your skin with the power of nature.
          </p>
        </div>
      </div>

      <div className="py-16 my-16 bg-pink-50 rounded-lg">
        <div className="max-w-3xl px-4 mx-auto text-center">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-xl text-gray-600">
            "To create skincare products that harness the power of nature, respect the environment, and help people feel
            confident in their natural beauty."
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Natural Ingredients</h3>
          <p className="text-gray-600">
            We believe in the power of nature. All our products are made with carefully selected natural ingredients
            that are gentle on your skin and effective in delivering results.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Sustainable Practices</h3>
          <p className="text-gray-600">
            We are committed to minimizing our environmental impact. From recyclable packaging to ethical sourcing of
            ingredients, sustainability is at the core of everything we do.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Cruelty-Free</h3>
          <p className="text-gray-600">
            We never test on animals and are proud to be certified cruelty-free. We believe that beauty should never
            come at the expense of animal welfare.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-bold text-center text-gray-800">Meet Our Team</h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              name: "Myda-Chi",
              role: "Founder & CEO",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Michael Johnson",
              role: "Product Development",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Sarah Williams",
              role: "Marketing Director",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "David Chen",
              role: "Operations Manager",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto overflow-hidden rounded-full w-36 h-36 mb-4">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="mb-1 text-lg font-medium text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="mb-8 text-2xl font-bold text-gray-800">Our Address</h2>
        <p className="text-gray-600">
          123 Corniche Road, Al Bateen
          <br />
          Abu Dhabi, United Arab Emirates
        </p>
      </div>
    </div>
  )
}
