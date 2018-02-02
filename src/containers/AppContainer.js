import { connect } from 'react-redux'
import { registerThunk } from '../thunks/user'
import { browserSizeChanged } from '../actions/user'
import { updateLocales } from '../actions/app'
import { updateIntl } from 'react-intl-redux'


import App from '../components/App'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch, props) => ({
  register: (username, email, password) => dispatch(registerThunk(username, email, password)),
  browserSizeChanged: (width, height) => dispatch(browserSizeChanged(width, height)),
  handleLocales: () => dispatch(updateLocales()),
  updateIntl: (locale) => {
    const currentLocale = (dispatch, getState) => {
      const state = getState()
      const locales = state.get('locales')
      dispatch(updateIntl({
        locale: locale,
        messages: locales[locale],
      }))
    }

    dispatch(currentLocale)
  }
})

const mapStateToProps = (state) => ({
  //token: state.getIn(['context', 'token'])
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
