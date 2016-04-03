import React from 'react'
import { render } from 'react-dom'

import Contact_Form from '../components/contact-form.jsx'

export default class Contact extends React.Component {
  componentDidMount() {
    document.title = "Contact | Prime Calculate"
  }
  render() {
    return (
      <div class="container">
        <Contact_Form/>
      </div>
    )
  }
}
