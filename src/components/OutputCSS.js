import React, { useRef } from 'react'
import styled from 'styled-components'

import generateCSS from '../lib/generateCSS'

export default ({ profile }) => {
  const outputElement = useRef(null)
  const doSelectAll = () => {
    outputElement.current.select()
  }

  return (
    <OutputTextBox
      ref={outputElement}
      onClick={doSelectAll}
      readOnly
      value={generateCSS(profile, 'body')}
    />
  )
}

const OutputTextBox = styled.textarea`
  display: block;
  width: 20em;
  min-height: 30em;
  padding: 1em;
  margin: auto;
  margin-top: 1em;
  border: none;
  outline: none;
  background-color: #555555;
  color: #F5F5F5;
  font-family: source-code-pro, Menlo, Monaco, Consolas, monospace;
  font-size: 0.9em;

  &:hover {
    background-color: #666666;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`
