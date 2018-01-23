import { Map, List } from 'immutable'
import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
  GET_MY_COMMUNITIES,
  GET_MY_COMMUNITIES_SUCCESS,
  GET_MY_COMMUNITIES_FAILURE,
  LOGOUT,
} from '../actions/user'

const initialState = () => {
  return Map({
    info: Map({
      username: ''
    }),
    myCommunities: List(),
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
      return state.set('isSending', true)
    case REGISTER_SUCCESS:
      return state.set('isSending', false).set('info', action.user)
    case REGISTER_FAILURE:
      return state.set('isSending', false)
    case LOGIN:
      return state.set('isSending', true)
    case LOGIN_SUCCESS:
      return state.set('isSending', false).set('info', action.user)
    case GET_MY_COMMUNITIES:
      return state.set('loading', true)
    case GET_MY_COMMUNITIES_SUCCESS:
      return state.set('loading', false).set('myCommunities', action.communities)
    case GET_MY_COMMUNITIES_FAILURE:
      return state.set('loading', false).set('error', action.error)
    case LOGOUT:
      return initialState()
  }

  return state
}
