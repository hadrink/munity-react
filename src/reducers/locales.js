import { UPDATE_LOCALES } from '../actions/app'

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_LOCALES:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
