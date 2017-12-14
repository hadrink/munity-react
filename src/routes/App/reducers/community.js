import { Map, List } from 'immutable'
import {
  GET_SUBSCRIPTIONS,
  GET_SUBSCRIPTIONS_SUCCESS,
  GET_SUBSCRIPTIONS_FAILURE,
} from '../../../actions/community'

const initialState = () => {
  return Map({
    loading: false,
    subscriptions: List(),
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
  }

  return state
}
