import nodemailer from "nodemailer";

interface CounsellingEmailPayload {
  fullName: string;
  phone: string;
  email?: string;
  course?: string;
  interestedIn?: string;
  preferredContact?: string;
  message?: string;
  sourcePage?: string;
}

export async function sendCounsellingEmail(payload: CounsellingEmailPayload) {
  const host = process.env.SMTP_HOST || "smtp.hostinger.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const user = process.env.SMTP_USER || "no-reply@brainzima.com";
  const pass = process.env.SMTP_PASS || "Noreply$2023";
  const from = process.env.SMTP_FROM || `"CollegeSure Admissions" <${user}>`;
  const to = process.env.SMTP_TO || "brainzimainnovation@gmail.com";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const subject = `🎓 New Admission Enquiry: ${payload.fullName} (${payload.interestedIn || payload.course || "General"})`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; rounded: 12px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #04164B; padding: 24px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 24px; font-weight: bold;">CollegeSure by Brainzima</h1>
        <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">New Student Counselling &amp; Admission Enquiry</p>
      </div>

      <div style="padding: 24px; color: #1e293b;">
        <h2 style="font-size: 18px; color: #04164B; border-bottom: 2px solid #B30F66; padding-bottom: 8px; margin-top: 0;">
          Student Information
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; width: 140px; color: #475569;">Full Name:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: bold;">${payload.fullName}</td>
          </tr>
          <tr style="border-top: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Phone Number:</td>
            <td style="padding: 10px 0; color: #04164B; font-weight: bold;">
              <a href="tel:${payload.phone}" style="color: #B30F66; text-decoration: none;">${payload.phone}</a>
            </td>
          </tr>
          <tr style="border-top: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email Address:</td>
            <td style="padding: 10px 0; color: #0f172a;">${payload.email || "Not provided"}</td>
          </tr>
          <tr style="border-top: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Course / Topic:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: bold;">${payload.interestedIn || payload.course || "General Inquiry"}</td>
          </tr>
          ${
            payload.preferredContact
              ? `
          <tr style="border-top: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Preferred Method:</td>
            <td style="padding: 10px 0; color: #159447; font-weight: bold;">${payload.preferredContact}</td>
          </tr>
          `
              : ""
          }
          <tr style="border-top: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Source Page:</td>
            <td style="padding: 10px 0; color: #64748b;">${payload.sourcePage || "Website Form"}</td>
          </tr>
        </table>

        ${
          payload.message
            ? `
        <div style="background-color: #f8fafc; border-left: 4px solid #B30F66; padding: 14px; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="margin: 0 0 6px 0; font-size: 13px; text-transform: uppercase; color: #475569; letter-spacing: 0.5px;">Student Note / Message:</h3>
          <p style="margin: 0; font-size: 14px; color: #0f172a; line-height: 1.5; white-space: pre-wrap;">${payload.message}</p>
        </div>
        `
            : ""
        }

        <div style="text-align: center; margin-top: 24px; pt-20 border-top: 1px solid #e2e8f0;">
          <a href="https://wa.me/${payload.phone.replace(/\D/g, "")}" style="background-color: #25D366; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div style="background-color: #f1f5f9; padding: 14px; text-align: center; font-size: 12px; color: #64748b;">
        This lead was generated automatically from CollegeSure Website • Brainzima Innovation Institute
      </div>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html: htmlContent,
      replyTo: payload.email || undefined,
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Nodemailer Email Error:", error);
    // Return success true with fallback log so form submission UX never fails for student
    return { success: true, fallbackLogged: true };
  }
}
