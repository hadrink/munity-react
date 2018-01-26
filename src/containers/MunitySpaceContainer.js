import { connect } from 'react-redux'
import { sendMessageInSpaceThunk, sendNotificationToServerThunk } from '../thunks/community'

import MunitySpace from '../components/MunitySpace'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch, props) => ({
  sendMessage: (communityName, message) => dispatch(sendMessageInSpaceThunk(communityName, message))
  .then(() => {
    dispatch(sendNotificationToServerThunk("UPDATE_SPACE"))
  }),
})

const mapStateToProps = (state) => ({
  token: state.getIn(['context', 'token']),
  space: state.getIn(['community', 'communitySelected', 'space']),
  user: state.getIn(['user', 'info', 'user']),
  admin: state.getIn(['community', 'communitySelected', 'community', 'admin']),
  communityName: state.getIn(['community', 'communitySelected', 'community', 'name']),
  loading: state.getIn(['community', 'webSocket', 'isConnecting']),
  screenType: state.getIn(['app', 'window', 'type']),
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(MunitySpace)
