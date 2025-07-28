// api/send-form.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const data = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or your SMTP service
      auth: {
        user: process.env.EMAIL_USER, // set in Vercel env variables
        pass: process.env.EMAIL_PASS, // set in Vercel env variables
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "deekshav079@gmail.com",
      subject: "New Enquiry Submission",
      text: JSON.stringify(data, null, 2),
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}
