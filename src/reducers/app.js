import { Map } from 'immutable'
import {
  BROWSER_SIZE_CHANGED,
} from '../actions/user'

const initialState = () => {
  return Map({
    window: Map({
      height: typeof window === 'object' ? window.innerHeight : null,
      width: typeof window === 'object' ? window.innerWidth : null,
      type: 'desktop', // desktop, mobile, tablet
    }),
  })
}

const handleTypeFromSize = (width, height) => {
  switch (true) {
    case (width < 480):
      return 'mobile'
    case (width < 768):
      return 'tablet'
    default:
    return 'desktop'
  }
}

export default (state = initialState(), action) => {
  switch (action.type) {
    case BROWSER_SIZE_CHANGED:
      return state.setIn(['window', 'height'], action.height)
      .setIn(['window', 'width'], action.width)
      .setIn(['window', 'type'], handleTypeFromSize(action.width, action.height))
  }

  return state
}
