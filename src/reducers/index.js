import { combineReducers } from 'redux-immutable'
import { intlReducer } from 'react-intl-redux'
import { updateLocales } from '../actions/app'

import app from './app'
import context from './context'
import loginRegister from './loginRegister'
import community from './community'
import user from './user'
import locales from './locales'

const rootReducer = combineReducers({
  context,
  app,
  loginRegister,
  community,
  user,
  intl: intlReducer,
  locales,
})

export default rootReducer
