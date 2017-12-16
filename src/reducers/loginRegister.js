import { Map } from 'immutable'
import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESET_LOGIN_REGISTER,
} from '../actions/user'

const initialState = () => {
  return Map({
    token: '',
    loading: false,
    user: null,
    error: {
      identifier: '',
      reason: '',
      debugReason: '',
      error: true,
    },
  })
}

export default (state = initialState(), action) => {
  switch (action.type) {
    case REGISTER:
      return state.set('loading', true)
    case REGISTER_SUCCESS:
      return state.set('loading', false).set('user', action.user)
    case REGISTER_FAILURE:
      return state.set('loading', false).set('error', action.error)
    case LOGIN:
      return state.set('loading', true)
    case LOGIN_SUCCESS:
      return state.set('loading', false).set('user', action.user)
    case LOGIN_FAILURE:
      return state.set('loading', false).set('error', action.error)
    case RESET_LOGIN_REGISTER:
      return initialState()
  }

  return state
}
