import React from 'react'
import styled from 'styled-components'

export default ({ profile }) => <PreviewBox {...profile} >
  This is a test
</PreviewBox>

const PreviewBox = styled.div`
  display: inline-block;
  width: 20em;
  height: 10em;

  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
`

/*

  font-family: ${props => props.theme.fontName};
  color: ${weldTheme.blue};

*/