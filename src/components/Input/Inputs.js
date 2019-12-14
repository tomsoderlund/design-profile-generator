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

const fontSizes = ['10px', '12px', '14px', '16px', '18px', '20px']

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

const inputTypes = {
  boolean: {
    type: 'checkbox'
  },
  color: {
    type: 'color'
  },
  'font-family': {
    type: 'select',
    options: allFonts
  },
  'font-weight': {
    type: 'select',
    options: fontWeights
  },
  'font-size': {
    type: 'select',
    options: fontSizes
  }
}

const allColorProps = {
  title: 'Colors',
  fields: [
    {
      name: 'backgroundColor',
      title: 'Background',
      input: 'color'
    },
    {
      name: 'actionColor',
      title: 'Action/Primary',
      input: 'color'
    },
    {
      name: 'headerColor',
      title: 'Header/Secondary',
      input: 'color'
    },
    {
      name: 'textColor',
      title: 'Text',
      input: 'color'
    },
    {
      name: 'headlineColor',
      title: 'Headlines',
      input: 'color'
    },
    {
      name: 'warningColor',
      title: 'Warning',
      input: 'color'
    },
    {
      name: 'informationColor',
      title: 'Information',
      input: 'color'
    }
  ]
}

const textProps = {
  title: 'Text',
  fields: [
    {
      name: 'textFont',
      title: 'Typeface',
      input: 'font-family'
    },
    {
      name: 'textSize',
      title: 'Size',
      input: 'font-size'
    },
    {
      name: 'textWeight',
      title: 'Weight',
      input: 'font-weight'
    }
  ]
}

const headlinesProps = {
  title: 'Headlines',
  fields: [
    {
      name: 'headlineFont',
      title: 'Typeface',
      input: 'font-family'
    },
    {
      name: 'headlineWeight',
      title: 'Weight',
      input: 'font-weight'
    },
    {
      name: 'headlineItalic',
      title: 'Italic',
      input: 'boolean'
    },
    {
      name: 'headlineUppercase',
      title: 'Uppercase',
      input: 'boolean'
    }
  ]
}

const allInputCategories = [
  allColorProps,
  textProps,
  headlinesProps
]

const SmartInput = (props) => {
  const inputType = inputTypes[props.input]
  return inputType.type === 'select'
    ? <SelectDropdown {...inputType} {...props} style={{ width: '8em' }} />
    : <input {...inputType} {...props} value={props.value || (props.type === 'color' ? '#ffffff' : '')} />
}

const CategoriesAndInputs = ({ categories, profile, setProfile }) => {
  const handleChange = (fieldName, event) => {
    const newValue = Object.prototype.hasOwnProperty.call(event.target, 'checked')
      ? event.target.checked
      : event.target.value
    setProfile({
      ...profile,
      [fieldName]: newValue
    })
  }

  return (
    categories.map(category => (
      <div key={category.title}>
        <h3>{category.title}</h3>
        {category.fields.map(field => (
          <p key={field.name}>
            <label>
              {field.title}:{' '}
              <SmartInput input={field.input} value={profile[field.name]} onChange={event => handleChange(field.name, event)} />
            </label>
          </p>
        ))}
      </div>
    ))
  )
}

export default ({ profile, setProfile }) => {
  return (
    <DivLeft>
      <Themes setProfile={setProfile} />
      <h2>Details</h2>
      <CategoriesAndInputs categories={allInputCategories} profile={profile} setProfile={setProfile} />
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
