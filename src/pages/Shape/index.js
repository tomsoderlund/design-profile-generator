import tinycolor from 'tinycolor2'

import defaultButtonStyleProperties from './defaultButtonStyleProperties.json'
import defaultInputStyleProperties from './defaultInputStyleProperties.json'
// import buttonStyleSections from './buttonStyleSections.json'
import useStyles from './useStyles'

import Page from '../../components/page/Page'
import ElementDesigner from './ElementDesigner'

const ShapePage = () => {
  // Button
  const [buttonValues, handleButtonValueChange] = useStyles(defaultButtonStyleProperties)

  const buttonStyle = {
    ...(buttonValues.cornersRadius !== '0em' && { borderRadius: buttonValues.cornersRadius }),

    ...((buttonValues.shadowIntensity > 0 || buttonValues.reflectionIntensity > 0) && {
      boxShadow: [
        ...(buttonValues.shadowIntensity > 0 ? [`0 ${buttonValues.shadowY} ${buttonValues.shadowBlur} ${buttonValues.shadowSize} rgba(0, 0, 0, ${buttonValues.shadowIntensity})`] : []),
        ...(buttonValues.reflectionIntensity > 0 ? [`inset 0 ${buttonValues.reflectionY} ${buttonValues.reflectionBlur} ${buttonValues.reflectionSize} rgba(255,255,255, ${buttonValues.reflectionIntensity})`] : [])
      ].join(', ')
    }),

    ...(buttonValues.border !== '0em' && { border: `${buttonValues.border} solid ${buttonValues.colorsBorder}` }),
    ...(buttonValues.borderBottom !== '0em' && { borderBottom: `${buttonValues.borderBottom} solid ${buttonValues.colorsBorderBottom}` }),

    background: [
      ...(buttonValues.roundnessIntensity > 0 ? [`linear-gradient(180deg, rgba(255,255,255, ${buttonValues.roundnessIntensity}) 0%, rgba(255,255,255, 0) ${buttonValues.roundnessY})`] : []),
      buttonValues.colorsBackground
    ].join(', '),

    color: tinycolor(buttonValues.colorsBackground).getBrightness() > 128 ? 'black' : 'white'
  }

  // Input field
  const [inputValues, handleInputValueChange] = useStyles(defaultInputStyleProperties)

  const inputStyle = {
    ...(inputValues.cornersRadius !== '0em' && { borderRadius: inputValues.cornersRadius }),

    ...((inputValues.shadowIntensity > 0 || inputValues.innerShadowIntensity > 0) && {
      boxShadow: [
        ...(inputValues.shadowIntensity > 0 ? [`0 ${inputValues.shadowY} ${inputValues.shadowBlur} ${inputValues.shadowSize} rgba(0, 0, 0, ${inputValues.shadowIntensity})`] : []),
        ...(inputValues.innerShadowIntensity > 0 ? [`inset ${inputValues.innerShadowX} ${inputValues.innerShadowY} ${inputValues.innerShadowBlur} ${inputValues.innerShadowSize} rgba(0,0,0, ${inputValues.innerShadowIntensity})`] : [])
      ].join(', ')
    }),

    ...(inputValues.border !== '0em' && { border: `${inputValues.border} solid ${inputValues.colorsBorder}` }),
    ...(inputValues.borderBottom !== '0em' && { borderBottom: `${inputValues.borderBottom} solid ${inputValues.colorsBorderBottom}` }),

    background: [
      ...(inputValues.roundnessIntensity > 0 ? [`linear-gradient(180deg, rgba(0,0,0, ${inputValues.roundnessIntensity}) 0%, rgba(255,255,255, 0) ${inputValues.roundnessY})`] : []),
      inputValues.colorsBackground
    ].join(', '),

    color: tinycolor(inputValues.colorsBackground).getBrightness() > 128 ? 'black' : 'white'
  }

  return (
    <Page>
      <div className='center-row'>
        <ElementDesigner
          style={buttonStyle}
          inputs={buttonValues}
          onChange={handleButtonValueChange}
        >
          <button style={buttonStyle}>Button</button>
        </ElementDesigner>

        <ElementDesigner
          style={inputStyle}
          inputs={inputValues}
          onChange={handleInputValueChange}
        >
          <input style={inputStyle} type='text' placeholder='Write here' />
        </ElementDesigner>
      </div>
    </Page>
  )
}
export default ShapePage
