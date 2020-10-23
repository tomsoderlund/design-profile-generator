import { useState } from 'preact/hooks'
import tinycolor from 'tinycolor2'
import { getSessionValue, setSessionValue } from '../../lib/simpleSessionClient'
import { SelectMenu } from 'react-zeroconfig-components'
import '../../../node_modules/react-zeroconfig-components/dist/SelectMenu.css'

import backgroundColorList from './backgroundColors.json'
import actionColorList from './actionColors.json'

import { contrastColor } from '../../lib/helpers'

import Page from '../../components/page/Page'
import ThemeSelector from './ThemeSelector'

import './style.css'

const MenuItem = ({ index, option, name, value, selected, currentValue, handleChange }) => {
  return (
    <button
      id={value}
      className={'menu-item' + (selected ? ' selected' : '')}
      title={`Brightness: ${tinycolor(option).getBrightness()}`}
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
    <label className='large'>{label || propertyName}: </label>
    <SelectMenu
      className='large'
      options={colorList}
      value={properties[propertyName]}
      onChange={value => setProperty(propertyName, value)}
      customChild={MenuItem}
    />
  </div>
)

const ExampleButton = ({ properties }) => (
  <button
    type='button'
    className='large example'
    style={{ backgroundColor: properties.actionColor, color: contrastColor(properties.actionColor) }}
  >
    Example Button
  </button>
)

const ColorPage = () => {
  const [properties, setProperties] = useState({
    backgroundColor: getSessionValue('backgroundColor', 'white'),
    actionColor: getSessionValue('actionColor', 'rebeccapurple'),
    panelColor: getSessionValue('panelColor', '')
  })

  const setProperty = (propertyName, value) => {
    setProperties({ ...properties, [propertyName]: value })
    setSessionValue(propertyName, value, { updateStored: true, updatePath: true })
  }

  const setAllProperties = (propertiesObj) => {
    for (const propertyName in propertiesObj) {
      setProperty(propertyName, propertiesObj[propertyName])
    }
    setProperties(propertiesObj)
  }

  return (
    <Page
      title='Color'
      style={{ backgroundColor: properties.backgroundColor }}
    >
      <div className='center-column'>
        <div className='examples center-row'>
          <ExampleButton properties={properties} />
          {properties.panelColor !== '' && (
            <div
              className='panel example'
              style={{ backgroundColor: properties.panelColor, color: contrastColor(properties.panelColor) }}
            >
              <ExampleButton properties={properties} />
            </div>
          )}
        </div>

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

          <ColorPicker
            label='Panels'
            propertyName='panelColor'
            colorList={actionColorList}
            properties={properties}
            setProperty={setProperty}
          />
        </div>

        <ThemeSelector
          onChange={setAllProperties}
        />
      </div>
    </Page>
  )
}
export default ColorPage
