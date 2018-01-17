import { connect } from 'react-redux'
import { registerThunk, loginThunk, getMyCommunitiesThunk } from '../thunks/user'
import { getSubscriptionsThunk } from '../thunks/community'
import { resetLoginRegister } from '../actions/user'

import LoginRegister from '../components/LoginRegister'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch, props) => ({
  register: (username, email, password) => dispatch(registerThunk(username, email, password)),
  login: (username, password) => dispatch(loginThunk(username, password))
  .then(() => {
    dispatch(getSubscriptionsThunk())
    dispatch(getMyCommunitiesThunk())
  }),
  reset: () => resetLoginRegister()
})

const mapStateToProps = (state) => ({
  loading: state.getIn(['loginRegister', 'loading']),
  user: state.getIn(['loginRegister', 'user']),
  error: state.getIn(['loginRegister', 'error'])
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister)
