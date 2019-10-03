import React from 'react'
import styled from 'styled-components'

export default ({ profile }) => (
  <PreviewBox {...profile}>
    <h1>This is a headline</h1>
  This is some text body. This is some text body. This is some text body.
  </PreviewBox>
)

const PreviewBox = styled.div`
  display: block;
  width: 20em;
  height: 10em;
  padding: 1em;
  margin: auto;
  margin-top: 1em;

  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  font-family: ${props => props.textFont};

  h1, h2, h3 {
    font-family: ${props => props.headlineFont};
  }
`

/*

  font-family: ${props => props.theme.fontName};
  color: ${weldTheme.blue};

*/
