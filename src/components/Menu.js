
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Modal, Sidebar, Segment, Header, Grid, Container } from 'semantic-ui-react'
import { Link } from 'react-router'
import MunityChat from '../containers/MunityChatContainer'
import MunitySpace from '../containers/MunitySpaceContainer'
import SidebarMenu from './SidebarMenu'
import SidebarMenuMobile from './SidebarMenuMobile'
import SidebarPusher from './SidebarPusher'
import SidebarPusherMobile from './SidebarPusherMobile';

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
          this.props.screenType == 'desktop' ?
            <SidebarPusher
              communitySelected={ communitySelected }
              localized={ this.props.localized }
            />
          :
            <SidebarPusherMobile
              visible={ this.state.visible }
              communitySelected={ communitySelected }
              openMenu={ this.openMenu }
              closeMenu={ this.closeMenu }
              localized={ this.props.localized }
            />
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
