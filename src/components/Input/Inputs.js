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

export const backgroundColor = {
  name: 'backgroundColor',
  label: 'Background',
  inputType: 'color'
}

export const actionColor = {
  name: 'actionColor',
  label: 'Action/Primary',
  inputType: 'color'
}

export const headerColor = {
  name: 'headerColor',
  label: 'Header/Secondary',
  inputType: 'color'
}

export const keyColorProps = {
  title: 'Key Colors',
  fields: [
    backgroundColor,
    actionColor,
    headerColor
  ]
}

export const warningInfoColorProps = {
  title: 'Warning/Info Colors',
  fields: [
    {
      name: 'warningColor',
      label: 'Warning',
      inputType: 'color'
    },
    {
      name: 'informationColor',
      label: 'Information',
      inputType: 'color'
    }
  ]
}

export const textProps = {
  title: 'Text',
  fields: [
    {
      name: 'textFont',
      label: 'Typeface',
      inputType: 'font-family'
    },
    {
      name: 'textColor',
      label: 'Color',
      inputType: 'color'
    },
    {
      name: 'textSize',
      label: 'Size',
      inputType: 'font-size'
    },
    {
      name: 'textWeight',
      label: 'Weight',
      inputType: 'font-weight'
    }
  ]
}

export const headlinesProps = {
  title: 'Headlines',
  fields: [
    {
      name: 'headlineFont',
      label: 'Typeface',
      inputType: 'font-family'
    },
    {
      name: 'headlineColor',
      label: 'Color',
      inputType: 'color'
    },
    {
      name: 'headlineWeight',
      label: 'Weight',
      inputType: 'font-weight'
    },
    {
      name: 'headlineItalic',
      label: 'Italic',
      inputType: 'boolean'
    },
    {
      name: 'headlineUppercase',
      label: 'Uppercase',
      inputType: 'boolean'
    }
  ]
}

/*
const allInputCategories = [
  keyColorProps,
  warningInfoColorProps,
  textProps,
  headlinesProps
]
*/

const SmartInput = (props) => {
  const { inputType, ...propsWithoutInputType } = props
  const inputTypeObj = inputTypes[inputType]
  return inputTypeObj.type === 'select'
    ? <SelectDropdown {...inputTypeObj} {...propsWithoutInputType} style={{ width: '8em', maxWidth: '100%' }} />
    : <input type={inputTypeObj.type} {...propsWithoutInputType} value={props.value || (props.type === 'color' ? '#ffffff' : '')} />
}

export const InputFieldList = ({ fields, profile, setProfile }) => {
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
    fields.map(field => (
      <p key={field.name}>
        <label>
          {field.label}:{' '}
          <SmartInput inputType={field.inputType} value={profile[field.name]} onChange={event => handleChange(field.name, event)} />
        </label>
      </p>
    ))
  )
}

export const CategoriesAndInputs = ({ categories, profile, setProfile }) => {
  return (
    categories.map(category => (
      <div key={category.title}>
        <h3>{category.title}</h3>
        {<InputFieldList fields={category.fields} profile={profile} setProfile={setProfile} />}
      </div>
    ))
  )
}

export default ({ profile, setProfile }) => {
  return (
    <DivLeft>
      <Themes setProfile={setProfile} />
      {/*
      <h2>Details</h2>
      <CategoriesAndInputs categories={allInputCategories} profile={profile} setProfile={setProfile} />
    */}
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
