import React from 'react'
import { render } from 'react-dom'

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>I am Contact</h1>
        <main>{this.props.content}</main>
      </div>
    )
  }
}
