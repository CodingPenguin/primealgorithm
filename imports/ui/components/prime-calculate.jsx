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
        onChange={this.props.onChange}/>
    )
  }
}
