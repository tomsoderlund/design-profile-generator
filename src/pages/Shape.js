import { useState } from 'react'

import Page from '../components/page/Page'

import SliderInput from '../components/input/SliderInput'

const inputMetadata = {
  // dropShadowY: { min: -3.0 },
  // dropShadowAlpha: { max: 1.0 },
  // shineOpacity: { max: 1.0 },
  // shineStop: { max: 100, step: 10 }
}

const defaultValuesForFormat = {
  '?em': { min: -3, max: 3, step: 0.1 },
  '?%': { min: 0, max: 100, step: 10 },
  '?': { min: 0, max: 1, step: 0.05 }
}

const guessFormat = (value) => {
  const valueStr = value + ''
  if (valueStr.includes('em')) return '?em'
  if (valueStr.includes('%')) return '?%'
  return '?'
}

const get = (obj, key, defaultValue) => (obj && Object.prototype.hasOwnProperty.call(obj, key)) ? obj[key] : defaultValue

const ShapePage = () => {
  const [inputs, setInputs] = useState({
    borderRadius: '0.5em',

    shineOpacity: 0.5,
    shineStop: '100%',

    dropShadowY: '0.2em',
    dropShadowBlur: '0.125em',
    dropShadowAlpha: 0.3
  })

  const handleInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    setInputs({ ...inputs, [target.name]: value })
  }

  const buttonStyle = {
    borderRadius: inputs.borderRadius,
    boxShadow: `0 ${inputs.dropShadowY} ${inputs.dropShadowBlur} rgba(0, 0, 0, ${inputs.dropShadowAlpha})`,
    background: `linear-gradient(180deg, rgba(255,255,255, ${inputs.shineOpacity}) 0%, rgba(255,255,255, 0) ${inputs.shineStop}), blue`
  }

  console.log('buttonStyle:', buttonStyle)

  return (
    <Page>
      <main className='center-vertically'>
        <div className='preview-box'>
          <button style={buttonStyle}>Button</button>
        </div>

        <div>
          {Object.keys(inputs).map((propertyKey, index) => {
            const format = get(inputMetadata[propertyKey], 'format', guessFormat(inputs[propertyKey]))
            return (
              <SliderInput
                key={index}
                name={propertyKey}
                label={propertyKey}
                format={format}
                min={get(inputMetadata[propertyKey], 'min', defaultValuesForFormat[format].min)}
                max={get(inputMetadata[propertyKey], 'max', defaultValuesForFormat[format].max)}
                step={get(inputMetadata[propertyKey], 'step', defaultValuesForFormat[format].step)}
                value={inputs[propertyKey]}
                onChange={handleInputChange}
              />
            )
          })}
        </div>
      </main>
    </Page>
  )
}
export default ShapePage
