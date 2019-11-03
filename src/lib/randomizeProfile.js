import tinycolor from 'tinycolor2'
import namedColors from './namedColors.json'

// import googleFonts from '../config/googleFonts'
import selectedFonts from '../config/selectedFonts'

const getRandomNumber = (min, max) => Math.round(min + Math.random() * (max - min))
const withProbability = prob => Math.random() < prob
const getRandomFromArray = array => array[getRandomNumber(0, array.length - 1)]
const getRandomIndexFromWeightedArray = weightedArray => {
  const randomNr = Math.random()
  let total = 0
  for (var i = 0; i < weightedArray.length; i++) {
    total += weightedArray[i]
    if (total > randomNr) return i
  }
}
const getRandomFromWeightedArray = (array, weightedArray) => array[getRandomIndexFromWeightedArray(weightedArray)]

export default () => {
  const chanceOfWhiteBackground = 0.5
  // const lightColors = namedColors.filter(color => tinycolor(color.hexValue).isLight())
  const lightColors = namedColors.filter(color => color.hslValues[2] >= 0.9)
  const backgroundWeights = Array(lightColors.length + 1).fill((1 - chanceOfWhiteBackground) / lightColors.length)
  backgroundWeights[0] = chanceOfWhiteBackground

  const strongColors = namedColors.filter(color => color.hslValues[1] >= 0.7 && color.hslValues[2] < 0.6)

  const backgroundColor = getRandomFromWeightedArray([{ name: 'white' }, ...lightColors], backgroundWeights).name
  const actionColor = getRandomFromArray(strongColors).name
  const textColor = getRandomFromArray(['#555555', 'black'])
  const headerColor = withProbability(0.5)
    ? tinycolor(actionColor).complement().toHexString()
    : undefined
  // const informationColor = '#fffa46'
  // const warningColor = '#fb1f52'
  const textFont = getRandomFromArray(selectedFonts)
  const textSize = getRandomFromArray(['12px', '14px', '16px'])
  const textWeight = getRandomFromArray(['normal', '300'])
  const headlineFont = withProbability(0.5)
    ? getRandomFromArray(selectedFonts)
    : undefined
  const headlineWeight = getRandomFromArray(['normal', '600', 'bold'])

  return {
    backgroundColor,
    actionColor,
    textColor,
    headerColor,
    // informationColor,
    // warningColor,
    textFont,
    textSize,
    textWeight,
    headlineFont,
    headlineWeight
  }
}
