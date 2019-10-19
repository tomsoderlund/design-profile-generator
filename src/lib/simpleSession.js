/**
 * SimpleSession module
 * @description Lib to get/set session values to cookie and/or URL query string.
 * @module SimpleSession
 * @author Tom Söderlund
 */

const DEFAULT_COOKIE_NAME = 'app'
let cookieName = DEFAULT_COOKIE_NAME

const queryObjectFromString = (url, useHash = false) => (url.split(useHash ? '#' : '?')[1] || '')
  .split('&')
  .reduce((result, propValue) => {
    if (propValue !== '') result[propValue.split('=')[0]] = parseObject(decodeURIComponent(propValue.split('=')[1]))
    return result
  }, {})

const queryObjectToString = (queryObject, useHash = false) => Object.keys(queryObject).reduce((result, key) => (queryObject[key] === undefined) ? result : result + (result.length ? '&' : (useHash ? '#' : '?')) + key + '=' + queryObject[key], '')

const getCookies = () => window.document.cookie.split('; ').reduce((result, str) => {
  const keyValue = str.split('=')
  result[keyValue[0]] = keyValue[1]
  return result
}, {})

const setCookie = (name, value) => {
  window.document.cookie = `${name}=${JSON.stringify(value)}`
}

const parseObject = obj => (typeof (obj) === 'string' && (obj.includes('{') || obj.includes('['))) ? JSON.parse(obj) : obj

const getCurrentValues = (useHash) => {
  const allCookies = getCookies()
  const cookie = parseObject(allCookies[cookieName])
  const query = queryObjectFromString(window.location.href, useHash)
  return Object.assign({}, cookie, query)
}

// Public API

export const getSessionValue = function (property, defaultValue, options = {}) {
  if (options.cookieName) cookieName = options.cookieName
  const value = getCurrentValues(options.useHash)[property]
  return value !== undefined ? value : defaultValue
}

export const setSessionValue = function (property, value, options = {}) {
  options.updateCookie = options.updateCookie || true
  options.updateQuery = options.updateQuery || false
  if (options.cookieName) cookieName = options.cookieName
  if (options.updateCookie) {
    setCookie(cookieName, { [property]: value })
  }
  if (options.updateQuery) {
    const query = queryObjectFromString(window.location.href, options.useHash)
    const newPath = queryObjectToString(Object.assign({}, query, { [property]: JSON.stringify(value) }), options.useHash)
    window.history.pushState(null, null, newPath)
  }
}
