import React from 'react'

import { guessFormat, kebabCase, get } from '../../../lib/helpers'
import inputsMetadata from './inputsMetadata.json'
import defaultValuesForFormat from './defaultValuesForFormat.json'

import SmartInput from '../../components/input/SmartInput'

const ElementDesigner = ({ children, style, inputs, onChange }) => (
  <div className='element-designer'>
    <div className='preview-box'>
      {children}
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
        const format = get(inputsMetadata[propertyKey], 'format', guessFormat(inputs[propertyKey]))
        return (
          <SmartInput
            key={propertyKey}
            type={get(inputsMetadata[propertyKey], 'type')}
            name={propertyKey}
            label={propertyKey}
            format={format}
            min={get(inputsMetadata[propertyKey], 'min', defaultValuesForFormat[format].min)}
            max={get(inputsMetadata[propertyKey], 'max', defaultValuesForFormat[format].max)}
            step={get(inputsMetadata[propertyKey], 'step', defaultValuesForFormat[format].step)}
            value={inputs[propertyKey]}
            onChange={onChange}
          />
        )
      })}
    </div>

    <div className='code-box'>
      <textarea readOnly>
        {Object.keys(style).map((propertyName, index) => `${kebabCase(propertyName)}: ${style[propertyName]};\n`)}
      </textarea>
    </div>
  </div>
)
export default ElementDesigner
