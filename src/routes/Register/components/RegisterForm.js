import React from 'react'
import PropTypes from 'prop-types'
//import { Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap'

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Register extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    username: '',
    email:    '',
    password: '',
  }

  // handleUsernameChange = (event) => {
  //   this.setState({username: event.target.value})
  // }

  // handleEmailChange = (event) => {
  //   this.setState({email: event.target.value})
  // }

  // handlePasswordChange = (event) => {
  //   this.setState({password: event.target.value})
  // }

  // handleSubmit = () => {
  //   console.log(this.state.usernme)
  //   this.props.register(this.state.username, this.state.email, this.state.password)
  // }

  render() {
    return (
      <div>
        {/* <form>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Enter username"
            onChange={this.handleUsernameChange}
          />
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
            onChange={this.handleEmailChange}
          />
          <FieldGroup
            id="formControlsPassword"
            label="Password"
            type="password"
            onChange={this.handlePasswordChange}
          />
          <Button type="button" onClick={this.handleSubmit}>
            Submit
          </Button>
        </form>| */}
      </div>
    )
  }
}

Register.propTypes = {
  // counter: PropTypes.number.isRequired,
  // increment: PropTypes.func.isRequired,
  // doubleAsync: PropTypes.func.isRequired,
}

export default Register
