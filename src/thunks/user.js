import {
  register,
  registerSuccess,
  registerFailure,
} from '../actions/user'

export function registerThunk(username, email, password) {
  return (dispatch, getState, apiClient) => {
    return new Promise((resolve, reject) => {
      const state = getState()

      dispatch(register)

      console.log(apiClient)
      apiClient.register({username, email, password})
        .then(user => {
          dispatch(registerSuccess(user))
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
