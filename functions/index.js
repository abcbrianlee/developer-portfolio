const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});
const emailPassword = process.env.EMAIL_PASSOWRD;

// Create a transport using nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "abcbrianlee@gmail.com",
    pass: emailPassword,
  },
});

// Define the Cloud Function
exports.sendEmail = functions.https.onRequest(async (req, res) => {
  cors()(req, res, () => {
    // Extract the required information from the request body
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    const {name, email, message} = req.body;

    // Compose the email message
    const mailOptions = {
      from: email,
      to: "abcbrianlee@gmail.com",
      subject: "New Message from Contact Form",
      text: "Name: " + name + "\nEmail: " + email + "\nMessage: " + message,
    };

    // Send the email using the transporter to the 'to' in mailOptions
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  });
});
