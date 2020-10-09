import { useState } from 'react'
import tinycolor from 'tinycolor2'

import Page from '../components/page/Page'

import SmartInput from '../components/input/SmartInput'

const inputMetadata = {
  colorsBackground: { type: 'color' },
  cornersRadius: { min: 0, max: 2, step: 0.1 },
  roundnessY: { min: -3 },
  reflectionY: { min: -3 }
}

const styleSections = {
  colors: ['colorsBackground'],
  corners: ['cornersRadius'],
  roundness: ['roundnessIntensity', 'roundnessY'],
  reflection: ['reflectionIntensity', 'reflectionY', 'reflectionSize', 'reflectionBlur'],
  shadow: ['shadowIntensity', 'shadowY', 'shadowSize', 'shadowBlur']
}

const defaultStyleProperties = {
  colorsBackground: '#00ced1',

  cornersRadius: '0.5em',

  roundnessIntensity: 0.5,
  roundnessY: '100%',

  reflectionIntensity: 0.3,
  reflectionY: '0.2em',
  reflectionSize: '0em',
  reflectionBlur: '0.125em',

  shadowIntensity: 0.3,
  shadowY: '0.2em',
  shadowSize: '0em',
  shadowBlur: '0.125em'
}

const defaultValuesForFormat = {
  '?em': { min: 0, max: 3, step: 0.1 },
  '?%': { min: 0, max: 100, step: 10 },
  '?': { min: 0, max: 1, step: 0.1 }
}

const guessFormat = (value) => {
  const valueStr = value + ''
  if (valueStr.includes('em')) return '?em'
  if (valueStr.includes('%')) return '?%'
  return '?'
}

const kebabCase = (str) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
const titleCase = str => str.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())

const get = (obj, key, defaultValue) => (obj && Object.prototype.hasOwnProperty.call(obj, key)) ? obj[key] : defaultValue

const ShapePage = () => {
  const [inputs, setInputs] = useState(defaultStyleProperties)

  const handleInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    setInputs({ ...inputs, [target.name]: value })
  }

  const buttonStyle = {
    borderRadius: inputs.cornersRadius,
    boxShadow: [
      ...(inputs.shadowIntensity > 0 ? [`0 ${inputs.shadowY} ${inputs.shadowBlur} ${inputs.shadowSize} rgba(0, 0, 0, ${inputs.shadowIntensity})`] : []),
      ...(inputs.reflectionIntensity > 0 ? [`inset 0 ${inputs.reflectionY} ${inputs.reflectionBlur} ${inputs.reflectionSize} rgba(255, 255, 255, ${inputs.reflectionIntensity})`] : [])
    ].join(', '),
    background: [
      ...(inputs.roundnessIntensity > 0 ? [`linear-gradient(180deg, rgba(255,255,255, ${inputs.roundnessIntensity}) 0%, rgba(255,255,255, 0) ${inputs.roundnessY})`] : []),
      inputs.colorsBackground
    ].join(', '),
    color: tinycolor(inputs.colorsBackground).getBrightness() > 128 ? 'black' : 'white'
  }

  const StyleSection = ({ sectionName, propertyNames }) => (
    <div>
      <h3>{titleCase(sectionName)}</h3>
      {propertyNames.map((propertyKey, index) => {
        const format = get(inputMetadata[propertyKey], 'format', guessFormat(inputs[propertyKey]))
        return (
          <SmartInput
            key={propertyKey}
            type={get(inputMetadata[propertyKey], 'type')}
            name={propertyKey}
            label={propertyKey.replace(sectionName, '')}
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
  )

  return (
    <Page>
      <div className='center-vertically'>
        <div className='preview-box'>
          <button style={buttonStyle}>Button</button>
        </div>

        {/*
        <div className='sections-box'>
          {Object.keys(styleSections).map((sectionName, index) => (
            <StyleSection
              key={sectionName}
              sectionName={sectionName}
              propertyNames={styleSections[sectionName]}
            />
          ))}
        </div>
 */}
        <div className='properties-box'>
          {Object.keys(inputs).map((propertyKey, index) => {
            const format = get(inputMetadata[propertyKey], 'format', guessFormat(inputs[propertyKey]))
            return (
              <SmartInput
                key={propertyKey}
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
      </div>
    </Page>
  )
}
export default ShapePage
