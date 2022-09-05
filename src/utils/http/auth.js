import { setSessionStorage, getSessionStorage, removeSessionStorage } from '@/utils/util'
const TokenKey = 'userToken'

export function getToken () {
  return getSessionStorage(TokenKey)
}

export function setToken (token) {
  return setSessionStorage(TokenKey, token)
}

export function removeToken () {
  return removeSessionStorage(TokenKey)
}
