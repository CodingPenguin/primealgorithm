import React from 'react'
import { render } from 'react-dom'
import Paper from 'material-ui/lib/paper';

import Prime_Calculate from '../components/prime-calculate.jsx'

const styles = {
  container: {
    top: "50%",
    marginTop: "100px",
    paddingLeft: "20px",
    paddingRight: "20px",
    position: "relative"
  },
  h2: {
    marginTop: "30px",
    marginBottom: "30px",
    fontWeight: "300",
    letterSpacing: "2px"
  },
  paper: {
    height: 100,
    width: "90%",
    margin: "4em",
    textAlign: 'center',
    display: 'inline-block'
  }
}

export default class Prime extends React.Component {
  componentDidMount() {
    document.title = "Home | Prime Calculate"
  }
  render() {
    return (
      <div align="center" className="container" style={styles.container}>
       <Paper style={styles.paper} zDepth={2}>
          <h2 className="text-center" style={styles.h2}>Number?</h2>
        </Paper>
        <Prime_Calculate/>
        <main>{this.props.content}</main>
      </div>
    )
  }
}
