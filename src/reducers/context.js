import { Map } from 'immutable'
import {
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/user'

const initialState = () => {
  return Map({
    token: '',
  })
}

export default (state = initialState(), action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('token', action.token)
    case LOGOUT:
      return state.set('token', '')
  }

  return state
}
