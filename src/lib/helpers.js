export const guessFormat = (value) => {
  const valueStr = value + ''
  if (valueStr.includes('em')) return '?em'
  if (valueStr.includes('px')) return '?px'
  if (valueStr.includes('%')) return '?%'
  return '?'
}

export const kebabCase = (str) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
export const spaceCase = (str) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1 $2').toLowerCase()
export const titleCase = str => str.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())

export const get = (obj, key, defaultValue) => (obj && Object.prototype.hasOwnProperty.call(obj, key)) ? obj[key] : defaultValue
