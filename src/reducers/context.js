import { Map } from 'immutable'
import {
  SET_TOKEN,
} from '../actions/user'

const initialState = () => {
  return Map({
    token: '',
  });
}

export default (state = initialState(), action) => {
  switch(action.type) {
    case SET_TOKEN:
      return state.set('token', action.token)
  }

  return state
}
