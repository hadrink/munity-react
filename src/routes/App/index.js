import { injectReducer } from '../../store/reducers'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const App = require('./containers/AppContainer').default
      const appReducer = require('./reducers/app').default
      const loginRegisterReducer = require('./reducers/loginRegister').default
      const communityReducer = require('./reducers/community').default

      /*  Add the reducer to the store on key 'register'  */
      const reducer = {
        app: appReducer,
        loginRegister: loginRegisterReducer,
        community: communityReducer,
      }

      injectReducer(store, reducer)

      /*  Return getComponent   */
      cb(null, App)

    /* Webpack named bundle   */
    }, 'app')
  }
})
