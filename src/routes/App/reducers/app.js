import { Map } from 'immutable'
import {
  SET_USER_DATA_VALUE,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../../actions/user'

const initialState = () => {
  return Map({
    isSending: false,
    username: '',
    email: '',
    password: '',
    newUser: '',
  })
}

export default (state = initialState(), action) => {
  switch (action.type) {
    case SET_USER_DATA_VALUE:
      return state.set(action.property, action.value)
    case REGISTER:
      return state.set('isSending', true)
    case REGISTER_SUCCESS:
      return state.set('isSending', false).set('newUser', action.user)
    case REGISTER_FAILURE:
      return state.set('isSending', false)
    case LOGIN:
      return state.set('isSending', true)
    case LOGIN_SUCCESS:
      return state.set('isSending', false).set('newUser', action.user)
    case LOGIN_FAILURE:
      return state.set('isSending', false)
  }

  return state
}
