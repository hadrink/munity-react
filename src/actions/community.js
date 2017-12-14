export const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS'
export const GET_SUBSCRIPTIONS_SUCCESS = 'GET_SUBSCRIPTIONS_SUCCESS'
export const GET_SUBSCRIPTIONS_FAILURE = 'GET_SUBSCRIPTIONS_FAILURE'

export const CREATE_COMMUNITY = 'CREATE_COMMUNITY'
export const CREATE_COMMUNITY_SUCCESS = 'CREATE_COMMUNITY_SUCCESS'
export const CREATE_COMMUNITY_FAILURE = 'CREATE_COMMUNITY_FAILURE'

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
