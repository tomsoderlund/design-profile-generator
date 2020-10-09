import { useState } from 'react'
import tinycolor from 'tinycolor2'

import defaultButtonStyleProperties from './defaultButtonStyleProperties.json'
// import buttonStyleSections from './buttonStyleSections.json'

import Page from '../components/page/Page'
import ElementDesigner from './ElementDesigner'

const ShapePage = () => {
  const [buttonInputs, setButtonInputs] = useState(defaultButtonStyleProperties)

  const handleButtonStyleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    setButtonInputs({ ...buttonInputs, [target.name]: value })
  }

  const buttonStyle = {
    borderRadius: buttonInputs.cornersRadius,
    boxShadow: [
      ...(buttonInputs.shadowIntensity > 0 ? [`0 ${buttonInputs.shadowY} ${buttonInputs.shadowBlur} ${buttonInputs.shadowSize} rgba(0, 0, 0, ${buttonInputs.shadowIntensity})`] : []),
      ...(buttonInputs.reflectionIntensity > 0 ? [`inset 0 ${buttonInputs.reflectionY} ${buttonInputs.reflectionBlur} ${buttonInputs.reflectionSize} rgba(255, 255, 255, ${buttonInputs.reflectionIntensity})`] : [])
    ].join(', '),
    background: [
      ...(buttonInputs.roundnessIntensity > 0 ? [`linear-gradient(180deg, rgba(255,255,255, ${buttonInputs.roundnessIntensity}) 0%, rgba(255,255,255, 0) ${buttonInputs.roundnessY})`] : []),
      buttonInputs.colorsBackground
    ].join(', '),
    color: tinycolor(buttonInputs.colorsBackground).getBrightness() > 128 ? 'black' : 'white'
  }

  return (
    <Page>
      <div className='center-row'>
        <ElementDesigner
          buttonStyle={buttonStyle}
          inputs={buttonInputs}
          onChange={handleButtonStyleChange}
        >
          <button style={buttonStyle}>Button</button>
        </ElementDesigner>

        <ElementDesigner
          buttonStyle={buttonStyle}
          inputs={buttonInputs}
          onChange={handleButtonStyleChange}
        >
          <button style={buttonStyle}>Button</button>
        </ElementDesigner>
      </div>
    </Page>
  )
}
export default ShapePage
