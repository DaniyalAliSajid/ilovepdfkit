import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const EMAIL_USER = process.env.EMAIL_USER;
        const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

        if (!EMAIL_USER || !EMAIL_PASSWORD) {
            console.log("⚠️ EMAIL ENV NOT SET");
            console.log({ name, email, subject, message });
            return NextResponse.json(
                { success: true, message: "Email logged (local dev mode)" },
                { status: 200 }
            );
        }

        // ✅ cPanel/Namecheap SMTP (your config says SMTP 465 SSL)
        const transporter = nodemailer.createTransport({
            host: "ilovepdfkit.com",
            port: 465,
            secure: false,
            requireTLS: true,
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASSWORD,
            },
        });

        await transporter.verify();
        console.log("✅ SMTP verified");

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeSubject = escapeHtml(subject);
        const safeMessage = escapeHtml(message);

        // ⚠️ IMPORTANT FOR TESTING:
        // Send to your personal email first to confirm delivery
        // Example: const TO = "yourgmail@gmail.com";
        const TO = "support@ilovepdfkit.com";

        const mailOptions = {
            from: `"ILOVEPDFKIT Contact" <${EMAIL_USER}>`,
            to: TO,
            // Optional: also BCC yourself to confirm delivery
            // bcc: "yourgmail@gmail.com",
            subject: `Contact Form: ${safeSubject}`,
            replyTo: email,

            // Provide text fallback (some servers filter HTML-only messages)
            text: `New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`,

            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color:#9333ea;">New Contact Form Submission</h2>

          <div style="background:#f9fafb;padding:16px;border-radius:8px;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
          </div>

          <div style="margin-top:16px;padding:16px;border:1px solid #e5e7eb;border-radius:8px;">
            <h3>Message</h3>
            <p style="white-space:pre-wrap;">${safeMessage}</p>
          </div>

          <p style="margin-top:20px;font-size:12px;color:#9ca3af;">
            Sent from ILOVEPDFKIT contact form
          </p>
        </div>
      `,

            // Forces SMTP envelope sender/recipient (can fix some cPanel delivery quirks)
            envelope: {
                from: EMAIL_USER,
                to: TO,
            },
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("📨 Email accepted by SMTP:");
        console.log({
            messageId: info.messageId,
            response: info.response,
            accepted: info.accepted,
            rejected: info.rejected,
        });

        return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
    } catch (error: any) {
        console.error("❌ Email error:", error?.message || error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}

function escapeHtml(text: string) {
    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
