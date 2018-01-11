
import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Icon, Segment, Header, Comment, Form, Dimmer, Loader } from 'semantic-ui-react'

class MunitySpace extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    input: ''
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = () => {
    this.props.sendMessage(this.props.communityName, this.state.input)
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Dimmer active={this.props.loading}>
          <Loader active={this.props.loading} />
        </Dimmer>
        <Header style={{ width: '100%' }} as='h3'>{this.props.communityName + ' Space' }</Header>
        <Segment basic floated style={{ width: '100%', height: '100%', top: '-140px', padding: '140px 0 0 0' }}>
          <Comment.Group style={{ height: '100%', width: '100%', overflowY: 'scroll', maxWidth: 'none' }}>

            {this.props.space.toJS().map(message => (
              <Comment>
                <Comment.Content>
                  {/* <Comment.Author>{message.username}</Comment.Author> */}
                  <Comment.Metadata>
                    <div>{message.date.$date}</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>{message.content}</p>
                  </Comment.Text>
                </Comment.Content>
              </Comment>
            ))}

          </Comment.Group>
          <Form>
            <Form.Input
              disabled={!this.props.token}
              style={{ width: '100%' }}
              action={{ color: 'red', labelPosition: 'right', icon: 'copy', content: 'Send', onClick: (e) => { this.handleSubmit() } }}
              placeholder='Send a message...'
              onChange={(e) => this.handleInputChange(e)}
            />
          </Form>
        </Segment>
      </div>
    )
  }
}

MunitySpace.propTypes = {

}

export default MunitySpace
