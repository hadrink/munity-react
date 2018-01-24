
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Modal, Sidebar, Segment, Header, Grid, Container } from 'semantic-ui-react'
import { Link } from 'react-router'
import MunityChat from '../containers/MunityChatContainer'
import MunitySpace from '../containers/MunitySpaceContainer'
import SidebarMenu from './SidebarMenu'
import SidebarMenuMobile from './SidebarMenuMobile'

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

  componentWillReceiveProps(nextProps) {
    if (this.props.communityCreatedRecently != nextProps.communityCreatedRecently) {
      this.closeCreateCommunityModal()
    }

    if (nextProps.token && this.state.showLoginModal) {
      this.closeLoginModal()
    }

    const authorizationError = "Authentication.AuthenticationError.noAuthorizationHeader"
    const { communityError, userError } = nextProps

    if ((communityError.identifier == authorizationError || userError.identifier == authorizationError) && !this.state.showLoginModal) {
      this.props.logout()
      this.openLoginModal()
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

  openMenu = () => {
    this.setState({ 'visible': true })
  }

  closeMenu = () => {
    this.setState({ 'visible': false })
  }

  handleItemClick = (community) => {
    this.closeMenu()
    this.props.activeCommunity(community)
  }

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

        {this.props.screenType == 'desktop' ? <SidebarMenu
          { ...this.props }
          { ...this.state }
          openLoginModal={this.openLoginModal}
          closeLoginModal={this.closeLoginModal}
          openCreateCommunityModal={this.openCreateCommunityModal}
          closeCreateCommunityModal={this.closeCreateCommunityModal}
          handleItemClick={this.handleItemClick}
          handleSearchChange={this.handleSearchChange}
        />
          :
          <SidebarMenuMobile
            { ...this.props }
            { ...this.state }
            openLoginModal={this.openLoginModal}
            closeLoginModal={this.closeLoginModal}
            openCreateCommunityModal={this.openCreateCommunityModal}
            closeCreateCommunityModal={this.closeCreateCommunityModal}
            handleItemClick={this.handleItemClick}
            handleSearchChange={this.handleSearchChange}
          />
        }
        {
          this.props.screenType == 'desktop' ? <Sidebar.Pusher style={{ 'paddingRight': '260px' }}>
            <div style={{ marginLeft: this.props.screenType != 'desktop' ? '40px' : '0px' }}>
              {communitySelected ? <Grid columns={2} divided style={{ margin: 0 }}>
                <Grid.Row style={{ padding: 0 }}>
                  <Grid.Column width={10}>
                    <MunityChat />
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <MunitySpace />
                  </Grid.Column>
                </Grid.Row>
              </Grid> :
                <Container fluid textAlign='center' style={{ marginTop: '50px' }}>
                  <Header as='h2'>Welcome to Munity</Header>
                  <p>Please select a community or create a new one.</p>
                </Container>
              }
            </div>
          </Sidebar.Pusher> :
            <Sidebar.Pusher>
              <Button
                icon
                style={{ height: '100%', backgroundColor: 'white', position: 'fixed', display: this.props.screenType != 'desktop' ? 'block' : 'none', borderRadius: '0px', borderRight: '1px solid #de6262' }}
                onClick={() => this.state.visible ? this.closeMenu() : this.openMenu()}
              >
                <Icon style={{ color: '#de6262' }} name='content' />
              </Button>
              <Container fluid textAlign='center' style={{ marginTop: '50px' }}>
                <Header as='h2'>Welcome to Munity</Header>
                <p>Please select a community or create a new one.</p>
              </Container>
              }
        </Sidebar.Pusher>
        }
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
