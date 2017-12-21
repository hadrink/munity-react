import { List, Map } from 'immutable'
import {
  getSubscriptions,
  getSubscriptionsSuccess,
  getSubscriptionsFailure,
  createCommunity,
  createCommunitySuccess,
  createCommunityFailure,
  sendMessage,
  openSocketConnection,
  openSocketConnectionSuccess,
  openSocketConnectionFailure,
} from '../actions/community'

export function getSubscriptionsThunk () {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      const state = getState()
      const token = state.getIn(['context', 'token'])
      dispatch(getSubscriptions())

      apiClient.getSubscriptions({ token })
        .then(data => {
          const jsonData = JSON.parse(data)
          const communities = jsonData['subscriptions']

          dispatch(getSubscriptionsSuccess(List(communities)))
          resolve()
        })
        .catch((e) => {
          dispatch(getSubscriptionsFailure(e))
          reject(e)
        })
    })
  }
}

export function createCommunityThunk (name) {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      const state = getState()
      const token = state.getIn(['context', 'token'])
      dispatch(createCommunity())

      apiClient.createCommunity({ token, name })
        .then(data => {
          const createdRecently = JSON.parse(data)

          dispatch(createCommunitySuccess(Map({ createdRecently })))
          resolve()
        })
        .catch((e) => {
          dispatch(createCommunityFailure(e))
          reject(e)
        })
    })
  }
}

export function sendMessageThunk (communityName, username) {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      const state = getState()
      const token = state.getIn(['context', 'token'])
      dispatch(sendMessage())



      apiClient.sendMessage({ communityName, username })

    })
  }
}

export function openSocketConnectionThunk () {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      dispatch(openSocketConnection())

      apiClient.openSocketConnection()
        .then(websocket => {
          dispatch(openSocketConnectionSuccess(websocket))
          resolve()
      })
      .catch((e) => {
        dispatch(openSocketConnectionFailure(e))
        reject(e)
      })
    })
  }
}
