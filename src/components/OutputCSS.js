import React from 'react'
import styled from 'styled-components'

export default ({ profile }) => (
  <OutputTextBox
    readOnly
    value={`body {
  background-color: ${profile.backgroundColor};
  color: ${profile.textColor};
  font-family: '${profile.textFont}', sans-serif;
  font-size: ${profile.textSize};
  font-weight: ${profile.textWeight};
}

h1, h2, h3 {
  line-height: 1.1em;
  color: ${profile.headlineColor};
  font-family: '${profile.headlineFont}', sans-serif;
  font-weight: ${profile.headlineWeight};
  ${profile.headlineItalic ? 'font-style: italic;' : ''}
  ${profile.headlineUppercase ? 'text-transform: uppercase;' : ''}
}`}
  />
)

const OutputTextBox = styled.textarea`
  display: block;
  width: 20em;
  min-height: 24em;
  padding: 1em;
  margin: auto;
  margin-top: 1em;
  border: none;
  background-color: #555555;
  color: #F5F5F5;

  &:hover {
    background-color: #666666;
  }
`

/*

  font-family: ${props => props.theme.fontName};
  color: ${weldTheme.blue};

*/
