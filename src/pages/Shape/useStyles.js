import { useState } from 'react'
import { getSessionValue } from 'simple-browser-session'

const applyGlobalStyleProperties = (elementType, styleProperties) => {
  const remappedProperties = {
    ...styleProperties,
    colorsBackground: getSessionValue(elementType === 'button' ? 'actionColor' : 'inputColor', styleProperties.colorsBackground)
  }
  return remappedProperties
}

export default function useStyles (elementType, defaultStyleProperties) {
  const [values, setValues] = useState(applyGlobalStyleProperties(elementType, defaultStyleProperties.default))

  const handleValueChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    setValues({ ...values, [target.name]: value })
  }

  const setTheme = (theme = 'default') => {
    setValues({
      ...values,
      ...defaultStyleProperties[theme]
    })
  }

  return [values, handleValueChange, setTheme]
}

// import useStyles from '../hooks/useStyles'
// const [buttonValues, handleButtonStyleChange, setButtonTheme] = useStyles('button', buttonStyleProperties)
