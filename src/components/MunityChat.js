
import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Icon, Segment, Header, Comment, Form, Dimmer, Loader } from 'semantic-ui-react'

class MunityChat extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    input: '',
    width: 0,
    height: 0,
  }

  componentDidMount() {
    this.scrollToBottom()
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillMount() {
    this.updateDimensions()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  updateDimensions = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = () => {
    this.props.sendMessage(this.state.input)
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView()
  }

  render() {
    return (
      <div>
        <Dimmer active={this.props.loading}>
          <Loader active={this.props.loading} />
        </Dimmer>
        <Header as='h3'>{this.props.communityName}</Header>
        <Segment basic floated style={{ padding: 0 }}>
          <Comment.Group style={{ height: `${this.state.height - 138 }px`, width: '100%', overflowY: 'scroll', maxWidth: 'none' }}>

            {this.props.messages.map(message => (
              <Comment>
                <Comment.Content>
                  <Comment.Author>{message.username}</Comment.Author>
                  <Comment.Metadata>
                    <div>1 day ago</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>{message.message}</p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            ))}
            <div style={{float: 'left', clear: 'both'}} ref={(el) => { this.messagesEnd = el }}></div>
          </Comment.Group>
          <Form style={{marginBottom: '15px'}}>
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

MunityChat.propTypes = {

}

export default MunityChat
