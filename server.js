// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send('Server is running!');
  });
  

// Contact form endpoint
app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Validation (basic example)
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password or your email password
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: "aryanpachchigar91@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
