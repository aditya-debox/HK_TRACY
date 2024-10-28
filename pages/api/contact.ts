import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Initializing nodemailer with settings
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    secure: true,
  });

  // Configuring Mail Data
  const mailData = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: `Inquiry from ${req.body.name}`,
    html: `<p>Hello</p>
    <p>${req.body.name} has sent an inquiry for catering!</p>
    <p>Number of guests: ${req.body.guest}</p>
    <p>Event Details: ${req.body.event}</p>

    <p>The contact details of ${req.body.name} are:</p>
    <p>Contact Number: ${req.body.phone} </p>
    <p>Contact Email: ${req.body.email} </p>

    <p> Regards, </p>
    <p> Himalayan Kitchen</p>;
    `,
  };
  // Sending the email, followed by status code.
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
  res.send(null);
}
