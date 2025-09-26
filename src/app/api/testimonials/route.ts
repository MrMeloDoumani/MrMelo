import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: {
        isApproved: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, profession, company, relationship, comment } = body;
    
    // Validate required fields
    if (!firstName || !lastName || !profession || !relationship || !comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    
    const testimonial = await prisma.testimonial.create({
      data: {
        firstName,
        lastName,
        profession,
        company: company || null,
        relationship,
        comment,
        isApproved: true // Auto-approve for now, can be changed to false for moderation
      }
    });
    
    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
  }
}
