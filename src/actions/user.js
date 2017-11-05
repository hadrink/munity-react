export const SET_USER_DATA_VALUE = 'SET_USER_DATA_VALUE'

export function setUserDataValue(property, value) {
  return {
    type: SET_USER_DATA_VALUE, property, value
  }
}
