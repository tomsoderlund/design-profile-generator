import { useState } from 'preact/hooks'
import tinycolor from 'tinycolor2'
import { getSessionValue, setSessionValue } from 'simple-browser-session'
import { SelectMenu } from 'react-zeroconfig-components'
import '../../../node_modules/react-zeroconfig-components/dist/SelectMenu.css'

import Page from '../../components/page/Page'

import './style.css'

export const backgroundColorList = ['white', 'whitesmoke', 'dimgray', 'black', '#fffaf6', '#f6f6f9']
export const actionColorList = [
  'slategray',
  'indianred',
  'salmon',
  'crimson',
  'hotpink',
  'deeppink',
  'mediumvioletred',
  'tomato',
  'darkorange',
  'gold',
  'lightyellow',
  'plum',
  'violet',
  'mediumpurple',
  'blueviolet',
  'indigo',
  'slateblue',
  'darkslateblue',
  'greenyellow',
  'lime',
  'limegreen',
  'palegreen',
  'springgreen',
  'teal',
  'cyan',
  'turquoise',
  'darkturquoise',
  'steelblue',
  'skyblue',
  'deepskyblue',
  'dodgerblue',
  'chocolate'
]

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
          <SelectMenu
            className='large'
            options={backgroundColorList}
            value={properties.backgroundColor}
            onChange={value => setProperty('backgroundColor', value)}
            customChild={MenuItem}
          />

          <SelectMenu
            className='large'
            options={actionColorList}
            value={properties.actionColor}
            onChange={value => setProperty('actionColor', value)}
            customChild={MenuItem}
          />
        </div>
      </div>
    </Page>
  )
}
export default ColorPage
