

import React from 'react'
import PropTypes from 'prop-types'
import { Sidebar, Header, Container, Grid } from 'semantic-ui-react'
import MunityChat from '../containers/MunityChatContainer'
import MunitySpace from '../containers/MunitySpaceContainer'

class SidebarPusher extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Sidebar.Pusher style={{ 'paddingRight': '260px' }}>
        {this.props.communitySelected ? <Grid columns={2} divided style={{ margin: 0 }}>
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
            <Header as='h2'>{ this.props.localized['Welcome'] }</Header>
            <p>{ this.props.localized['WelcomeMessage'] }</p>
          </Container>
        }
      </Sidebar.Pusher>
    )
  }
}

SidebarPusher.propTypes = {

}

export default SidebarPusher
