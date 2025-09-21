import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, location, company } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('Meeting request data:', { firstName, lastName, email, phone, location, company });
      return NextResponse.json({ 
        success: true, 
        message: 'Meeting request submitted successfully (API key not configured - check console)',
        emailId: 'no-email-sent'
      });
    }

    // Send email to info@mrmelo.com
    const emailData = await resend.emails.send({
      from: 'info@mrmelo.com',
      to: 'info@mrmelo.com',
      subject: `New Meeting Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Meeting Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p>This request was submitted through the Schedule Meeting form on mrmelo.com</p>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Meeting request submitted successfully',
      emailId: emailData.data?.id 
    });

  } catch (error) {
    console.error('Error sending meeting request email:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    return NextResponse.json(
      { error: 'Failed to submit meeting request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
