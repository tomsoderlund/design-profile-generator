import React from 'react'
import styled from 'styled-components'

export default ({ profile }) => (
  <PreviewBox {...profile}>
    <h1>This is a headline</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nunc. In ante metus, gravida vel, bibendum et, mollis vitae, ipsum. Sed leo nibh, pulvinar dignissim, pretium eget, mattis id, erat.</p>
  </PreviewBox>
)

// const getCSS = (profile, fieldName, cssProp) => profile[fieldName] && profile[fieldName] !== ''
//   ? `${cssProp}: ${profile => profile[fieldName]};`
//   : ''

const PreviewBox = styled.div`
  display: block;
  width: 20em;
  min-height: 10em;
  padding: 1em 2em 3em;
  margin: auto;
  margin-top: 1em;
  text-align: left;

  background-color: ${profile => profile.backgroundColor};
  color: ${profile => profile.textColor};
  font-family: ${profile => profile.textFont};
  font-size: ${profile => profile.textSize};
  font-weight: ${profile => profile.textWeight};

  h1, h2, h3 {
    color: ${profile => profile.headlineColor};
    font-family: ${profile => profile.headlineFont};
    font-weight: ${profile => profile.headlineWeight};
    ${profile => profile.headlineItalic ? 'font-style: italic;' : ''}
    ${profile => profile.headlineUppercase ? 'text-transform: uppercase;' : ''}
  }
`
