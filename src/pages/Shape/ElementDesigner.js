import React from 'react'

import { kebabCase } from '../../lib/helpers'

import StyleSection from './StyleSection'

const ElementDesigner = ({ children, style, styleSections, inputs, onChange, onSetTheme }) => (
  <div className='element-designer'>
    <div className='preview-box'>
      {children}
      <div className='actions'>
        <a onClick={e => onSetTheme('default')}>Default</a>
        {' '}
        <a onClick={e => onSetTheme('clear')}>Clear</a>
      </div>
    </div>

    <div className='sections-box'>
      {Object.keys(styleSections).map((sectionName, index) => (
        <StyleSection
          key={sectionName}
          sectionName={sectionName}
          propertyNames={styleSections[sectionName]}
          inputs={inputs}
          onChange={onChange}
        />
      ))}
    </div>

    {/*
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
 */}

    <div className='code-box'>
      <textarea readOnly>
        {Object.keys(style).map((propertyName, index) => `${kebabCase(propertyName)}: ${style[propertyName]};\n`)}
      </textarea>
    </div>
  </div>
)
export default ElementDesigner
