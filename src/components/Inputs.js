import React from 'react'
import styled from 'styled-components'

import SelectDropdown from './SelectDropdown'
import googleFonts from '../config/googleFonts'

const inputFields = [
  {
    name: 'backgroundColor',
    title: 'Background',
    type: 'color'
  },
  {
    name: 'textColor',
    title: 'Text',
    type: 'color'
  },
  {
    name: 'textFont',
    title: 'Text font',
    type: 'select',
    options: googleFonts.items.map(item => item.family)
  }
]

const SmartInput = (props) => props.type === 'select'
  ? <SelectDropdown {...props} />
  : <input {...props} />

export default ({ profile, setProfile }) => {
  const handleChange = (fieldName, event) => {
    setProfile({
      ...profile,
      [fieldName]: event.target.value
    })
  }

  return (
    <DivLeft>
      {inputFields.map(field => (
        <div key={field.name}>
          <label>
            {field.title}:{' '}
            <SmartInput type={field.type} options={field.options} value={profile[field.name]} onChange={event => handleChange(field.name, event)} />
          </label>
        </div>
      ))}
    </DivLeft>
  )
}

const DivLeft = styled.div`
  text-align: left;
  margin: auto;
  width: 15em;
`
