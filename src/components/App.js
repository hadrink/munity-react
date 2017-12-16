import React from 'react'
import PropTypes from 'prop-types'
import { Input, Comment } from 'semantic-ui-react'
import MunityMenu from '../containers/MenuContainer'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeItem: 'home',
      showLoginModal: false,
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className={'munity-app'} style={{ position: 'relative', height: '100%' }}>
        <div style={{ float: 'left', height: '100%' }}>
          <MunityMenu />
        </div>
        <div style={{ float: 'left', height: '100%' }}>
          <Comment.Group style={{ position: 'relative', height: '100%' }}>
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
            <Input style={{ position: 'absolute', width: '100%', bottom: 0 }}
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
