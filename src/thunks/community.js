import { List, Map } from 'immutable'
import {
  getSubscriptions,
  getSubscriptionsSuccess,
  getSubscriptionsFailure,
  createCommunity,
  createCommunitySuccess,
  createCommunityFailure,
  sendMessage,
  sendNotificationToServer,
  receiveNotificationFromServer,
  openSocketConnection,
  openSocketConnectionSuccess,
  openSocketConnectionFailure,
  messageReceived,
  joinCommunityRoom,
  closeSocketConnection,
  getSpace,
  getSpaceSuccess,
  getSpaceFailure,
  sendMessageInSpace,
  sendMessageInSpaceSuccess,
  sendMessageInSpaceFailure,
  getCommunitiesTrends,
  getCommunitiesTrendsSuccess,
  getCommunitiesTrendsFailure,
  subscribeToCommunity,
  subscribeToCommunitySuccess,
  subscribeToCommunityFailure,
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

export function sendMessageThunk (message) {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      const state = getState()
      const ws = state.getIn(['community', 'webSocket', 'socket'])
      const communityName = state.getIn(['community', 'communitySelected', 'name'])
      const token =  state.getIn(['context', 'token'])

      dispatch(sendMessage())
      apiClient.sendMessage({ communityName, message, token, ws })
      resolve()
    })
  }
}

export function sendNotificationToServerThunk (notification) {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      const state = getState()
      const ws = state.getIn(['community', 'webSocket', 'socket'])
      const communityName = state.getIn(['community', 'communitySelected', 'name'])
      const token =  state.getIn(['context', 'token'])

      dispatch(sendNotificationToServer())
      apiClient.sendNotificationToServer({ communityName, notification, token, ws })
      resolve()
    })
  }
}

export function handleMessagesThunk (communityName, token) {
  return (dispatch, getState, apiClient) => {
    const state = getState()
    const ws = state.getIn(['community', 'webSocket', 'socket'])
    const communityName = state.getIn(['community', 'communitySelected', 'name'])
    const token =  state.getIn(['context', 'token'])

    dispatch(joinCommunityRoom(communityName))
    apiClient.joinCommunityRoom({ communityName, ws, token })

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data)
      const serverNotification = message["server_notification"]
      if (serverNotification) {
        dispatch(receiveNotificationFromServer(serverNotification))
        switch (serverNotification) {
          case "UPDATE_SPACE":
            dispatch(getSpaceThunk(communityName))
        }

        return
      }

      dispatch(messageReceived(message))
    }
  }
}

export function openSocketConnectionThunk () {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      const state = getState()
      const ws = state.getIn(['community', 'webSocket', 'socket'])

      if (ws) {
        ws.close()
        dispatch(closeSocketConnection())
      }

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

export function getSpaceThunk (communityName) {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      dispatch(getSpace())

      apiClient.getSpace({ communityName })
        .then(data => {
          const space = JSON.parse(data)

          dispatch(getSpaceSuccess(List(space["messages"])))
          resolve()
        })
        .catch((e) => {
          dispatch(getSpaceFailure(e))
          reject(e)
        })
    })
  }
}

export function sendMessageInSpaceThunk (communityName, message) {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      const state = getState()
      const token = state.getIn(['context', 'token'])
      dispatch(sendMessageInSpace())

      apiClient.sendMessageInSpace({ token, communityName, message })
        .then(data => {
          const space = JSON.parse(data)
          console.log(space["messages"])
          dispatch(sendMessageInSpaceSuccess(List(space["messages"])))
          resolve()
        })
        .catch((e) => {
          dispatch(sendMessageInSpaceFailure(e))
          reject(e)
        })
    })
  }
}

export function getCommunitiesTrendsThunk () {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      dispatch(getCommunitiesTrends())

      apiClient.getCommunitiesTrends()
        .then(data => {
          const trends = JSON.parse(data)

          dispatch(getCommunitiesTrendsSuccess(List(trends)))
          resolve()
        })
        .catch((e) => {
          dispatch(getCommunitiesTrendsFailure(e))
          reject(e)
        })
    })
  }
}

export function subscribeToCommunityThunk (communityName) {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      const state = getState()
      const token = state.getIn(['context', 'token'])
      dispatch(subscribeToCommunity())

      apiClient.subscribeToCommunity({ token, communityName })
        .then(data => {
          const { subscriptions } = JSON.parse(data)
          dispatch(subscribeToCommunitySuccess(List(subscriptions)))
          resolve()
        })
        .catch((e) => {
          dispatch(subscribeToCommunityFailure(e))
          reject(e)
        })
    })
  }
}
