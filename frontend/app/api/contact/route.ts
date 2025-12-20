import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate input
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Check if credentials are set
        const hasCredentials = process.env.EMAIL_USER && process.env.EMAIL_PASSWORD;

        if (!hasCredentials) {
            console.log('--- LOCAL DEVELOPMENT: Email content ---');
            console.log('To: support@ilovepdfkit.com');
            console.log('Subject:', subject);
            console.log('Content:', message);
            console.log('---------------------------------------');

            return NextResponse.json(
                { success: true, message: 'Message logged to console (Local Dev Mode)' },
                { status: 200 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Email to support@ilovepdfkit.com
        const mailOptions = {
            from: process.env.EMAIL_USER || 'noreply@ilovepdfkit.com',
            to: 'support@ilovepdfkit.com',
            subject: `Contact Form: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #9333ea;">New Contact Form Submission</h2>
                    <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                    </div>
                    <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                        <h3 style="color: #374151; margin-top: 0;">Message:</h3>
                        <p style="color: #6b7280; line-height: 1.6;">${message}</p>
                    </div>
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
                        <p>This email was sent from the ILOVEPDFKIT contact form.</p>
                        <p>Reply to: ${email}</p>
                    </div>
                </div>
            `,
            replyTo: email,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
