import { Meteor } from 'meteor/meteor'
import { Email } from 'meteor/email'
import { check } from 'meteor/check'

Meteor.startup(() => {
  process.env.MAIL_URL = 'smtp://lephankoby.meteor%40gmail.com:kobymeteor7@smtp.gmail.com:465/'
})

Meteor.methods({
  sendEmail(name, email, message) {

    check([name, email, message], [String])
    this.unblock()

    Email.send({
      from: email,
      to: "lephanvanielle@gmail.com",
      subject: "Message from Prime Calculate",
      text: `Name: ${name} \n Email: ${email} \n Message: ${message} \n Date: ${new Date()}`
    })
    console.log("Email Sent!")
  }
})
