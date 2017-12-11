
import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Form, Button } from 'semantic-ui-react'

class LoginRegister extends React.Component {
  state = {
    login: {
      username: '',
      password: '',
    },
    register: {
      username: '',
      email: '',
      password: '',
    },
  }

  handleLoginSubmit = () => {
    const login = this.state.login
    if (!login.username || !login.password) {
      return
    }
    this.props.login(login.username, login.password)
  }

  handleRegisterSubmit = () => {
    this.props.register(this.state.register.username, this.state.register.email, this.state.register.password)
  }

  inputOnChange = (stateKey, key, value) => {
    const stateToUpdate = { ...this.state[stateKey] }
    stateToUpdate[key] = value
    this.setState({ [stateKey]: stateToUpdate })
  }

  loginFormIsInvalid = () => {
    const login = this.state.login
    return !login.username || !login.password
  }

  registerFormIsInvalid = () => {
    const register = this.state.register
    return (!register.username || !register.email || !register.password)
  }

  render () {
    return (
      <Grid columns={2} divided verticalAlign='top'>
        <Grid.Row stretched>
          <Grid.Column>
            <h3>Login</h3>
            <Form>
              <Form.Input
                placeholder='Username'
                onChange={(e) => { this.inputOnChange('login', 'username', e.target.value) }}
              />
              <Form.Input
                placeholder='Password'
                type='password'
                onChange={(e) => { this.inputOnChange('login', 'password', e.target.value) }} />
              <Button disabled={this.loginFormIsInvalid()} loading={this.props.loading} type='submit' onClick={() => { this.handleLoginSubmit() }}>Submit</Button>
            </Form>
          </Grid.Column>
          <Grid.Column>
            <h3>Register</h3>
            <Form>
              <Form.Input
                placeholder='Username'
                onChange={(e) => { this.inputOnChange('register', 'username', e.target.value) }}
              />
              <Form.Input
                placeholder='email'
                type='email'
                onChange={(e) => { this.inputOnChange('register', 'email', e.target.value) }}
              />
              <Form.Input
                placeholder='Password'
                type='password'
                onChange={(e) => { this.inputOnChange('register', 'password', e.target.value) }}
              />
              <Button disabled={this.registerFormIsInvalid()} type='submit' onClick={() => { this.handleRegisterSubmit() }}>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

LoginRegister.propTypes = {
  register: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default LoginRegister
