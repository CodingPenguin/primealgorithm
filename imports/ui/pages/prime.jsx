import React from 'react'
import { render } from 'react-dom'
import Paper from 'material-ui/lib/paper'
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
    height: "auto",
    width: "100%",
    marginBottom: "10em",
    textAlign: 'center',
    display: 'inline-block'
  }
}

export default class Prime extends React.Component {
  constructor() {
    super()
    this.state = {
      number: "Number?"
    }
  }
  componentDidMount() {
    document.title = "Home | Prime Calculate"
  }
  onChange(e) {
    let primeNumber = $('#prime-number').val()

    let inputResult = (n) => {
      this.setState({
        number: n
      })
    }

    if ($.isNumeric(primeNumber) === true) {
      switch (true) {
        case primeNumber == 1 || primeNumber == 0: {
          inputResult("Neither Composite or Prime")
          break;
        }
        case primeNumber == 2 || primeNumber == 3: {
          inputResult(`${primeNumber} is a prime number.`)
          break;
        }
        case primeNumber % 2 === 0 || primeNumber % 3 === 0: {
          if (primeNumber.length > 15) {
            inputResult("Composite Number")
          } else {
            inputResult(`${primeNumber} is a composite number.`)
          }
          break;
        }
        default: {
          if (primeNumber.length > 15) {
            inputResult("Prime Number")
          } else {
            inputResult(`${primeNumber} is a prime number.`)
          }
        }
      }
    }
    else if (primeNumber == "") {
      inputResult("Number?")
    }
    else {
      inputResult("Accept Only Number")
    }
  }

  render() {
    return (
      <div align="center" className="container-fluid" style={styles.container}>

         <Paper style={styles.paper} zDepth={0}>
            <h2 className="text-center" style={styles.h2}>
              {this.state.number}
            </h2>
         </Paper>

        <Prime_Calculate onChange={this.onChange.bind(this)}/>
      </div>
    )
  }
}
