import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, categories } = body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('HKM access request data:', { firstName, lastName, email, categories });
      return NextResponse.json({ 
        success: true, 
        message: 'HKM access request submitted successfully (API key not configured - check console)',
        emailId: 'no-email-sent'
      });
    }

    // Send email to info@mrmelo.com
    const emailData = await resend.emails.send({
      from: 'info@mrmelo.com',
      to: 'info@mrmelo.com',
      subject: `New HKM Access Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Human Knowledge Model Access Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interested Categories:</strong> ${categories && categories.length > 0 ? categories.join(', ') : 'Not specified'}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p>This request was submitted through the HKM Access form on mrmelo.com</p>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'HKM access request submitted successfully',
      emailId: emailData.data?.id 
    });

  } catch (error) {
    console.error('Error sending HKM access request email:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    return NextResponse.json(
      { error: 'Failed to submit HKM access request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
