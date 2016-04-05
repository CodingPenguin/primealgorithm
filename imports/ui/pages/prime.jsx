import React from 'react'
import { render } from 'react-dom'

/*
  Import Components
*/
import Paper from 'material-ui/lib/paper'
import Prime_Form from '../components/prime-form.jsx'

/*
  Styles
*/
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

/*
  Begin React
*/
export default class Prime extends React.Component {

  constructor() {
    super()
    this.state = {
      number: "Number?",
      help: ""
    }
  }

  componentDidMount() {
    document.title = "Home | Prime Calculate"
  }

  onChange(e) {
    let primeNumber = $('#prime-number').val()

    let inputResult = (n = "Number?") => {
      this.setState({
        number: n,
        help: "",
        alert: ""
      })
    }

    if ($.isNumeric(primeNumber) === true) {

      // Begin Prime Number Algorithm
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
            this.setState({
              alert: "Exceed 15 characters so data-binding is turned off, but everything still works :)"
            })
          } else {
            inputResult(`${primeNumber} is a composite number.`)
          }
          break;
        }
        default: {
          if (primeNumber.length > 15) {
            inputResult("Prime Number")
            this.setState({
              alert: "Exceed 15 characters so data-binding is turned off, but everything still works :)"
            })
          } else {
            inputResult(`${primeNumber} is a prime number.`)
          }
        }
      }
    }
    else if (primeNumber.constructor == String) {
      switch (primeNumber) {
        case "Martha": {
          inputResult(`${primeNumber} is a hoe.`)
          break;
        }
        case "Winni":
        case "Vicky": {
          inputResult(`${primeNumber} is awesome.`)
          break;
        }
        case "Vanielle": {
          inputResult(`${primeNumber}, original developer of this amazing site.`)
          break;
        }
        case "Danny": {
          inputResult(`${primeNumber}, original developer of the Prime Algorithm.`)
          break;
        }
        case "Help": {
          inputResult("Type a number and I will evaluate whether it is prime or composite :)")
          break;
        }
        default: {
          inputResult()
          this.setState({
            help: "You can type 'Help' for help"
          })
        }
      }
    }
    else {
      inputResult()
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
        <Prime_Form onChange={this.onChange.bind(this)}/>

        <h6 className="text-center">
          {this.state.help}
        </h6>
        <h6 className="text-center">
          {this.state.alert}
        </h6>
      </div>
    )
  }
}
