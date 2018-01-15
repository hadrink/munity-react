import { connect } from 'react-redux'
import { logout } from '../actions/user'
import { communitySelected } from '../actions/community'
import { openSocketConnectionThunk, handleMessagesThunk, getSpaceThunk, getCommunitiesTrendsThunk } from '../thunks/community'

import MunityMenu from '../components/Menu'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch, props) => ({
  logout: () => dispatch(logout()),
  activeCommunity: (communityName) => dispatch(openSocketConnectionThunk())
  .then(() => {
    dispatch(communitySelected(communityName))
    dispatch(handleMessagesThunk(communityName))
    dispatch(getSpaceThunk(communityName))
  }),
  getTrends: () => dispatch(getCommunitiesTrendsThunk())
})

const mapStateToProps = (state) => ({
  token: state.getIn(['context', 'token']),
  subscriptions: state.getIn(['community', 'subscriptions']),
  myCommunities: state.getIn(['user', 'myCommunities']),
  loading: state.getIn(['community', 'loading']),
  communitySelected: state.getIn(['community', 'communitySelected', 'name']),
  trends: state.getIn(['community', 'trends']),
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

export default connect(mapStateToProps, mapDispatchToProps)(MunityMenu)
