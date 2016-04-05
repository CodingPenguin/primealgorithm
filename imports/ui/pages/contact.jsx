import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'

import Contact_Form from '../components/contact-form.jsx'

export default class Contact extends React.Component {

  constructor() {
    super()
    this.state = {
      contactTitle: "Let's Get In Touch!"
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    document.title = "Contact | Prime Calculate"
  }

  onSubmit(e) {
    e.preventDefault()

    name = $('#name').val()
    email = $('#email').val()
    message = $('#message').val()

    let contactTitle = (message) => {
      this.setState({
        contactTitle: message
      })
    }

    if (name === "" && email === "" && message === "" ) {
      contactTitle("Oops, All Fields Are Required")
    } else {
      Meteor.call("sendEmail", name, email, message, (err, res) => {
        if (err) {
          console.log(err.reason)
        } else {
          contactTitle(`${name}, your message has been sent!`)
          setTimeout(() => {
            contactTitle("Let's Get In Touch!")
          }, 10000)
        }
      })
      $('#name').val("")
      $('#email').val("")
      $('#message').val("")
    }
  }

  render() {
    return (
      <div class="container">
        <Contact_Form
          contactTitle={this.state.contactTitle}
          name="name"
          email="email"
          message="message"
          onClick={this.onSubmit}/>
      </div>
    )
  }

}
