import { combineReducers } from 'redux-immutable'
import locationReducer from './location'
import Register from '../routes/Register/reducers/register'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    asyncReducers
  })
}

export const injectReducer = (store, reducer) => {
  store.asyncReducers.set(reducer)
  store.replaceReducer(makeRootReducer(reducer))
}

export default makeRootReducer
