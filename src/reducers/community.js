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
  GET_SPACE,
  GET_SPACE_SUCCESS,
  GET_SPACE_FAILURE,
  SEND_MESSAGE_IN_SPACE,
  SEND_MESSAGE_IN_SPACE_SUCCESS,
  SEND_MESSAGE_IN_SPACE_FAILURE,
  GET_COMMUNITIES_TRENDS,
  GET_COMMUNITIES_TRENDS_SUCCESS,
  GET_COMMUNITIES_TRENDS_FAILURE,
  SUBSCRIBE_TO_COMMUNITY,
  SUBSCRIBE_TO_COMMUNITY_SUCCESS,
  SUBSCRIBE_TO_COMMUNITY_FAILURE,
  UNSUBSCRIBE_FROM_COMMUNITY,
  UNSUBSCRIBE_FROM_COMMUNITY_SUCCESS,
  UNSUBSCRIBE_FROM_COMMUNITY_FAILURE,
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
      messages: List(),
      space: List(),
    }),
    trends: List(),
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
    case SUBSCRIBE_TO_COMMUNITY:
      return state.set('loading', true)
    case SUBSCRIBE_TO_COMMUNITY_SUCCESS:
      return state.set('loading', false).set('subscriptions', action.communities)
    case SUBSCRIBE_TO_COMMUNITY_FAILURE:
      return state.set('loading', false).set('error', action.error)
    case UNSUBSCRIBE_FROM_COMMUNITY:
      return state.set('loading', true)
    case UNSUBSCRIBE_FROM_COMMUNITY_SUCCESS:
      return state.set('loading', false).set('subscriptions', action.communities)
    case UNSUBSCRIBE_FROM_COMMUNITY_FAILURE:
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
    case GET_SPACE:
      return state.set('loading', true)
    case GET_SPACE_SUCCESS:
      return state.set('loading', false).setIn(['communitySelected', 'space'], action.space)
    case GET_SPACE_FAILURE:
      return state.set('loading', false).set('error', action.error)
    case GET_COMMUNITIES_TRENDS:
      return state.set('loading', true)
    case GET_COMMUNITIES_TRENDS_SUCCESS:
      return state.set('loading', false).set('trends', action.communities)
    case GET_COMMUNITIES_TRENDS_FAILURE:
      return state.set('loading', false).set('error', action.error)
    case SEND_MESSAGE_IN_SPACE:
      return state.set('loading', true)
    case SEND_MESSAGE_IN_SPACE_SUCCESS:
      return state.set('loading', false).setIn(['communitySelected', 'space'], action.space)
    case SEND_MESSAGE_IN_SPACE_FAILURE:
      return state.set('loading', false).set('error', action.error)
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
