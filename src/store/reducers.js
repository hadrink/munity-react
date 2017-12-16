import { combineReducers } from 'redux-immutable'

export const makeRootReducer = (asyncReducers) => {

  return combineReducers(
    {
      contextReducer,
      appReducer,
      loginRegisterReducer,
      communityReducer,
      userReducer,
    }
  )
}

export const injectReducer = (store, reducer) => {
  //store.asyncReducers['context'] = contextReducer
  // Object.assign(store.asyncReducers, reducer)
  store.replaceReducer(makeRootReducer())
}

export default makeRootReducer
