import { Meteor } from 'meteor/meteor'

import React from 'react'
import { render } from 'react-dom'

import Contact_Form from '../components/contact-form.jsx'
import sendContact from '../../api/email/methods.js'

export default class Contact extends React.Component {
  componentDidMount() {
    document.title = "Contact | Prime Calculate"
  }
  onSubmit(e) {
    e.preventDefault()

    name = $('#name').val()
    email = $('#email').val()
    message = $('#message').val()

    if (name === "" && email === "" && message === "" ) {
      alert("All Fields Required")
    } else {
      Meteor.call("sendContact", name, email, message)
      $('#name').val("")
      $('#email').val("")
      $('#message').val("")
    }

    console.log(name, email, message)
  }
  render() {
    return (
      <div class="container">
        <Contact_Form
          name="name"
          email="email"
          message="message"
          onClick={this.onSubmit}/>
      </div>
    )
  }
}
