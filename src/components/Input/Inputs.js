import React from 'react'
import styled from 'styled-components'

import SelectDropdown from './SelectDropdown'
import GoogleFontLink from '../GoogleFontLink'
import Themes from './Themes'
import googleFonts from '../../config/googleFonts'
import selectedFonts from '../../config/selectedFonts'

const shortFontCategory = category => category.replace('-serif', '').replace('monospace', 'mono')

const allFonts = googleFonts.items.sort((a, b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)).map(item => ({
  name: `${item.family} (${shortFontCategory(item.category)})${selectedFonts.includes(item.family) ? ' 🔵' : ''}`,
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
    title: 'Colors',
    fields: [
      {
        name: 'backgroundColor',
        title: 'Background',
        type: 'color'
      },
      {
        name: 'actionColor',
        title: 'Action/Primary',
        type: 'color'
      },
      {
        name: 'headerColor',
        title: 'Header/Secondary',
        type: 'color'
      },
      {
        name: 'textColor',
        title: 'Text',
        type: 'color'
      },
      {
        name: 'headlineColor',
        title: 'Headlines',
        type: 'color'
      },
      {
        name: 'warningColor',
        title: 'Warning',
        type: 'color'
      },
      {
        name: 'informationColor',
        title: 'Information',
        type: 'color'
      }
    ]
  },
  {
    title: 'Text',
    fields: [
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
  : <input {...props} value={props.value || (props.type === 'color' ? '#ffffff' : '')} />

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
      <Themes setProfile={setProfile} />
      <h2>Details</h2>
      {inputCategories.map(category => (
        <div key={category.title}>
          <h3>{category.title}</h3>
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
      <GoogleFontLink family={profile.textFont} />
      <GoogleFontLink family={profile.headlineFont} />
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
