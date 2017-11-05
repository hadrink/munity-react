import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap'

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

  render() {
    return (
      <div>
        <form>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Enter username"
            onChange={(e) => {this.props.setUserDataValue('username', e.value)}}
          />
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
          />
          <FieldGroup
            id="formControlsPassword"
            label="Password"
            type="password"
          />
          <Button type="submit">
            Submit
          </Button>
        </form>|
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
