import { Map, List } from 'immutable'
import {
  GET_MY_COMMUNITIES,
  GET_MY_COMMUNITIES_SUCCESS,
  GET_MY_COMMUNITIES_FAILURE,
  LOGOUT,
} from '../../../actions/user'

const initialState = () => {
  return Map({
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
