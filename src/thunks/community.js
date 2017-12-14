import { List } from 'immutable'
import {
  getSubscriptions,
  getSubscriptionsSuccess,
  getSubscriptionsFailure,
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
