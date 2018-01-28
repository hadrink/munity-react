import React from 'react'
import { browserHistory, Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import AppContainer from '../containers/AppContainer'

class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  state = {
    loaded: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 250)
  }

  shouldComponentUpdate() {
    return true
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%', opacity: this.state.loaded ? '1' : '0', transition: '0.5s'}}>
          <Router history={browserHistory} children={this.props.routes}>
            <Route path="/" component={AppContainer} />
          </Router>
        </div>
      </Provider>
    )
  }
}

export default Root
