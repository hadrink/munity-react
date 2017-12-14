
import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Form, Button, Message } from 'semantic-ui-react'

class CreateCommunity extends React.Component {
  constructor(props) {
    super(props)

    // props.reset()
  }

  state = {
    name: '',
  }

  handleCreateCommunitySubmit = () => {
    this.props.createCommunity(this.state.name)
  }

  createCommunityFormIsInvalid = () => {
    return !this.state.name
  }

  render () {
    return (
      <div>
        <Message hidden={!this.props.error.reason} color='red'>{this.props.error.reason}</Message>
        <Form>
          <Form.Input
            placeholder='Name'
            onChange={(e) => { this.setState({ 'name': e.target.value }) }}
          />
          <Button
            disabled={this.createCommunityFormIsInvalid()}
            type='submit'
            onClick={() => { this.handleCreateCommunitySubmit() }}>Create
                </Button>
        </Form>
      </div>

    )
  }
}

CreateCommunity.propTypes = {
  createCommunity: PropTypes.func.isRequired,
  error: PropTypes.object,
}

export default CreateCommunity
