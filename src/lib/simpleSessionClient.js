import { getSessionValue as getSessionValueOriginal } from 'simple-browser-session'
export { setSessionValue } from 'simple-browser-session'

export const getSessionValue = (property, defaultValue, options) => {
  if (typeof window !== 'undefined') {
    return getSessionValueOriginal(property, defaultValue, options)
  }
}
