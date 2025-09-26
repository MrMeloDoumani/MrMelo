import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

interface Testimonial {
  id: number;
  firstName: string;
  lastName: string;
  profession: string;
  company: string | null;
  relationship: string;
  comment: string;
  createdAt: string;
  isApproved: boolean;
}

const testimonialsPath = path.join(process.cwd(), 'data', 'testimonials.json');

// Helper function to read testimonials from JSON file
function readTestimonials() {
  try {
    const data = fs.readFileSync(testimonialsPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading testimonials:', error);
    return [];
  }
}

// Helper function to write testimonials to JSON file
function writeTestimonials(testimonials: Testimonial[]) {
  try {
    fs.writeFileSync(testimonialsPath, JSON.stringify(testimonials, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing testimonials:', error);
    return false;
  }
}

export async function GET() {
  try {
    const testimonials = readTestimonials();
    // Return only approved testimonials
    const approvedTestimonials = testimonials.filter(t => t.isApproved);
    return NextResponse.json(approvedTestimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ message: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, profession, company, relationship, comment } = body;

    if (!firstName || !lastName || !profession || !relationship || !comment) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Read existing testimonials
    const testimonials = readTestimonials();
    
    // Create new testimonial
    const newTestimonial = {
      id: testimonials.length > 0 ? Math.max(...testimonials.map(t => t.id)) + 1 : 1,
      firstName,
      lastName,
      profession,
      company: company || null,
      relationship,
      comment,
      createdAt: new Date().toISOString(),
      isApproved: true // Auto-approve for simplicity
    };

    // Add new testimonial
    testimonials.push(newTestimonial);

    // Write back to file
    const success = writeTestimonials(testimonials);
    
    if (!success) {
      return NextResponse.json({ message: 'Failed to save testimonial' }, { status: 500 });
    }

    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    console.error('Error submitting testimonial:', error);
    return NextResponse.json({ message: 'Failed to submit testimonial' }, { status: 500 });
  }
}