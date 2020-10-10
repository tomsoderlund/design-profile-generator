import { useState } from 'react'

export default function useStyles (defaultStyleProperties) {
  const [values, setValues] = useState(defaultStyleProperties.default)

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
// const [buttonValues, handleButtonStyleChange, setButtonTheme] = useStyles(buttonStyleProperties)
