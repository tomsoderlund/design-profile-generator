import tinycolor from 'tinycolor2'

import buttonStyleProperties from './buttonStyleProperties.json'
import buttonStyleSections from './buttonStyleSections.json'
import inputStyleProperties from './inputStyleProperties.json'
import inputStyleSections from './inputStyleSections.json'
import useStyles from './useStyles'

import Page from '../../components/page/Page'
import ElementDesigner from './ElementDesigner'

const ShapePage = () => {
  // Button
  const [buttonValues, handleButtonValueChange, setButtonTheme] = useStyles(buttonStyleProperties)

  const buttonStyle = {
    fontSize: buttonValues.textSize,

    padding: buttonValues.padding,

    ...(buttonValues.cornersRoundness !== '0em' && { borderRadius: buttonValues.cornersRoundness }),

    ...((buttonValues.shadowIntensity > 0 || buttonValues.reflectionIntensity > 0) && {
      boxShadow: [
        ...(buttonValues.shadowIntensity > 0 ? [`0 ${buttonValues.shadowY} ${buttonValues.shadowBlur} ${buttonValues.shadowSize} rgba(0, 0, 0, ${buttonValues.shadowIntensity})`] : []),
        ...(buttonValues.reflectionIntensity > 0 ? [`inset 0 ${buttonValues.reflectionY} ${buttonValues.reflectionBlur} ${buttonValues.reflectionSize} rgba(255,255,255, ${buttonValues.reflectionIntensity})`] : [])
      ].join(', ')
    }),

    ...(buttonValues.borderAll !== '0em' && { border: `${buttonValues.borderAll} solid ${buttonValues.borderColor}` }),
    ...(buttonValues.borderBottom !== '0em' && { borderBottom: `${buttonValues.borderBottom} solid ${buttonValues.borderBottomColor}` }),

    background: [
      ...(buttonValues.bevelIntensity > 0 ? [`linear-gradient(180deg, rgba(255,255,255, ${buttonValues.bevelIntensity}) 0%, rgba(255,255,255, 0) ${buttonValues.bevelY})`] : []),
      buttonValues.colorsBackground
    ].join(', '),

    color: `rgba(${buttonValues.textContrast > 0 ? '0,0,0' : '255,255,255'}, ${Math.abs(buttonValues.textContrast)})`
  }

  // Input field
  const [inputValues, handleInputValueChange, setInputTheme] = useStyles(inputStyleProperties)

  const inputStyle = {
    fontSize: inputValues.textSize,

    padding: inputValues.padding,

    ...(inputValues.cornersRoundness !== '0em' && { borderRadius: inputValues.cornersRoundness }),

    ...((inputValues.shadowIntensity > 0 || inputValues.innerShadowIntensity > 0) && {
      boxShadow: [
        ...(inputValues.shadowIntensity > 0 ? [`0 ${inputValues.shadowY} ${inputValues.shadowBlur} ${inputValues.shadowSize} rgba(0, 0, 0, ${inputValues.shadowIntensity})`] : []),
        ...(inputValues.innerShadowIntensity > 0 ? [`inset ${inputValues.innerShadowX} ${inputValues.innerShadowY} ${inputValues.innerShadowBlur} ${inputValues.innerShadowSize} rgba(0,0,0, ${inputValues.innerShadowIntensity})`] : [])
      ].join(', ')
    }),

    ...(inputValues.borderAll !== '0em' && { border: `${inputValues.borderAll} solid ${inputValues.borderColor}` }),
    ...(inputValues.borderBottom !== '0em' && { borderBottom: `${inputValues.borderBottom} solid ${inputValues.borderBottomColor}` }),

    background: [
      ...(inputValues.bevelIntensity > 0 ? [`linear-gradient(180deg, rgba(0,0,0, ${inputValues.bevelIntensity}) 0%, rgba(255,255,255, 0) ${inputValues.bevelY})`] : []),
      inputValues.colorsBackground
    ].join(', '),

    color: 'black'
  }

  return (
    <Page>
      <div className='center-page'>
        <ElementDesigner
          style={buttonStyle}
          inputs={buttonValues}
          styleSections={buttonStyleSections}
          onChange={handleButtonValueChange}
          onSetTheme={setButtonTheme}
        >
          <button style={buttonStyle}>Button</button>
        </ElementDesigner>

        <ElementDesigner
          style={inputStyle}
          inputs={inputValues}
          styleSections={inputStyleSections}
          onChange={handleInputValueChange}
          onSetTheme={setInputTheme}
        >
          <input style={inputStyle} type='text' placeholder='Write here' />
        </ElementDesigner>
      </div>
    </Page>
  )
}
export default ShapePage
