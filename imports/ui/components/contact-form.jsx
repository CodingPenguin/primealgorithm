import React from 'react'
import { render } from 'react-dom'

import ContentSend from 'material-ui/lib/svg-icons/content/send'
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'


const styles = {
  container: {
    marginTop: 100,
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  paper: {
    height: "100%",
    width: "100%",
    textAlign: 'center',
    display: 'inline-block',
  },
  h4: {
    color: "#EF5350"
  },
  hintStyle: {
    textAlign: "center"
  },
  inputStyle: {
    color: "#fffff",
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "300",
    letterSpacing: "1px",
    WebkitBoxShadow: "0 0 0 0 #fff",
    boxShadow: "0 0 0 0 #fff"
  },
  underlineStyle: {
    borderColor: "rgba(43, 159, 226, 0.78)"
  },
  underlineFocusStyle: {
    borderColor: "#EF5350"
  },
  floatingLabelStyle: {
    color: "#EF5350",
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "left"
  },
  floatingActionButton: {
    marginRight: 20,
    "float": "right",
    position: "fixed",
    right: 0,
    bottom: 20,
    backgroundColor: "#EF5350",
    transform: "rotate(-45deg)"
  }
}

export default class Contact_Form extends React.Component {
  render() {
    return (
      <form className="container-fluid" style={styles.container}>
        <Paper style={styles.paper} zDepth={2}>
        <h4 style={styles.h4}>{this.props.contactTitle}</h4>
          <div className="row" style={{ paddingLeft: 30, paddingRight: 30, }}>
            <TextField
              id={this.props.name}
              hintStyle={styles.hintStyle}
              inputStyle={styles.inputStyle}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelText="Name:"
              hintText=""
              fullWidth={true}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
              onChange={this.props.onChange}/>
          </div>
          <div className="row" style={{ paddingLeft: 30, paddingRight: 30, }}>
            <TextField
              id={this.props.email}
              hintStyle={styles.hintStyle}
              inputStyle={styles.inputStyle}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelText="Email:"
              fullWidth={true}
              hintText=""
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
              onChange={this.props.onChange}/>
          </div>
          <div className="row" style={{ paddingLeft: 30, paddingRight: 30, }}>
            <TextField
              id={this.props.message}
              hintStyle={styles.hintStyle}
              inputStyle={styles.inputStyle}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelText="Message:"
              hintText=""
              fullWidth={true}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
              onChange={this.props.onChange}/>
          </div>
        </Paper>
        <FloatingActionButton
            backgroundColor={styles.floatingActionButton.backgroundColor}
            style={styles.floatingActionButton}
            onClick={this.props.onClick}>
              <ContentSend/>
        </FloatingActionButton>
      </form>
    )
  }
}
