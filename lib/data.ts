import type { Event } from "@/lib/types"

// Mock data for development
export const featuredEvents: Event[] = [
  {
    id: "1",
    title: "AI Hackathon: AI for Safe and Sustainable Energy",
    description:
      "Join Total Energies and Institut Français for an exciting AI Hackathon focused on creating innovative solutions for safe and sustainable energy.",
    content: `
      <h2>Exciting News for All AI Enthusiasts!</h2>
      
      <p>Total Energies and Institut Français, in collaboration with 42 Abu Dhabi, are thrilled to invite you to an upcoming AI Hackathon themed "AI for Safe and Sustainable Energy."</p>
      
      <p>This is a unique opportunity to:</p>
      <ul>
        <li>Showcase your skills</li>
        <li>Collaborate with like-minded innovators</li>
        <li>Create impactful AI solutions for a sustainable future</li>
      </ul>
      
      <p>To encourage cross-campus collaboration, student teams will be mixed with participants from other universities, promoting diverse thinking and teamwork.</p>
      
      <h3>Event Details:</h3>
      <ul>
        <li>Date: May 27–29, 2025</li>
        <li>Venue: 42 Abu Dhabi Campus</li>
        <li>Open to students of all levels and specializations</li>
        <li>Each university has 15 available slots</li>
        <li>Nomination Deadline: May 8, 2025, 12 PM</li>
      </ul>
      
      <p>Registration Link for Nomination: <a href="https://42abudhabi.typeform.com/to/jRnVT4dA" target="_blank" rel="noopener noreferrer">https://42abudhabi.typeform.com/to/jRnVT4dA</a></p>
      
      <p><strong>Note:</strong> Subscribing to this event is not considered registration for the hackathon.</p>
      
      <p>Don't miss your chance to be part of this exciting challenge at the intersection of AI and sustainability!</p>
    `,
    image: "/images/42-abu-dhabi-logo.png",
    category: "Hackathon",
    location: "42AD Campus",
    startDate: "2025-05-27T08:30:00Z",
    endDate: "2025-05-29T17:00:00Z",
    price: 0,
    capacity: 45,
    attendees: 32,
    organizer: {
      id: "1",
      name: "Total Energies & Institut Français",
      image: "/images/42-abu-dhabi-logo.png",
    },
    isFeatured: true,
    isPublished: true,
    createdAt: "2025-01-15T12:00:00Z",
    updatedAt: "2025-01-15T12:00:00Z",
  },
  {
    id: "2",
    title: "AMA Session with Learning Team",
    description:
      "Join us for an insightful and interactive session with the Learning Team to discuss hackathons, award programs, training, and internships.",
    content: `
      <h2>You're Invited to an AMA Session with the Learning Team!</h2>
      
      <p>Join us for an insightful and interactive session where we'll delve into the following key topics:</p>
      
      <ul>
        <li>Hackathon & Workshop</li>
        <li>Award Program Eligibility</li>
        <li>Training Programs for External Entities</li>
        <li>Internship Process</li>
      </ul>
      
      <p>This is your chance to ask questions, share feedback, and connect with the team. Don't miss out on this valuable opportunity!</p>
      
      <h3>Event Details:</h3>
      <ul>
        <li>Date: Wednesday, May 14, 2025</li>
        <li>Time: 2:00 PM</li>
        <li>Duration: 1 hour</li>
        <li>Location: 42AD Makerspace</li>
      </ul>
      
      <p>No registration required. Just show up with your questions and enthusiasm!</p>
    `,
    image: "/images/42-abu-dhabi-logo.png",
    category: "Workshop",
    location: "42AD Makerspace",
    startDate: "2025-05-14T14:00:00Z",
    endDate: "2025-05-14T15:00:00Z",
    price: 0,
    capacity: 50,
    attendees: 18,
    organizer: {
      id: "2",
      name: "42 Abu Dhabi Learning Team",
      image: "/images/42-abu-dhabi-logo.png",
    },
    isFeatured: true,
    isPublished: true,
    createdAt: "2025-01-20T10:30:00Z",
    updatedAt: "2025-01-20T10:30:00Z",
  },
  {
    id: "3",
    title: "Common Core Examination",
    description: "Mandatory examination for all students in the Common Core curriculum.",
    content: `
      <h2>Common Core Examination</h2>
      
      <p>This is a mandatory examination for all students currently enrolled in the Common Core curriculum at 42 Abu Dhabi.</p>
      
      <h3>Examination Details:</h3>
      <ul>
        <li>Date: May 15, 2025</li>
        <li>Time: 1:00 PM - 4:00 PM</li>
        <li>Location: 42 Abu Dhabi Campus</li>
        <li>Duration: 3 hours</li>
      </ul>
      
      <h3>Important Information:</h3>
      <ul>
        <li>Please arrive 30 minutes before the examination starts</li>
        <li>Bring your student ID</li>
        <li>No electronic devices allowed except for the examination computers</li>
        <li>Water bottles are permitted</li>
      </ul>
      
      <p>If you have any questions or require special accommodations, please contact the academic office before the examination date.</p>
      
      <p><strong>Note:</strong> This examination is a requirement for progression in the program.</p>
    `,
    image: "/images/42-abu-dhabi-logo.png",
    category: "Examination",
    location: "42 Abu Dhabi",
    startDate: "2025-05-15T13:00:00Z",
    endDate: "2025-05-15T16:00:00Z",
    price: 0,
    capacity: 100,
    attendees: 0,
    organizer: {
      id: "3",
      name: "42 Abu Dhabi Academic Team",
      image: "/images/42-abu-dhabi-logo.png",
    },
    isFeatured: true,
    isPublished: true,
    createdAt: "2024-01-20T14:15:00Z",
    updatedAt: "2024-01-20T14:15:00Z",
  },
]

// Helper function to get all events (in a real app, this would fetch from an API/database)
export async function getAllEvents(): Promise<Event[]> {
  // In a real app, this would be an API call
  return featuredEvents
}

// Helper function to get a specific event by ID
export async function getEventById(id: string): Promise<Event | undefined> {
  // In a real app, this would be an API call
  return featuredEvents.find((event) => event.id === id)
}
