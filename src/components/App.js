import React from 'react'
import PropTypes from 'prop-types'
import MunityMenu from '../containers/MenuContainer'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeItem: 'home',
      showLoginModal: false,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.browserSizeChanged)
  }

  browserSizeChanged = () => {
    this.props.browserSizeChanged(window.innerWidth, window.innerHeight)
  }

  render() {
    const { activeItem } = this.state

    return (
          <MunityMenu isReady={this.state.isReady} />
    )
  }
}

App.propTypes = {
  // counter: PropTypes.number.isRequired,
  // increment: PropTypes.func.isRequired,
  // doubleAsync: PropTypes.func.isRequired,
}

export default App
