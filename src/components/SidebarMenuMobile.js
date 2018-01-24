
import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Input, Button, Icon, Modal, Dimmer, Loader, Sidebar, Header, Item } from 'semantic-ui-react'
import { Link } from 'react-router'
import LoginRegister from '../containers/LoginRegisterContainer'
import CreateCommunity from '../containers/CreateCommunityContainer'

class SidebarMenuMobile extends React.Component {
  constructor(props) {
    super(props)
  }

  LoginModal = () => (
    <Modal open={this.props.showLoginModal} onClose={() => { this.props.closeLoginModal() }}>
      <Modal.Header>Login / Register</Modal.Header>
      <Modal.Content>
        <LoginRegister />
      </Modal.Content>
    </Modal>
  )

  CreateCommunityModal = () => (
    <Modal size='tiny' open={this.props.showCreateCommunityModal} onClose={() => { this.props.closeCreateCommunityModal() }}>
      <Modal.Header>Create community</Modal.Header>
      <Modal.Content>
        <CreateCommunity />
      </Modal.Content>
    </Modal>
  )

  render() {
    const { communitySelected, searchValue, communitySearched, isFetching, searchError } = this.props
    return (
        <Sidebar style={{ boxShadow: 'none' }} size='thin' visible={this.props.visible} as={Menu} animation='push' vertical inverted>
          <Dimmer active={this.props.loading}>
            <Loader active={this.props.loading} />
          </Dimmer>
          <Item>
            <div className='header'>Trends</div>
            <div className='menu'>
              {this.props.trends.map(community => (
                <Menu.Item
                  as={Link}
                  to={`/#${community.name}`}
                  name={community.name}
                  active={communitySelected === community.name}
                  onClick={() => this.props.handleItemClick(community)}
                >
                  {community.name.charAt(0).toUpperCase() + community.name.slice(1)}
                </Menu.Item>
              ))}
            </div>
          </Item>
          <Item>
            <div className='header'>Search</div>
            <Input
              loading={isFetching}
              size='mini'
              placeholder='Commuity name...'
              onChange={this.handleSearchChange}
            />
            <div className='menu'>
              {searchError ? <Menu.Item>{searchError.reason}</Menu.Item> : communitySearched.map(community => (
                <Menu.Item
                  as={Link}
                  name={community.name}
                  to={`/#${community.name}`}
                  active={communitySelected === community.name}
                  onClick={() => this.props.handleItemClick(community)}
                >
                  {community.name.charAt(0).toUpperCase() + community.name.slice(1)}
                </Menu.Item>
              ))}
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
                  onClick={() => this.props.handleItemClick(community)}
                >
                  {sub.name.charAt(0).toUpperCase() + sub.name.slice(1)}
                </Menu.Item>
              ))}
            </div>
          </Item>
          <Item>
            <Link className='header' to='/#create-community' onClick={() => this.props.openCreateCommunityModal()}>Yours <Icon name='add circle' /></Link>
            <div className='menu'>
              {this.props.myCommunities.map(c => (
                <Menu.Item
                  as={Link}
                  name={c.name}
                  to={`/#${c.name}`}
                  active={communitySelected === c.name}
                  onClick={() => this.props.handleItemClick(c)}
                >
                  {c.name.charAt(0).toUpperCase() + c.name.slice(1)}
                </Menu.Item>
              ))}
            </div>
          </Item>
          <div style={{ width: '100%', padding: '15px' }}>
            <Button
              icon labelPosition='right'
              style={{ width: '100%' }}
              onClick={() => { this.props.token ? this.props.logout() : this.props.openLoginModal() }}>{this.props.token ? 'Logout' : 'Login'}<Icon name={this.props.token ? 'sign out' : 'sign in'} /></Button>
          </div>
          {this.LoginModal()}
          {this.CreateCommunityModal()}
        </Sidebar>
    )
  }
}

SidebarMenuMobile.propTypes = {

}

export default SidebarMenuMobile
