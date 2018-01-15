import { connect } from 'react-redux'
import { logout } from '../actions/user'
import { sendMessageThunk, openSocketConnectionThunk, handleMessagesThunk, subscribeToCommunityThunk } from '../thunks/community'

import MunityChat from '../components/MunityChat'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch, props) => ({
  sendMessage: (communityName, username) => dispatch(sendMessageThunk(communityName, username)),
  subscribe: (communityName) => dispatch(subscribeToCommunityThunk(communityName))
})

const mapStateToProps = (state) => ({
  token: state.getIn(['context', 'token']),
  messages: state.getIn(['community', 'communitySelected', 'messages']),
  communityName: state.getIn(['community', 'communitySelected', 'name']),
  loading: state.getIn(['community', 'webSocket', 'isConnecting']),
  subscriptions: state.getIn(['community', 'subscriptions']),
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

export default connect(mapStateToProps, mapDispatchToProps)(MunityChat)
