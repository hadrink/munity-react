import { Map } from 'immutable'
import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
} from '../actions/user'

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
    // case REGISTER:
    //   return state.set('isSending', true)
    // case REGISTER_SUCCESS:
    //   return state.set('isSending', false).set('newUser', action.user)
    // case REGISTER_FAILURE:
    //   return state.set('isSending', false)
    // case LOGIN:
    //   return state.set('isSending', true)
    // case LOGIN_SUCCESS:
    //   return state.set('isSending', false).set('newUser', action.user)
  }

  return state
}
