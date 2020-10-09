import { useState } from 'react'

export default function useStyles (defaultStyleProperties) {
  const [values, setValues] = useState(defaultStyleProperties)

  const handleValueChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    setValues({ ...values, [target.name]: value })
  }

  return [values, handleValueChange]
}

// import useStyles from '../hooks/useStyles'
// const [buttonValues, handleButtonStyleChange] = useStyles(defaultButtonStyleProperties)
