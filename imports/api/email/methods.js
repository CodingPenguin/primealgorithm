import { Meteor } from 'meteor/meteor'
import { Email } from 'meteor/email'
import { check } from 'meteor/check'

Meteor.methods({
  export default sendContact(name, email, message) {

    check([name, email, message], [String])
    this.unblock()

    let emailMessage = () => {
      return `Name: ${name} \n
              Email: ${email} \n
              Message: ${message} \n
              Date: ${new Date()}`
    }

    Email.send({
      from: email,
      to: "lephanvanielle@gmail.com",
      subject: "Message from Prime Cauculate",
      text: emailMessage()
    })
  }
})
