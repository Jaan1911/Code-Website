
const nodemailer =require("nodemailer")
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "jaanmustafa800@gmail.com",
    pass: process.env.pass,
  },
})


const SENDMAIL = async (mailDetails, callback) => {
  try {
    const info = await transporter.sendMail(mailDetails)
    callback(info)
  } catch (error) {
    console.log(error)
  }
}

module.exports = SENDMAIL