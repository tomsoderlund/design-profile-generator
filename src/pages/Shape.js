import { useState } from 'react'
import tinycolor from 'tinycolor2'

import Page from '../components/page/Page'

import SmartInput from '../components/input/SmartInput'

const inputMetadata = {
  backgroundColor: { type: 'color' },
  borderRadius: { min: 0, max: 2, step: 0.1 }
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

const kebabCase = (str) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

const get = (obj, key, defaultValue) => (obj && Object.prototype.hasOwnProperty.call(obj, key)) ? obj[key] : defaultValue

const ShapePage = () => {
  const [inputs, setInputs] = useState({
    backgroundColor: '#ddaadd',

    borderRadius: '0.5em',

    shineOpacity: 0.5,
    shineStop: '100%',

    dropShadowY: '0.2em',
    dropShadowBlur: '0.125em',
    dropShadowSpread: '0em',
    dropShadowAlpha: 0.3
  })

  const handleInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    setInputs({ ...inputs, [target.name]: value })
  }

  const buttonStyle = {
    borderRadius: inputs.borderRadius,
    boxShadow: `0 ${inputs.dropShadowY} ${inputs.dropShadowBlur} ${inputs.dropShadowSpread} rgba(0, 0, 0, ${inputs.dropShadowAlpha})`,
    background: `linear-gradient(180deg, rgba(255,255,255, ${inputs.shineOpacity}) 0%, rgba(255,255,255, 0) ${inputs.shineStop}), ${inputs.backgroundColor}`,
    color: tinycolor(inputs.backgroundColor).getBrightness() > 128 ? 'black' : 'white'
  }

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
              <SmartInput
                key={index}
                type={get(inputMetadata[propertyKey], 'type')}
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

        <div className='code-box'>
          <textarea readOnly>
            {Object.keys(buttonStyle).map((propertyName, index) => `${kebabCase(propertyName)}: ${buttonStyle[propertyName]};\n`)}
          </textarea>
        </div>
      </main>
    </Page>
  )
}
export default ShapePage
