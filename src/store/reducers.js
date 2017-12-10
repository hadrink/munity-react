import { combineReducers } from 'redux-immutable'
import locationReducer from './location'
import contextReducer from '../reducers/context'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers(
    asyncReducers
  )
}

export const injectReducer = (store, reducer) => {
  store.asyncReducers['context'] = contextReducer
  Object.assign(store.asyncReducers, reducer)
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
