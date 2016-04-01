import React from 'react'
import { render } from 'react-dom'

import Navigation from './components/navigation.jsx'
import { Button } from 'react-materialize'

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
