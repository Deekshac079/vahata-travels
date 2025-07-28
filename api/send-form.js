import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Trip Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Trip Form Submission",
      text: `
        Organization: ${data.organization_name}
        Contact Person: ${data.contact_person}
        Phone: ${data.phone}
        Email: ${data.email}
        City: ${data.city}
        Trip Types: ${data.tripType}
        Students: ${data.students}
        Grade/Class: ${data.grade_class}
        Trip Date: ${data.tripDate}
        Requirements: ${data.requirements}
      `
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
}
