import React from 'react'
import tinycolor from 'tinycolor2'

import SliderInput from './SliderInput'

const getInputComponent = (type, props) => {
  switch (type) {
    case 'color':
      return <input type='color' {...props} title={`${props.value} (${tinycolor(props.value).toHexString()})`} value={tinycolor(props.value).toHexString()} />
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
