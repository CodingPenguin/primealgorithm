import React from 'react'
import { render } from 'react-dom'
import TextField from 'material-ui/lib/text-field'

const styles = {
  rootStyle: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto"
  },
  hintStyle: {
    textAlign: "center"
  },
  inputStyle: {
    color: "#fffff",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "300",
    letterSpacing: "2px",
    WebkitBoxShadow: "0 0 0 0 #fff",
    boxShadow: "0 0 0 0 #fff"
  },
  underlineStyle: {
    borderColor: "#fff"
  },
  underlineFocusStyle: {
    borderColor: "#EF5350"
  }
}

export default class Prime_Calculate extends React.Component {
  constructor() {
    super()
  }
  onChange(e) {
    let primeNumber = $('#prime-number').val()
    if ($.isNumeric(primeNumber) === true) {
      switch (true) {
        case primeNumber == 1 || primeNumber == 0: {
          this.props.title("Neither Composite or Prime")
          console.log("Neither Composite or Prime")
          break;
        }
        case primeNumber == 2 || primeNumber == 3: {
          console.log(`${primeNumber} is a prime number.`)
          break;
        }
        case primeNumber % 2 === 0 || primeNumber % 3 === 0: {
          console.log(`${primeNumber} is a composite number.`)
          break;
        }
        default: {
          console.log(`${primeNumber} is a prime number.`)
        }
      }
    }
    else if (primeNumber === "") {
      console.log("Number?")
    }
    else {
      console.log("Accep Only Number")
    }
  }
  render() {
    return (
      <TextField
        id="prime-number"
        hintStyle={styles.hintStyle}
        inputStyle={styles.inputStyle}
        hintText=""
        fullWidth="true"
        underlineStyle={styles.underlineStyle}
        underlineFocusStyle={styles.underlineFocusStyle}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}
