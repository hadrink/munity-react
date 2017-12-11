export const SET_USER_DATA_VALUE = 'SET_USER_DATA_VALUE'
export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const SET_TOKEN = 'SET_TOKEN'
export const RESET_LOGIN_REGISTER = 'RESET_LOGIN_REGISTER'

export function setUserDataValue (property, value) {
  return {
    type: SET_USER_DATA_VALUE, property, value
  }
}

export function register () {
  return {
    type: REGISTER
  }
}

export function registerSuccess (user) {
  return {
    type: REGISTER_SUCCESS, user
  }
}

export function registerFailure (error) {
  return {
    type: REGISTER_FAILURE, error
  }
}

export function login () {
  return {
    type: LOGIN
  }
}

export function loginSuccess (user) {
  return {
    type: LOGIN_SUCCESS, user
  }
}

export function loginFailure (error) {
  return {
    type: LOGIN_FAILURE, error
  }
}

export function setToken (token) {
  return {
    type: SET_TOKEN, token
  }
}

export function resetLoginRegister () {
  return {
    type: RESET_LOGIN_REGISTER
  }
}
