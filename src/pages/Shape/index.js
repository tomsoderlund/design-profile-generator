import tinycolor from 'tinycolor2'

import defaultButtonStyleProperties from './defaultButtonStyleProperties.json'
// import buttonStyleSections from './buttonStyleSections.json'
import useStyles from './useStyles'

import Page from '../components/page/Page'
import ElementDesigner from './ElementDesigner'

const ShapePage = () => {
  // Button
  const [buttonValues, handleButtonValueChange] = useStyles(defaultButtonStyleProperties)

  const buttonStyle = {
    borderRadius: buttonValues.cornersRadius,
    boxShadow: [
      ...(buttonValues.shadowIntensity > 0 ? [`0 ${buttonValues.shadowY} ${buttonValues.shadowBlur} ${buttonValues.shadowSize} rgba(0, 0, 0, ${buttonValues.shadowIntensity})`] : []),
      ...(buttonValues.reflectionIntensity > 0 ? [`inset 0 ${buttonValues.reflectionY} ${buttonValues.reflectionBlur} ${buttonValues.reflectionSize} rgba(255, 255, 255, ${buttonValues.reflectionIntensity})`] : [])
    ].join(', '),
    background: [
      ...(buttonValues.roundnessIntensity > 0 ? [`linear-gradient(180deg, rgba(255,255,255, ${buttonValues.roundnessIntensity}) 0%, rgba(255,255,255, 0) ${buttonValues.roundnessY})`] : []),
      buttonValues.colorsBackground
    ].join(', '),
    color: tinycolor(buttonValues.colorsBackground).getBrightness() > 128 ? 'black' : 'white'
  }

  return (
    <Page>
      <div className='center-row'>
        <ElementDesigner
          buttonStyle={buttonStyle}
          inputs={buttonValues}
          onChange={handleButtonValueChange}
        >
          <button style={buttonStyle}>Button</button>
        </ElementDesigner>

        <ElementDesigner
          buttonStyle={buttonStyle}
          inputs={buttonValues}
          onChange={handleButtonValueChange}
        >
          <button style={buttonStyle}>Button</button>
        </ElementDesigner>
      </div>
    </Page>
  )
}
export default ShapePage
