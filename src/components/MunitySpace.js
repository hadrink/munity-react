
import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Icon, Segment, Header, Comment, Form, Dimmer, Loader } from 'semantic-ui-react'
import moment from 'moment'
import Linkify, { linkify } from 'react-linkify'
import Lottie from 'react-lottie';
import * as animationData from '../logo.json'

class MunitySpace extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    input: '',
    width: 0,
    height: 0,
  }

  animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    prerender: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  componentDidMount() {
    moment.locale(this.props.locale)
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
    const { communityName, user, admin, screenType } = this.props

    return (
      <div>
        <Dimmer active={this.props.loading}>
          <Lottie options={this.animationOptions}
              height={35}
              width={70}
              isStopped={!this.props.loading}
          />
        </Dimmer>
        <Header as='h3'>{communityName.charAt(0).toUpperCase() + communityName.slice(1) + ' ' + this.props.localized['Title'] }</Header>
        <Segment basic floated style={{ padding: 0 }}>
          <Comment.Group style={{ height: `${screenType == 'desktop' ? this.state.height - 138 : this.state.height - 195 }px`, width: '100%', overflowY: 'auto', maxWidth: 'none' }}>

            {this.props.space.toJS().map((message, id) => (
              <Comment>
                <Comment.Content>
                  <Comment.Author as='a'>{message.username.charAt(0).toUpperCase() + message.username.slice(1)}</Comment.Author>
                  <Comment.Metadata>
                    <div>{moment(message.date.$date).fromNow()}</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p><Linkify properties={{target: '_blank' }}>{message.content}</Linkify></p>
                    {console.log(linkify.match(message.content))}
                  </Comment.Text>
                </Comment.Content>
              </Comment>
            ))}
            <div ref={(el) => { this.messagesEnd = el }}></div>
          </Comment.Group>
          <Form style={{marginBottom: '15px', display: user == admin ? 'block' : 'none'}} onSubmit={ (e) => e.target.reset() }>
            <Form.Input
              disabled={!this.props.token}
              style={{ width: '100%'}}
              action={{ style: { backgroundColor: '#FFB88C', color: '#FFF' }, labelPosition: 'right', icon: 'share', content: this.props.localized['Share'], onClick: (e) => { this.handleSubmit() } }}
              placeholder={ this.props.localized['ShareSomething'] }
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
