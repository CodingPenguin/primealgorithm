import React from 'react'
import { render } from 'react-dom'

import Navigation from '../components/navigation.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <main>{this.props.children}</main>
      </div>
    )
  }
}
