
import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Input, Button, Icon, Modal, Dimmer, Loader, Sidebar, Segment, Header, Item, Grid } from 'semantic-ui-react'
import { Link } from 'react-router'
import LoginRegister from '../containers/LoginRegisterContainer'
import CreateCommunity from '../containers/CreateCommunityContainer'
import MunityChat from '../containers/MunityChatContainer'
import MunitySpace from '../containers/MunitySpaceContainer'

class MunityMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
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

  handleItemClick = (e, { name }) => this.props.activeCommunity(name)

  render() {
    const { communitySelected } = this.props
    return (

      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' visible={this.state.visible} vertical inverted>
          <Dimmer active={this.props.loading}>
            <Loader active={this.props.loading} />
          </Dimmer>
          <Item>
            <div className='header'>Trends</div>
            <div className='menu'>
              <Menu.Item as={Link} to='/#home' name='home' active={communitySelected === 'home'} onClick={this.handleItemClick}>Home</Menu.Item>
              <Menu.Item as={Link} to='/#messages' name='messages' active={communitySelected === 'messages'} onClick={this.handleItemClick}>Messages</Menu.Item>
              <Menu.Item as={Link} to='/#friends' name='friends' active={communitySelected === 'friends'} onClick={this.handleItemClick}>Friends</Menu.Item>
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
                  active={communitySelected === sub.name}
                  onClick={this.handleItemClick}
                >
                  {sub.name.charAt(0).toUpperCase() + sub.name.slice(1)}
                </Menu.Item>
              ))}
            </div>
          </Item>
          <Item style={{ display: this.props.myCommunities.count() === 0 ? 'none' : 'block' }}>
            <Link className='header' to='/#create-community' onClick={() => this.openCreateCommunityModal()}>Yours <Icon name='add circle' /></Link>
            <div className='menu'>
              {this.props.myCommunities.toJS().map(c => (
                <Menu.Item
                  as={Link}
                  name={c.name}
                  to={`/#${c.name}`}
                  active={communitySelected === c.name}
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
        <Sidebar.Pusher style={{ 'padding-right' : '260px' }}>
          <Grid columns={2} divided style={{ margin: 0 }}>
            <Grid.Row style={{ padding: 0 }}>
              <Grid.Column width={10}>
                <MunityChat />
              </Grid.Column>
              <Grid.Column width={6}>
                <MunitySpace />
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
  communitySelected: PropTypes.string,
  activeCommunity: PropTypes.func.isRequired,
}

export default MunityMenu
