
import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Icon, Segment, Header, Comment, Form, Dimmer, Loader } from 'semantic-ui-react'
import moment from 'moment'

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
    this.setState({ input: '' })
  }

  isSubscribed = () => {
    return this.props.subscriptions.some((value) => value.name == this.props.communityName)
  }

  handleSubscription = () => {
    this.isSubscribed() ? this.props.unsubscribe(this.props.communityName) : this.props.subscribe(this.props.communityName)
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView()
  }

  render() {
    const { communityName, messages } = this.props

    return (
      <div>
        <Dimmer active={this.props.loading}>
          <Loader active={this.props.loading} />
        </Dimmer>
        <Header as='h3' style={{display: 'inline-block'}}>{communityName.charAt(0).toUpperCase() + communityName.slice(1)}</Header>
        <Button
          disabled={!this.props.token}
          size='mini'
          style={{float: 'right', marginTop: '23px', backgroundColor: '#FFB88C', color: '#FFF'}}
          as='a'
          icon
          labelPosition='right'
          onClick={ () => this.handleSubscription() }
        >
        {this.isSubscribed() ? 'Unsubscribe' : 'Subscribe' }<Icon name={this.isSubscribed() ? 'star' : 'empty star'} />
        </Button>
        <Segment basic floated style={{ padding: 0 }}>
          <Comment.Group style={{ height: `${this.state.height - 153 }px`, width: '100%', overflowY: 'auto', maxWidth: 'none' }}>

            {messages.map(message => (
              <Comment>
                <Comment.Content>
                  <Comment.Author as='a'>{message.username.charAt(0).toUpperCase() + message.username.slice(1)}</Comment.Author>
                  <Comment.Metadata>
                    <div>{moment(message.date).fromNow()}</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>{message.message}</p>
                  </Comment.Text>
                </Comment.Content>
              </Comment>
            ))}
            <div style={{float: 'left', clear: 'both'}} ref={(el) => { this.messagesEnd = el }}></div>
          </Comment.Group>
          <Form style={{marginBottom: '15px'}} onSubmit={(e) => e.target.reset()}>
            <Form.Input
              disabled={!this.props.token}
              style={{ width: '100%' }}
              action={{ style: { backgroundColor: '#FFB88C', color: '#FFF' }, labelPosition: 'right', icon: 'send', content: 'Send', onClick: (e) => { this.handleSubmit() } }}
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
