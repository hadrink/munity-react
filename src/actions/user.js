export const SET_USER_DATA_VALUE = 'SET_USER_DATA_VALUE'
export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export function setUserDataValue(property, value) {
  return {
    type: SET_USER_DATA_VALUE, property, value
  }
}

export function register() {
  return {
    type: REGISTER
  }
}

export function registerSuccess(user) {
  return {
    type: REGISTER, user
  }
}

export function registerFailure(error) {
  return {
    type: REGISTER_FAILURE, error
  }
}
