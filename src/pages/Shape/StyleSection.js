import React from 'react'

import { guessFormat, titleCase, get } from '../../../lib/helpers'
import inputsMetadata from './inputsMetadata.json'
import defaultValuesForFormat from './defaultValuesForFormat.json'

import SmartInput from '../../components/input/SmartInput'

const StyleSection = ({ sectionName, propertyNames, inputs, onChange }) => (
  <div>
    <h3>{titleCase(sectionName)}</h3>
    {propertyNames.map((propertyKey, index) => {
      const format = get(inputsMetadata[propertyKey], 'format', guessFormat(inputs[propertyKey]))
      return (
        <SmartInput
          key={propertyKey}
          type={get(inputsMetadata[propertyKey], 'type')}
          name={propertyKey}
          label={titleCase(propertyKey.replace(sectionName, ''))}
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
)
export default StyleSection
