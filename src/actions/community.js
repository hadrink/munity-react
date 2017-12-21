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

export function sendMessage (communityName, username) {
  return {
    type: SEND_MESSAGE, communityName, username
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
