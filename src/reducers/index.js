import { combineReducers } from 'redux-immutable'
import app from './app'
import context from './context'
import loginRegister from './loginRegister'
import community from './community'
import user from './user'

const rootReducer = combineReducers({
  context,
  app,
  loginRegister,
  community,
  user,
})

export default rootReducer
