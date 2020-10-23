import { useState } from 'preact/hooks'
import tinycolor from 'tinycolor2'
import { getSessionValue, setSessionValue } from 'simple-browser-session'
import { SelectMenu } from 'react-zeroconfig-components'
import '../../../node_modules/react-zeroconfig-components/dist/SelectMenu.css'

import backgroundColorList from './backgroundColors.json'
import actionColorList from './actionColors.json'

import Page from '../../components/page/Page'

import './style.css'

const contrastColor = (color) => (tinycolor(color).getBrightness() > 128) ? 'black' : 'white'

const MenuItem = ({ index, option, name, value, selected, currentValue, handleChange }) => {
  return (
    <button
      id={value}
      className={'menu-item' + (selected ? ' selected' : '')}
      title={option.title}
      disabled={option.disabled}
      onClick={handleChange}
      style={{ backgroundColor: option, color: contrastColor(option) }}
    >
      {name + (option.startsWith('#') ? '' : ' (' + tinycolor(option).toHexString() + ')')}
    </button>
  )
}

const ColorPicker = ({ label, propertyName, colorList, properties, setProperty }) => (
  <div className='color-picker'>
    <label className='large'>{label || propertyName}:</label>
    <SelectMenu
      className='large'
      options={colorList}
      value={properties[propertyName]}
      onChange={value => setProperty(propertyName, value)}
      customChild={MenuItem}
    />
  </div>
)

const ColorPage = () => {
  const [properties, setProperties] = useState({
    backgroundColor: getSessionValue('backgroundColor', 'white'),
    actionColor: getSessionValue('actionColor', 'darkturquoise')
  })

  const setProperty = (propertyName, value) => {
    setProperties({ ...properties, [propertyName]: value })
    setSessionValue(propertyName, value, { updateStored: true, updatePath: true })
  }

  return (
    <Page
      style={{ backgroundColor: properties.backgroundColor }}
    >
      <div className='center-column'>
        <button
          type='button'
          className='large example'
          style={{ backgroundColor: properties.actionColor, color: contrastColor(properties.actionColor) }}
        >
          Example Button
        </button>

        <div className='center-row'>
          <ColorPicker
            label='Background'
            propertyName='backgroundColor'
            colorList={backgroundColorList}
            properties={properties}
            setProperty={setProperty}
          />

          <ColorPicker
            label='Buttons'
            propertyName='actionColor'
            colorList={actionColorList}
            properties={properties}
            setProperty={setProperty}
          />
        </div>
      </div>
    </Page>
  )
}
export default ColorPage
