import {
  register,
  registerSuccess,
  registerFailure,
  login,
  loginSuccess,
  loginFailure,
  setToken,
} from '../actions/user'

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

          dispatch(loginSuccess(user))
          dispatch(setToken(token))
          resolve()
        })
        .catch((e) => {
          console.error(e)
          dispatch(loginFailure(e))
          reject(e)
        })
    })
  }
}
