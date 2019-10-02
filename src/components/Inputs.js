import React from 'react'
import styled from 'styled-components'

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
  }
]

export default ({ profile, setProfile }) => {
  const handleChange = (fieldName, event) => {
    setProfile({
      ...profile,
      [fieldName]: event.target.value
    })
  }

  return <DivLeft >
    {inputFields.map(field => (
      <div key={field.name}>
        <label>
          {field.title}:{' '}
          <input type={field.type} value={profile[field.name]} onChange={event => handleChange(field.name, event)} />
        </label>
      </div>
    ))}    
  </DivLeft>
}

const DivLeft = styled.div`
  text-align: left;
  margin: auto;
  width: 15em;
`
