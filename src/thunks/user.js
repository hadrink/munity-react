import {
  register,
  registerSuccess,
  registerFailure,
  login,
  loginSuccess,
  loginFailure,
  getMyCommunities,
  getMyCommunitiesSuccess,
  getMyCommunitiesFailure,
  setToken,
} from '../actions/user'

import { List } from 'immutable'

export function registerThunk (username, email, password) {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      const state = getState()

      dispatch(register())

      apiClient.register({ username, email, password })
        .then(data => {
          const jsonData = JSON.parse(data)
          const token = jsonData['access_token']
          const user = jsonData['user']

          dispatch(registerSuccess(user))
          dispatch(setToken(token))
          resolve()
        })
        .catch((e) => {
          dispatch(registerFailure(e))
          reject(e)
        })
    })
  }
}

export function loginThunk (username, password) {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      dispatch(login())

      apiClient.login({ username, password })
        .then(data => {
          const jsonData = JSON.parse(data)
          const token = jsonData['access_token']
          const user = jsonData['user']
          dispatch(loginSuccess(token, user))
          resolve()
        })
        .catch((e) => {
          dispatch(loginFailure(e))
          reject(e)
        })
    })
  }
}

export function getMyCommunitiesThunk () {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      const state = getState()
      const token = state.getIn(['context', 'token'])
      dispatch(getMyCommunities())

      apiClient.getMyCommunities({ token })
        .then(data => {
          const jsonData = JSON.parse(data)
          const myCommunities = jsonData

          dispatch(getMyCommunitiesSuccess(List(myCommunities)))
          resolve()
        })
        .catch((e) => {
          dispatch(getMyCommunitiesFailure(e))
          reject(e)
        })
    })
  }
}
