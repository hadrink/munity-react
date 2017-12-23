import { Map, List } from 'immutable'
import {
  GET_SUBSCRIPTIONS,
  GET_SUBSCRIPTIONS_SUCCESS,
  GET_SUBSCRIPTIONS_FAILURE,
  CREATE_COMMUNITY,
  CREATE_COMMUNITY_SUCCESS,
  CREATE_COMMUNITY_FAILURE,
  OPEN_SOCKET_CONNECTION,
  OPEN_SOCKET_CONNECTION_SUCCESS,
  OPEN_SOCKET_CONNECTION_FAILURE,
  MESSAGE_RECEIVED,
  COMMUNITY_SELECTED,
  JOIN_COMMUNITY_ROOM,
} from '../actions/community'

import { LOGOUT } from '../actions/user'

const initialState = () => {
  return Map({
    loading: false,
    isCreating: false,
    subscriptions: List(),
    createdRecently: Map(),
    webSocket: Map({
      isConnecting: false,
      socket: null
    }),
    communitySelected: Map({
      name: '',
      messages: List()
    }),
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
    case OPEN_SOCKET_CONNECTION:
      return state.setIn(['webSocket', 'isConnecting'], true)
    case OPEN_SOCKET_CONNECTION_SUCCESS:
      return state.setIn(['webSocket', 'isConnecting'], false).setIn(['webSocket', 'socket'], action.websocket)
    case OPEN_SOCKET_CONNECTION_FAILURE:
      return state.setIn(['webSocket', 'isConnecting'], false).set('error', action.error)
    case MESSAGE_RECEIVED:
      const newMessages = state.getIn(['communitySelected', 'messages']).push(action.messages)
      return state.setIn(['communitySelected', 'messages'], newMessages)
    case COMMUNITY_SELECTED:
      return state.setIn(['communitySelected', 'name'], action.communityName)
    case JOIN_COMMUNITY_ROOM:
      return state.setIn(['communitySelected', 'name'], action.communityName)
    case LOGOUT:
      return initialState()
  }

  return state
}
