import {Map, List} from 'immutable'
import {
  SET_USER_DATA_VALUE,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../../../actions/user'

const initialState = () => {
  return Map({
    isSending: false,
    username: '',
    email: '',
    password: '',
    newUser: Map(),
  });
}

export default (state = initialState(), action) => {
  switch(action.type) {
    case SET_USER_DATA_VALUE:
      return state.set(action.property, action.value)

    case REGISTER:
      return state.set('isSending', true)
    case REGISTER_SUCCESS:
      return state.set('isSending', false).set('newUser', Map(action.data))
    case REGISTER_FAILURE:
      return state.set('isSending', false)
  }

  return state
}
