
import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Input, Button, Icon, Modal, Dimmer, Loader } from 'semantic-ui-react'
import LoginRegister from '../containers/LoginRegisterContainer'

class MunityMenu extends React.Component {
  constructor(props) {
    super(props)

    this.getSubscriptionsIfNeeded()
  }

  state = {
    activeItem: 'home',
    showLoginModal: false,
  }

  LoginModal = () => (
    <Modal open={this.state.showLoginModal} onClose={() => { this.closeLoginModal() }}>
      <Modal.Header>Login / Register</Modal.Header>
      <Modal.Content>
        <LoginRegister />
      </Modal.Content>
    </Modal>
  )

  componentDidUpdate(prevProps) {
    if (this.props.token && this.state.showLoginModal) {
      this.closeLoginModal()
    }

    if (this.props.token !== prevProps.token) {
      this.getSubscriptionsIfNeeded()
    }
  }

  openLoginModal = () => {
    this.setState({ 'showLoginModal': true })
  }

  closeLoginModal = () => {
    this.setState({ 'showLoginModal': false })
  }

  getSubscriptionsIfNeeded = () => {
    if (this.props.token) {
      this.props.getSubscriptions()
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state
    return (
      <Menu defaultActiveIndex={0} className={'munity-menu'} size='large' pointing secondary vertical style={{ height: '100%', position: 'relative' }}>
        <Dimmer active={this.props.loading}>
          <Loader active={this.props.loading} />
        </Dimmer>
        <Menu.Item header>Trends</Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search a community...' />
        </Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
        <Menu.Item style={{ display: this.props.subscriptions.count() === 0 ? 'none' : 'block' }} header><Icon name='add circle' />Subscriptions</Menu.Item>
        {this.props.subscriptions.toJS().map(sub => (
          <Menu.Item name={sub.name} active={activeItem === sub.name} onClick={this.handleItemClick} />
        ))}

        <div style={{ position: 'absolute', width: '100%', padding: '10px', bottom: 0 }}>
          <Button
            style={{ width: '100%' }}
            onClick={() => { this.props.token ? this.props.logout() : this.openLoginModal() }}>{this.props.token ? 'Logout' : 'Login'}</Button>
        </div>

        {this.LoginModal()}
      </Menu>
    )
  }
}

MunityMenu.propTypes = {
  subscriptions: PropTypes.object,
  token: PropTypes.string,
  getSubscriptions: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
}

export default MunityMenu
