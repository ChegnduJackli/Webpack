import Cookies from 'js-cookie'

const TokenKey ="cargillApiToken"

export function getToken() {
    return Cookies.get(TokenKey)
  }
  export function setToken(token) {
    return Cookies.set(TokenKey, token)
  }
  export function removeToken() {
    return Cookies.remove(TokenKey)
  }
  export function getCookieByKey(key) {
    return Cookies.get(key)
  }

  export function setCookie(key, val) {
    return Cookies.set(key, val)
  }
  
  export function removeCookieByKey(key) {
    return Cookies.remove(key)
  }