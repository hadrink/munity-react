
import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Icon, Segment, Header, Comment, Form, Dimmer, Loader } from 'semantic-ui-react'
import moment from 'moment'

class MunitySpace extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    input: '',
    width: 0,
    height: 0,
  }

  componentDidMount() {
    this.scrollToBottom();
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillMount() {
    this.updateDimensions()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView();
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = () => {
    this.props.sendMessage(this.props.communityName, this.state.input)
    this.setState({ input: '' })
  }

  render() {
    const { communityName, user, admin } = this.props

    return (
      <div>
        <Dimmer active={this.props.loading}>
          <Loader active={this.props.loading} />
        </Dimmer>
        <Header as='h3'>{communityName.charAt(0).toUpperCase() + communityName.slice(1) + ' Space'}</Header>
        <Segment basic floated style={{ padding: 0 }}>
          <Comment.Group style={{ height: `${this.state.height - 138 }px`, width: '100%', overflowY: 'auto', maxWidth: 'none' }}>

            {this.props.space.toJS().map((message, id) => (
              <Comment>
                <Comment.Content>
                  <Comment.Author as='a'>{message.username}</Comment.Author>
                  <Comment.Metadata>
                    <div>{moment(message.date.$date).format("ddd LT")}</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>{message.content}</p>
                  </Comment.Text>
                </Comment.Content>
              </Comment>
            ))}
            <div ref={(el) => { this.messagesEnd = el }}></div>
          </Comment.Group>
          <Form style={{marginBottom: '15px', display: user == admin ? 'block' : 'none'}}>
            <Form.Input
              disabled={!this.props.token}
              style={{ width: '100%'}}
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

MunitySpace.propTypes = {

}

export default MunitySpace
