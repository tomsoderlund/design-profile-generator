import React from 'react'
import styled from 'styled-components'

import SelectDropdown from './SelectDropdown'
import googleFonts from '../config/googleFonts'

const inputCategories = [
  {
    title: 'Background',
    fields: [
      {
        name: 'backgroundColor',
        title: 'Background color',
        type: 'color'
      }
    ]
  },
  {
    title: 'Text',
    fields: [
      {
        name: 'textColor',
        title: 'Text color',
        type: 'color'
      },
      {
        name: 'textFont',
        title: 'Text font',
        type: 'select',
        options: googleFonts.items.map(item => item.family)
      },
      {
        name: 'textSize',
        title: 'Text size',
        type: 'select',
        options: ['10px', '12px', '14px', '16px', '18px', '20px']
      }
    ]
  },
  {
    title: 'Headlines',
    fields: [
      {
        name: 'headlineColor',
        title: 'Headline color',
        type: 'color'
      },
      {
        name: 'headlineFont',
        title: 'Headline font',
        type: 'select',
        options: googleFonts.items.map(item => item.family)
      }
    ]
  }
]

const SmartInput = (props) => props.type === 'select'
  ? <SelectDropdown {...props} style={{ width: '8em' }} />
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
      {inputCategories.map(category => (
        <div key={category.title}>
          <h2>{category.title}</h2>
          {category.fields.map(field => (
            <p key={field.name}>
              <label>
                {field.title}:{' '}
                <SmartInput type={field.type} options={field.options} value={profile[field.name]} onChange={event => handleChange(field.name, event)} />
              </label>
            </p>
          ))}
        </div>
      ))}
      <link rel='stylesheet' href={`https://fonts.googleapis.com/css?family=${profile.textFont}:400&display=swap`} />
      <link rel='stylesheet' href={`https://fonts.googleapis.com/css?family=${profile.headlineFont}:400,700&display=swap`} />
    </DivLeft>
  )
}

const DivLeft = styled.div`
  text-align: left;
  margin: auto;
  width: 15em;
`
