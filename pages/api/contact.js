// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'
require('dotenv').config()

export default (req, res) => {
  
  const { name, email, text } = JSON.parse(req.body)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `New message from ${email}`,
    text: `${name} says:\n${text}`
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err)
      res.send(`Error: ${JSON.stringify(err)}`)
    } else {
      console.log("Message sent!")
      res.send("Success!")
    }
  })
}
