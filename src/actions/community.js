export const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS'
export const GET_SUBSCRIPTIONS_SUCCESS = 'GET_SUBSCRIPTIONS_SUCCESS'
export const GET_SUBSCRIPTIONS_FAILURE = 'GET_SUBSCRIPTIONS_FAILURE'

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
