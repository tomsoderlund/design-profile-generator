import { useState } from 'react'

export default function useStyles (defaultStyleProperties) {
  const [values, setValues] = useState(defaultStyleProperties)

  const handleValueChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    setValues({ ...values, [target.name]: value })
  }

  const handleReset = () => {
    setValues(defaultStyleProperties)
  }

  return [values, handleValueChange, handleReset]
}

// import useStyles from '../hooks/useStyles'
// const [buttonValues, handleButtonStyleChange, handleButtonReset] = useStyles(buttonStyleProperties)
