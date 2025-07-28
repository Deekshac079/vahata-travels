import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // ✅ CORS FIX
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { organization_name, contact_person, phone, email, city } = req.body;

    // ✅ Nodemailer transporter (use Gmail or custom SMTP)
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Enquiry Form" <${process.env.EMAIL_USER}>`,
      to: "deekshav079@gmail.com", // where you want to receive emails
      subject: "New Enquiry Form Submission",
      text: `
        Organization: ${organization_name}
        Contact: ${contact_person}
        Phone: ${phone}
        Email: ${email}
        City: ${city}
      `,
      html: `
        <h3>New Enquiry Received</h3>
        <p><strong>Organization:</strong> ${organization_name}</p>
        <p><strong>Contact Person:</strong> ${contact_person}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
