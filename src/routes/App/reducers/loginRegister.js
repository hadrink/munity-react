import { Map } from 'immutable'
import {
  SET_USER_DATA_VALUE,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESET_LOGIN_REGISTER,
} from '../../../actions/user'

const initialState = () => {
  return Map({
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
    case SET_USER_DATA_VALUE:
      return state.set(action.property, action.value)
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
