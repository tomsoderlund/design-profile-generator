import React from 'react'

import SliderInput from './SliderInput'

const getInputComponent = (type, props) => {
  switch (type) {
    case 'color':
      return <input type='color' {...props} />
    default:
      return <SliderInput {...props} />
  }
}

const SmartInput = (props) => {
  const { type, label, ...otherProps } = props

  const inputComponent = getInputComponent(type, otherProps)

  return (
    <div className='center-row'>
      <label>{label}:</label>
      {inputComponent}
    </div>
  )
}
export default SmartInput
