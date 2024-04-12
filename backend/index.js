require("dotenv").config()

const cors = require("cors")

const HTML_TEMPLATE = require("./mail-template")
const message = "This is Md Rizabul and i am testing "
const SENDMAIL = require("./mailer")

const express = require("express")
const app = express()
app.use(cors())
app.use(express.json())

const User = require("./db/index")

const port = 3009

app.get("/api/sendmail", (req, res) => {
  SENDMAIL(options, (info) => {
    console.log("Email sent successfully")
    console.log("message id ", info.messageId)
  })
  res.json({
    message: "hi how are you ",
  })
})

app.get("/api/user/email", async (req, res) => {
  console.log("inside get ")
  const data = await User.find({})
  console.log(data)

  // sending email

  res.json({
    message: data,
  })
})

app.post("/api/userpost", async (req, res) => {
  console.log("inside post ")
  try {
    console.log("first " + req.body)
    const email_of_user = req.body.email

    const options = {
      from: "TESTING <jaanmustafa800@gmail.com>",
      to: email_of_user, // Update recipient email here
      subject: "Send email in Node.JS with Nodemailer using Gmail account",
      text: message,
      html: HTML_TEMPLATE(message),
    }

    await User.create({ email: email_of_user })
    SENDMAIL(options, (info) => {
      console.log("Email sent successfully")
      console.log("message id ", info.messageId)
    })

    res.send("created")
  } catch (err) {
    console.log(err + "   hi")
    res.sendStatus(500)
  }
})

app.listen(port, () => {
  console.log("hi how are you ")
})
