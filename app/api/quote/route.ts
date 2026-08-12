import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, quantity, message } = body;

    // Basic validation
    if (!name || !email || !message) {
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

    // ── Email sent TO the business (quote notification) ──────────────────────
    await transporter.sendMail({
      from: `"Jaguaplast Quote Form" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `[Quote Request] ${name}${company ? ` / ${company}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; color: #333;">
          <div style="background-color: #0C6D7D; padding: 32px 28px;">
            <p style="margin:0 0 4px; font-size:11px; letter-spacing:0.15em; text-transform:uppercase; color:rgba(255,255,255,0.65);">
              Jaguaplast
            </p>
            <h1 style="color:#fff; margin:0; font-size:22px; font-weight:700;">
              New Quote Request
            </h1>
          </div>

          <div style="padding: 32px 28px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#6b7280; width:150px; vertical-align:top;">Full Name</td>
                <td style="padding:10px 0; font-size:14px; font-weight:600;">${name}</td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:10px 0; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#6b7280; vertical-align:top;">Company</td>
                <td style="padding:10px 0; font-size:14px;">${company || "—"}</td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:10px 0; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#6b7280; vertical-align:top;">Email</td>
                <td style="padding:10px 0; font-size:14px;">
                  <a href="mailto:${email}" style="color:#0C6D7D;">${email}</a>
                </td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:10px 0; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#6b7280; vertical-align:top;">Phone</td>
                <td style="padding:10px 0; font-size:14px;">${phone || "—"}</td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:10px 0; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#6b7280; vertical-align:top;">Est. Quantity (pcs)</td>
                <td style="padding:10px 0; font-size:14px;">${quantity || "—"}</td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:10px 0; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#6b7280; vertical-align:top;">Details</td>
                <td style="padding:10px 0; font-size:14px; line-height:1.7; white-space:pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>

          <div style="padding:16px 28px; background-color:#f9fafb; font-size:12px; color:#9ca3af; border:1px solid #e5e7eb; border-top:none;">
            Sent from the <strong>Get a Quote</strong> form at jaguaplast.com.
            Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    });

    // ── Auto-reply TO the customer ────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Jaguaplast" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Your quote request has been received — Jaguaplast",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; color: #333;">
          <div style="background-color: #0C6D7D; padding: 32px 28px;">
            <p style="margin:0 0 4px; font-size:11px; letter-spacing:0.15em; text-transform:uppercase; color:rgba(255,255,255,0.65);">
              Jaguaplast
            </p>
            <h1 style="color:#fff; margin:0; font-size:22px; font-weight:700;">
              Thank you, ${name}.
            </h1>
          </div>
          <div style="padding: 32px 28px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="font-size:14px; line-height:1.8; margin-top:0;">
              We've received your quote request${quantity ? ` for <strong>${quantity} pieces</strong>` : ""}.
              Our team will review the details and get back to you within <strong>1 business day</strong>.
            </p>
            <p style="font-size:14px; line-height:1.8;">
              While you wait, feel free to explore our
              <a href="https://jaguaplast.com/products" style="color:#0C6D7D;">full product range</a>
              or learn more
              <a href="https://jaguaplast.com/about" style="color:#0C6D7D;">about Jaguaplast</a>.
            </p>
            <hr style="border:none; border-top:1px solid #e5e7eb; margin:24px 0;" />
            <p style="font-size:13px; color:#6b7280; margin-bottom:0;">
              Jaguaplast · Kigali, Rwanda · Industrial Area, Masoro<br/>
              <a href="mailto:info@jaguaplast.com" style="color:#0C6D7D;">info@jaguaplast.com</a> · +250 788 306 799
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Quote form email error:", error);
    return NextResponse.json(
      { error: "Failed to send your request. Please try again later." },
      { status: 500 }
    );
  }
}
