import nodemailer from "nodemailer";

export interface ContactFormPayload {
  type: "booking" | "general";
  name: string;
  phone?: string;
  email?: string;
  carName?: string;
  message?: string;
}

export async function sendContactNotification(data: ContactFormPayload) {
  const isBooking = data.type === "booking";
  const recipientEmail = isBooking
    ? (process.env.BOOKING_NOTIFICATION_EMAIL || "booking@turboridesupercars.com")
    : (process.env.GENERAL_INQUIRY_EMAIL || "Hello@turboridesupercars.com");

  const smtpUser =
    process.env.SMTP_USER ||
    process.env.MSG91_USER ||
    process.env.GMAIL_USER ||
    "turboridemarketing@gmail.com";
  const smtpPass =
    process.env.SMTP_PASSWORD ||
    process.env.MSG91_PASSWORD ||
    process.env.GMAIL_APP_PASSWORD ||
    "";
  const smtpHost = process.env.SMTP_HOST || process.env.MSG91_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || process.env.MSG91_PORT) || 465;

  const subject = isBooking
    ? `🏎️ New Supercar Booking Request: ${data.carName || "Supercar Experience"} - ${data.name}`
    : `📩 New General Inquiry from ${data.name}`;

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0b0b0b; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #262626;">
      <div style="background: linear-gradient(135deg, #FF2D20, #b31d14); padding: 28px 24px; text-align: center;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 1px; color: #ffffff; text-transform: uppercase;">
          TurboRide Supercars
        </h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.9); font-weight: 600;">
          ${isBooking ? "NEW DRIVE EXPERIENCE REQUEST" : "GENERAL WEBSITE INQUIRY"}
        </p>
      </div>

      <div style="padding: 28px 24px;">
        <div style="background: #171717; border-radius: 12px; padding: 20px; border: 1px solid #333333; margin-bottom: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #888888; width: 130px; font-weight: 600; text-transform: uppercase; font-size: 11px;">Client Name</td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888; font-weight: 600; text-transform: uppercase; font-size: 11px;">Phone / Mobile</td>
              <td style="padding: 8px 0; color: #22c55e; font-weight: bold;">
                <a href="tel:${data.phone || ""}" style="color: #22c55e; text-decoration: none;">${data.phone || "Not provided"}</a>
                ${data.phone ? `&nbsp;·&nbsp;<a href="https://wa.me/${data.phone.replace(/\\D/g, '')}" style="color: #25D366; text-decoration: underline;">Chat WhatsApp</a>` : ""}
              </td>
            </tr>
            ${data.email ? `
            <tr>
              <td style="padding: 8px 0; color: #888888; font-weight: 600; text-transform: uppercase; font-size: 11px;">Email Address</td>
              <td style="padding: 8px 0; color: #ffffff;">
                <a href="mailto:${data.email}" style="color: #FFD000; text-decoration: none;">${data.email}</a>
              </td>
            </tr>` : ""}
            ${data.carName ? `
            <tr>
              <td style="padding: 8px 0; color: #888888; font-weight: 600; text-transform: uppercase; font-size: 11px;">Selected Vehicle</td>
              <td style="padding: 8px 0; color: #FFD000; font-weight: bold; font-size: 15px;">${data.carName}</td>
            </tr>` : ""}
            ${data.message ? `
            <tr>
              <td style="padding: 8px 0; color: #888888; font-weight: 600; text-transform: uppercase; font-size: 11px; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #e5e5e5; line-height: 1.5;">${data.message}</td>
            </tr>` : ""}
          </table>
        </div>

        <div style="text-align: center; margin-top: 20px;">
          <a href="https://book.turboridesupercars.com/admin" style="display: inline-block; background: #FF2D20; color: #ffffff; font-weight: 700; font-size: 13px; text-decoration: none; padding: 12px 28px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
            Open Admin Dashboard
          </a>
        </div>
      </div>

      <div style="background: #111111; padding: 16px 24px; text-align: center; border-top: 1px solid #222222; font-size: 11px; color: #666666;">
        This alert was generated automatically from the TurboRide Supercars website.
      </div>
    </div>
  `;

  if (!smtpPass) {
    console.warn("[TurboRide Email] SMTP password not set in environment. Email simulated:", {
      to: recipientEmail,
      subject,
      sender: smtpUser,
    });
    return { ok: true, simulated: true, recipient: recipientEmail };
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const info = await transporter.sendMail({
    from: `"TurboRide Supercars" <${smtpUser}>`,
    replyTo: data.email || smtpUser,
    to: recipientEmail,
    subject,
    html: htmlBody,
  });

  return { ok: true, simulated: false, messageId: info.messageId, recipient: recipientEmail };
}
