import { combineReducers } from 'redux-immutable'
import locationReducer from './location'
import contextReducer from '../reducers/context'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers(
    asyncReducers
  )
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers['context'] = contextReducer
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
