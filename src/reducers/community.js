import { Map, List } from 'immutable'
import {
  GET_SUBSCRIPTIONS,
  GET_SUBSCRIPTIONS_SUCCESS,
  GET_SUBSCRIPTIONS_FAILURE,
  CREATE_COMMUNITY,
  CREATE_COMMUNITY_SUCCESS,
  CREATE_COMMUNITY_FAILURE,
} from '../actions/community'

import { LOGOUT } from '../actions/user'

const initialState = () => {
  return Map({
    loading: false,
    isCreating: false,
    subscriptions: List(),
    createdRecently: Map(),
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
    case GET_SUBSCRIPTIONS:
      return state.set('loading', true)
    case GET_SUBSCRIPTIONS_SUCCESS:
      return state.set('loading', false).set('subscriptions', action.communities)
    case GET_SUBSCRIPTIONS_FAILURE:
      return state.set('loading', false).set('error', action.error)
    case CREATE_COMMUNITY:
      return state.set('isCreating', true)
    case CREATE_COMMUNITY_SUCCESS:
      return state.set('isCreating', false).set('createdRecently', action.community)
    case CREATE_COMMUNITY_FAILURE:
      return state.set('isCreating', false).set('error', action.error)
    case LOGOUT:
      return initialState()
  }

  return state
}
