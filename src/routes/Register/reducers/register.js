import {Map, List} from 'immutable'
import { SET_USER_DATA_VALUE } from '../../../actions/user'

const initialState = () => {
  return Map({
    username: '',
    email: '',
    password: '',
  });
}

export default (state = initialState(), action) => {
  switch(action.type) {
    case SET_USER_DATA_VALUE:
    console.log(state);
      return state.set(action.property, 'action.value')
  }

  return state
}
