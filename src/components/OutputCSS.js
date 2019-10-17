import React from 'react'
import styled from 'styled-components'

import generateCSS from '../lib/generateCSS'

export default ({ profile }) => (
  <OutputTextBox
    readOnly
    value={generateCSS(profile, 'body')}
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
  font-family: source-code-pro, Menlo, Monaco, Consolas, monospace;
  font-size: 0.9em;

  &:hover {
    background-color: #666666;
  }
`

/*

  font-family: ${props => props.theme.fontName};
  color: ${weldTheme.blue};

*/
