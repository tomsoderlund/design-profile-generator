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
}

h1, h2, h3 {
  color: ${profile.headlineColor};
  font-family: '${profile.headlineFont}', sans-serif;
}`}
  />
)

const OutputTextBox = styled.textarea`
  display: block;
  width: 20em;
  min-height: 20em;
  padding: 1em;
  margin: auto;
  margin-top: 1em;
  border: none;
  background-color: #555555;
  color: #F5F5F5;

  &:focus {
    color: #00CED1;
  }
`

/*

  font-family: ${props => props.theme.fontName};
  color: ${weldTheme.blue};

*/
