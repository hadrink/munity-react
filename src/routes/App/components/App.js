import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Input, Icon, Button, Comment, Form } from 'semantic-ui-react'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div style={{position: 'relative', height: '100%'}}>
        <div style={{float: 'left', height: '100%'}}>
        <Menu size='large' pointing secondary vertical style={{ height: '100%' }}>
          <Menu.Item header>Trends</Menu.Item>
          <Menu.Item>
            <Input icon='search' placeholder='Search a community...' />
          </Menu.Item>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Item header><Icon name='add circle' />Yours</Menu.Item>
          <Menu.Item name='your1' active={activeItem === 'your1'} onClick={this.handleItemClick} />
          <Menu.Item name='your2' active={activeItem === 'your2'} onClick={this.handleItemClick} />
          <Menu.Item name='your3' active={activeItem === 'your3'} onClick={this.handleItemClick} />
        </Menu>
        </div>
        <div style={{float: 'left', height: '100%'}}>
        <Comment.Group style={{position: 'relative', height: '100%'}}>
          <Comment>
            <Comment.Avatar as='a' src='/assets/images/avatar/small/joe.jpg' />
            <Comment.Content>
              <Comment.Author>Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <div>1 day ago</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there.</p>
                <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
            <Comment.Content>
              <Comment.Author>Christian Rocha</Comment.Author>
              <Comment.Metadata>
                <div>2 days ago</div>
              </Comment.Metadata>
              <Comment.Text>I re-tweeted this.</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
            <Input style={{position: 'absolute', width: '100%', bottom: 0}}
              action={{ color: 'red', labelPosition: 'right', icon: 'copy', content: 'Send' }}
              placeholder='Send a message...'
            />
        </Comment.Group>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  // counter: PropTypes.number.isRequired,
  // increment: PropTypes.func.isRequired,
  // doubleAsync: PropTypes.func.isRequired,
}

export default App
