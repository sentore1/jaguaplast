import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const subjectLabels: Record<string, string> = {
      partnership: "Partnership Enquiry",
      products: "Product Information",
      quote: "Request a Quote",
      support: "After-Sales Support",
      other: "Other",
    };

    const subjectLabel = subjectLabels[subject] ?? subject;

    // Email sent TO the business (notification)
    await transporter.sendMail({
      from: `"Jaguaplast Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `[Contact Form] ${subjectLabel} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background-color: #0B7380; padding: 32px 24px;">
            <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 600;">
              New Contact Form Submission
            </h1>
          </div>
          <div style="padding: 32px 24px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; width: 130px; vertical-align: top;">
                  FULL NAME
                </td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 500;">
                  ${name}
                </td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; vertical-align: top;">
                  EMAIL
                </td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 500;">
                  <a href="mailto:${email}" style="color: #0B7380;">${email}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; vertical-align: top;">
                  PHONE
                </td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 500;">
                  ${phone || "—"}
                </td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; vertical-align: top;">
                  SUBJECT
                </td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 500;">
                  ${subjectLabel}
                </td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; vertical-align: top;">
                  MESSAGE
                </td>
                <td style="padding: 10px 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                  ${message}
                </td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 24px; background-color: #f9fafb; font-size: 12px; color: #9ca3af; border: 1px solid #e5e7eb; border-top: none;">
            This message was sent from the contact form at jaguaplast.com. Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    });

    // Auto-reply TO the sender
    await transporter.sendMail({
      from: `"Jaguaplast" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We've received your message — Jaguaplast",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background-color: #0B7380; padding: 32px 24px;">
            <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 600;">
              Thank you, ${name}.
            </h1>
          </div>
          <div style="padding: 32px 24px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="font-size: 14px; line-height: 1.7; margin-top: 0;">
              We've received your message regarding <strong>${subjectLabel}</strong> and one of our team members will get back to you within 1 business day.
            </p>
            <p style="font-size: 14px; line-height: 1.7;">
              In the meantime, feel free to browse our
              <a href="https://jaguaplast.com/products" style="color: #0B7380;">products</a> or
              learn more <a href="https://jaguaplast.com/about" style="color: #0B7380;">about us</a>.
            </p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
            <p style="font-size: 13px; color: #6b7280; margin-bottom: 0;">
              Jaguaplast · Kigali, Rwanda · Industrial Area, Masoro<br />
              <a href="mailto:info@jaguaplast.com" style="color: #0B7380;">info@jaguaplast.com</a> · +250 788 306 799
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
