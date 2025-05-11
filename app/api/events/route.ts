import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Create or find organizer
    const organizer = await prisma.organizer.upsert({
      where: { name: body.organizer.name },
      update: {},
      create: {
        name: body.organizer.name,
        image: body.organizer.image,
      },
    })

    // Create event
    const event = await prisma.event.create({
      data: {
        title: body.title,
        description: body.description,
        content: body.content,
        image: body.image,
        category: body.category,
        location: body.location,
        startDate: new Date(body.startDate),
        endDate: body.endDate ? new Date(body.endDate) : null,
        price: body.price,
        capacity: body.capacity,
        isFeatured: body.isFeatured,
        isPublished: body.isPublished,
        organizerId: organizer.id,
      },
    })

    return NextResponse.json(event)
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json(
      { error: 'Error creating event' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      include: {
        organizer: true,
      },
      orderBy: {
        startDate: 'asc',
      },
    })

    return NextResponse.json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Error fetching events' },
      { status: 500 }
    )
  }
} 