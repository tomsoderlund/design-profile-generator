import React from 'react'
import styled from 'styled-components'

export default ({ profile }) => (
  <OutputTextBox
    readOnly
    value={`body {
  background-color: ${profile.backgroundColor};
  color: ${profile.textColor};
  }
  `}
  />
)

const OutputTextBox = styled.textarea`
  display: block;
  width: 20em;
  height: 10em;
  padding: 1em;
  margin: auto;
  margin-top: 1em;
`

/*

  font-family: ${props => props.theme.fontName};
  color: ${weldTheme.blue};

*/
