

import React from 'react'
import PropTypes from 'prop-types'
import { Sidebar, Header, Container, Tab, Button, Icon, Menu } from 'semantic-ui-react'
import MunityChat from '../containers/MunityChatContainer'
import MunitySpace from '../containers/MunitySpaceContainer'

class SidebarPusherMobile extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    activeItem: 'chat',
  }

  handleContent = () => (
    <div style={{ position: 'absolute', width: '100%', marginLeft: '40px', paddingRight: '55px', paddingLeft: '15px' }}>
      <Menu fluid widths={2} style={{ marginTop: '15px', marginBottom: 0 }}>
        <Menu.Item name='chat' active={this.state.activeItem === 'chat'} onClick={this.handleItemClick} />
        <Menu.Item name='space' active={this.state.activeItem === 'space'} onClick={this.handleItemClick} />
      </Menu>
      {this.state.activeItem === 'chat' ? <MunityChat /> : <MunitySpace />}
    </div>
  )

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    return (
      <Sidebar.Pusher style={{ height: '100%' }}>
        <Button
          icon
          style={{ height: '100%', float: 'left', backgroundColor: 'white', borderRadius: '0px', borderRight: '1px solid #de6262' }}
          onClick={() => this.props.visible ? this.props.closeMenu() : this.props.openMenu()}
        >
          <Icon style={{ color: '#de6262' }} name='content' />
        </Button>
        {this.props.communitySelected ?
          this.handleContent()
          :
          <Container fluid textAlign='center' style={{ marginTop: '50px' }}>
            <Header as='h2'>Welcome to Munity</Header>
            <p>Please select a community or create a new one.</p>
          </Container>
        }
      </Sidebar.Pusher>
    )
  }
}

SidebarPusherMobile.propTypes = {

}

export default SidebarPusherMobile
