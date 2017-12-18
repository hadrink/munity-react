
import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Input, Button, Icon, Modal, Dimmer, Loader, Sidebar, Segment, Header, Comment, Item } from 'semantic-ui-react'
import { Link } from 'react-router'
import LoginRegister from '../containers/LoginRegisterContainer'
import CreateCommunity from '../containers/CreateCommunityContainer'

class MunityMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    activeItem: 'home',
    showLoginModal: false,
    showCreateCommunityModal: false,
    visible: true,
  }

  LoginModal = () => (
    <Modal open={this.state.showLoginModal} onClose={() => { this.closeLoginModal() }}>
      <Modal.Header>Login / Register</Modal.Header>
      <Modal.Content>
        <LoginRegister />
      </Modal.Content>
    </Modal>
  )

  CreateCommunityModal = () => (
    <Modal size='tiny' open={this.state.showCreateCommunityModal} onClose={() => { this.closeCreateCommunityModal() }}>
      <Modal.Header>Create community</Modal.Header>
      <Modal.Content>
        <CreateCommunity />
      </Modal.Content>
    </Modal>
  )

  componentWillReceiveProps(nextProps) {
    if (nextProps.token && this.state.showLoginModal) {
      this.closeLoginModal()
    }
  }

  openLoginModal = () => {
    this.setState({ 'showLoginModal': true })
  }

  openCreateCommunityModal = () => {
    this.setState({ 'showCreateCommunityModal': true })
  }

  closeLoginModal = () => {
    this.setState({ 'showLoginModal': false })
  }

  closeCreateCommunityModal = () => {
    this.setState({ 'showCreateCommunityModal': false })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (

      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' visible={this.state.visible} vertical inverted>
          <Dimmer active={this.props.loading}>
            <Loader active={this.props.loading} />
          </Dimmer>
          <Item>
            <div className='header'>Trends</div>
            <div className='menu'>
              <Menu.Item as={Link} to='/#home' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Menu.Item>
              <Menu.Item as={Link} to='/#messages' name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>Messages</Menu.Item>
              <Menu.Item as={Link} to='/#friends' name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}>Friends</Menu.Item>
            </div>
          </Item>
          <Item style={{ display: this.props.subscriptions.count() === 0 ? 'none' : 'block' }}>
            <div className='header'>Subscriptions</div>
            <div className='menu'>
              {this.props.subscriptions.toJS().map(sub => (
                <Menu.Item
                  as={Link}
                  name={sub.name}
                  to={`/#${sub.name}`}
                  active={activeItem === sub.name}
                  onClick={this.handleItemClick}
                >
                {sub.name.charAt(0).toUpperCase() + sub.name.slice(1)}
                </Menu.Item>
              ))}
            </div>
          </Item>
          <Item style={{ display: this.props.myCommunities.count() === 0 ? 'none' : 'block' }}>
            <Link className='header' to='/#create-community' onClick={ () => this.openCreateCommunityModal() }>Yours <Icon name='add circle' /></Link>
            <div className='menu'>
              {this.props.myCommunities.toJS().map(c => (
                <Menu.Item
                  as={Link}
                  name={c.name}
                  to={`/#${c.name}`}
                  active={activeItem === c.name}
                  onClick={this.handleItemClick}
                >
                {c.name.charAt(0).toUpperCase() + c.name.slice(1)}
                </Menu.Item>
              ))}
            </div>
          </Item>
          <div style={{ width: '100%', padding: '10px' }}>
            <Button
              style={{ width: '100%' }}
              onClick={() => { this.props.token ? this.props.logout() : this.openLoginModal() }}>{this.props.token ? 'Logout' : 'Login'}</Button>
          </div>

          {this.LoginModal()}
          {this.CreateCommunityModal()}

        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Header as='h3'>Application Content</Header>
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
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

MunityMenu.propTypes = {
  subscriptions: PropTypes.object,
  myCommunities: PropTypes.object,
  token: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
}

export default MunityMenu
