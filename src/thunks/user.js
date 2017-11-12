import {
  register,
  registerSuccess,
  registerFailure,
  setToken,
} from '../actions/user'

export function registerThunk(username, email, password) {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      const state = getState()

      dispatch(register)

      apiClient.register({username, email, password})
        .then(data => {
          const jsonData = JSON.parse(data)
          const token = jsonData['access_token']
          const user = jsonData['user']

          dispatch(registerSuccess(user))
          dispatch(setToken(token))
          resolve()
        })
        .catch((e) => {
          console.error(e)
          dispatch(registerFailure(e))
          reject()
        })
    })
  }
}
