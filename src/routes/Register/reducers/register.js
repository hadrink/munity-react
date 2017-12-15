import {Map, List} from 'immutable'
import {
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
    newUser: '',
  });
}

export default (state = initialState(), action) => {
  switch (action.type) {
    case REGISTER:
      return state.set('isSending', true)
    case REGISTER_SUCCESS:
      return state.set('isSending', false).set('newUser', action.user)
    case REGISTER_FAILURE:
      return state.set('isSending', false)
  }

  return state
}
