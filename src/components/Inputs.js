import React from 'react'
import styled from 'styled-components'

import SelectDropdown from './SelectDropdown'
import googleFonts from '../config/googleFonts'

const shortFontCategory = category => category.replace('-serif', '').replace('monospace', 'mono')

const allFonts = googleFonts.items.sort((a, b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)).map(item => ({
  name: `${item.family} (${shortFontCategory(item.category)})`,
  value: item.family
}))

const fontWeights = [
  { name: 'Thin (100)', value: 100 },
  { name: 'Light (300)', value: 300 },
  { name: 'Regular (400)', value: 'normal' },
  { name: 'Medium (500)', value: 500 },
  { name: 'Semi-Bold (600)', value: 600 },
  { name: 'Bold (700)', value: 'bold' },
  { name: 'Extra-Bold (800)', value: 800 },
  { name: 'Black (900)', value: 900 }
]

const inputCategories = [
  {
    title: 'Background',
    fields: [
      {
        name: 'backgroundColor',
        title: 'Color',
        type: 'color'
      }
    ]
  },
  {
    title: 'Text',
    fields: [
      {
        name: 'textColor',
        title: 'Color',
        type: 'color'
      },
      {
        name: 'textFont',
        title: 'Typeface',
        type: 'select',
        options: allFonts
      },
      {
        name: 'textSize',
        title: 'Size',
        type: 'select',
        options: ['10px', '12px', '14px', '16px', '18px', '20px']
      },
      {
        name: 'textWeight',
        title: 'Weight',
        type: 'select',
        options: fontWeights
      }
    ]
  },
  {
    title: 'Headlines',
    fields: [
      {
        name: 'headlineColor',
        title: 'Color',
        type: 'color'
      },
      {
        name: 'headlineFont',
        title: 'Typeface',
        type: 'select',
        options: allFonts
      },
      {
        name: 'headlineWeight',
        title: 'Weight',
        type: 'select',
        options: fontWeights
      },
      {
        name: 'headlineItalic',
        title: 'Italic',
        type: 'checkbox'
      },
      {
        name: 'headlineUppercase',
        title: 'Uppercase',
        type: 'checkbox'
      }
    ]
  }
]

const SmartInput = (props) => props.type === 'select'
  ? <SelectDropdown {...props} style={{ width: '8em' }} />
  : <input {...props} />

export default ({ profile, setProfile }) => {
  const handleChange = (fieldName, event) => {
    const newValue = Object.prototype.hasOwnProperty.call(event.target, 'checked') ? event.target.checked : event.target.value
    setProfile({
      ...profile,
      [fieldName]: newValue
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
      <link rel='stylesheet' href={`https://fonts.googleapis.com/css?family=${profile.textFont}:100,300,400,500,600,700,800,900,100italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&display=swap`} />
      <link rel='stylesheet' href={`https://fonts.googleapis.com/css?family=${profile.headlineFont}:100,300,400,500,600,700,800,900,100italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&display=swap`} />
    </DivLeft>
  )
}

const DivLeft = styled.div`
  text-align: left;
  margin: auto;
  width: 15em;

  p {
    margin: 0.4em 0;
  }
`
