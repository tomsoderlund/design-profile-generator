import React from 'react'

const NUMBER_PLACEHOLDER = '?'

const SliderInput = ({ name, format = NUMBER_PLACEHOLDER, min = 0, max = 100, step = 0.1, value, onChange }) => {
  const formatAsStr = (format + '')

  const handleSliderChange = ({ target }) => {
    onChange({ target: { name: target.name, value: formatAsStr.replace(NUMBER_PLACEHOLDER, target.value) } })
  }

  const removeFormatting = (valueStr) => (valueStr + '').replace(formatAsStr.split(NUMBER_PLACEHOLDER)[0], '').replace(formatAsStr.split(NUMBER_PLACEHOLDER)[1], '')

  return (
    <>
      <input
        type='range'
        min={min}
        max={max}
        step={step}
        name={name}
        value={removeFormatting(value)}
        onChange={handleSliderChange}
      />
      <input
        type='text'
        name={name}
        value={value}
        onChange={onChange}
        style={{ width: '6em', minWidth: 'unset' }}
      />
    </>
  )
}
export default SliderInput
