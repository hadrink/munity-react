export const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS'
export const GET_SUBSCRIPTIONS_SUCCESS = 'GET_SUBSCRIPTIONS_SUCCESS'
export const GET_SUBSCRIPTIONS_FAILURE = 'GET_SUBSCRIPTIONS_FAILURE'

export const CREATE_COMMUNITY = 'CREATE_COMMUNITY'
export const CREATE_COMMUNITY_SUCCESS = 'CREATE_COMMUNITY_SUCCESS'
export const CREATE_COMMUNITY_FAILURE = 'CREATE_COMMUNITY_FAILURE'

export const OPEN_SOCKET_CONNECTION = 'OPEN_SOCKET_CONNECTION'
export const OPEN_SOCKET_CONNECTION_SUCCESS = 'OPEN_SOCKET_CONNECTION_SUCCESS'
export const OPEN_SOCKET_CONNECTION_FAILURE = 'OPEN_SOCKET_CONNECTION_FAILURE'

export const CLOSE_SOCKET_CONNECTION = 'CLOSE_SOCKET_CONNECTION'
export const CLOSE_SOCKET_CONNECTION_SUCCESS = 'CLOSE_SOCKET_CONNECTION_SUCCESS'
export const CLOSE_SOCKET_CONNECTION_FAILURE = 'CLOSE_SOCKET_CONNECTION_FAILURE'

export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SEND_NOTIFICATION_TO_SERVER = 'SEND_NOTIFICATION_TO_SERVER'
export const RECEIVE_NOTIFICATION_FROM_SERVER = 'RECEIVE_NOTIFICATION_FROM_SERVER'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
export const COMMUNITY_SELECTED = 'COMMUNITY_SELECTED'
export const JOIN_COMMUNITY_ROOM = 'JOIN_COMMUNITY_ROOM'

export const GET_SPACE = 'GET_SPACE'
export const GET_SPACE_SUCCESS = 'GET_SPACE_SUCCESS'
export const GET_SPACE_FAILURE = 'GET_SPACE_FAILURE'

export const SEND_MESSAGE_IN_SPACE = 'SEND_MESSAGE_IN_SPACE'
export const SEND_MESSAGE_IN_SPACE_SUCCESS = 'SEND_MESSAGE_IN_SPACE_SUCCESS'
export const SEND_MESSAGE_IN_SPACE_FAILURE = 'SEND_MESSAGE_IN_SPACE_FAILURE'

export const GET_COMMUNITIES_TRENDS = 'GET_COMMUNITIES_TRENDS'
export const GET_COMMUNITIES_TRENDS_SUCCESS = 'GET_COMMUNITIES_TRENDS_SUCCESS'
export const GET_COMMUNITIES_TRENDS_FAILURE = 'GET_COMMUNITIES_TRENDS_FAILURE'

export const SUBSCRIBE_TO_COMMUNITY = 'SUBSCRIBE_TO_COMMUNITY'
export const SUBSCRIBE_TO_COMMUNITY_SUCCESS = 'SUBSCRIBE_TO_COMMUNITY_SUCCESS'
export const SUBSCRIBE_TO_COMMUNITY_FAILURE = 'SUBSCRIBE_TO_COMMUNITY_FAILURE'

export function getSubscriptions () {
  return {
    type: GET_SUBSCRIPTIONS
  }
}

export function getSubscriptionsSuccess (communities) {
  return {
    type: GET_SUBSCRIPTIONS_SUCCESS, communities
  }
}

export function getSubscriptionsFailure (error) {
  return {
    type: GET_SUBSCRIPTIONS_FAILURE, error
  }
}

export function createCommunity () {
  return {
    type: CREATE_COMMUNITY
  }
}

export function createCommunitySuccess (community) {
  return {
    type: CREATE_COMMUNITY_SUCCESS, community
  }
}

export function createCommunityFailure (error) {
  return {
    type: CREATE_COMMUNITY_FAILURE, error
  }
}

export function sendMessage (message) {
  return {
    type: SEND_MESSAGE, message
  }
}

export function sendNotificationToServer () {
  return {
    type: SEND_NOTIFICATION_TO_SERVER
  }
}

export function receiveNotificationFromServer (notification) {
  return {
    type: RECEIVE_NOTIFICATION_FROM_SERVER, notification
  }
}

export function messageReceived (messages) {
  return {
    type: MESSAGE_RECEIVED, messages
  }
}

export function openSocketConnection () {
  return {
    type: OPEN_SOCKET_CONNECTION
  }
}

export function openSocketConnectionSuccess (websocket) {
  return {
    type: OPEN_SOCKET_CONNECTION_SUCCESS, websocket
  }
}

export function openSocketConnectionFailure (error) {
  return {
    type: OPEN_SOCKET_CONNECTION_FAILURE, error
  }
}

export function closeSocketConnection () {
  return {
    type: CLOSE_SOCKET_CONNECTION
  }
}

export function closeSocketConnectionSuccess (message) {
  return {
    type: CLOSE_SOCKET_CONNECTION_SUCCESS, message
  }
}

export function closeSocketConnectionFailure (message) {
  return {
    type: CLOSE_SOCKET_CONNECTION_FAILURE, message
  }
}

export function communitySelected (communityName) {
  return {
    type: COMMUNITY_SELECTED, communityName
  }
}

export function joinCommunityRoom (communityName) {
  return {
    type: JOIN_COMMUNITY_ROOM, communityName
  }
}

export function getSpace () {
  return {
    type: GET_SPACE
  }
}

export function getSpaceSuccess (space) {
  return {
    type: GET_SPACE_SUCCESS, space
  }
}

export function getSpaceFailure (error) {
  return {
    type: GET_SPACE_FAILURE, error
  }
}

export function sendMessageInSpace () {
  return {
    type: SEND_MESSAGE_IN_SPACE
  }
}

export function sendMessageInSpaceSuccess (space) {
  return {
    type: SEND_MESSAGE_IN_SPACE_SUCCESS, space
  }
}

export function sendMessageInSpaceFailure (error) {
  return {
    type: SEND_MESSAGE_IN_SPACE_FAILURE, error
  }
}

export function getCommunitiesTrends () {
  return {
    type: GET_COMMUNITIES_TRENDS
  }
}

export function getCommunitiesTrendsSuccess (communities) {
  return {
    type: GET_COMMUNITIES_TRENDS_SUCCESS, communities
  }
}

export function getCommunitiesTrendsFailure (error) {
  return {
    type: GET_COMMUNITIES_TRENDS_FAILURE, error
  }
}

export function subscribeToCommunity () {
  return {
    type: SUBSCRIBE_TO_COMMUNITY
  }
}

export function subscribeToCommunitySuccess (communities) {
  return {
    type: SUBSCRIBE_TO_COMMUNITY_SUCCESS, communities
  }
}

export function subscribeToCommunityFailure (error) {
  return {
    type: SUBSCRIBE_TO_COMMUNITY_FAILURE, error
  }
}
