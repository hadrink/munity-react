
import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Input, Button, Icon, Modal, Dimmer, Loader, Sidebar, Segment, Header, Item, Grid, Container } from 'semantic-ui-react'
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
    searchValue: '',
  }

  componentDidMount() {
    this.props.getTrends()
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
    if (this.props.communityCreatedRecently != nextProps.communityCreatedRecently) {
      this.closeCreateCommunityModal()
    }

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

  handleSearchChange = (e, { value }) => {
    this.setState({ searchValue: value })

    setTimeout(() => {
      if (this.state.searchValue.length < 1) return
      this.props.searchCommunities(this.state.searchValue)
    }, 500)
  }

  render() {
    const { communitySelected, searchValue, communitySearched, isFetching, searchError } = this.props
    return (

      <Sidebar.Pushable visible={this.props.isReady} as={Segment}>
        <Sidebar as={Menu} animation='push' visible={this.state.visible} vertical inverted>
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
                  onClick={this.handleItemClick}
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
              {searchError ? <Menu.Item>Not resusts found</Menu.Item> : communitySearched.map(community => (
                <Menu.Item
                  as={Link}
                  name={community.name}
                  to={`/#${community.name}`}
                  active={communitySelected === community.name}
                  onClick={this.handleItemClick}
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
                  onClick={this.handleItemClick}
                >
                  {sub.name.charAt(0).toUpperCase() + sub.name.slice(1)}
                </Menu.Item>
              ))}
            </div>
          </Item>
          <Item>
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
          <div style={{ width: '100%', padding: '15px' }}>
            <Button
              icon labelPosition='right'
              style={{ width: '100%' }}
              onClick={() => { this.props.token ? this.props.logout() : this.openLoginModal() }}>{this.props.token ? 'Logout' : 'Login'}<Icon name={this.props.token ? 'sign out' : 'sign in'} /></Button>
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
