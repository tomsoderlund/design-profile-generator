import React from 'react'
import styled from 'styled-components'

import generateCSS from '../lib/generateCSS'

export default ({ profile }) => (
  <PreviewBox {...profile} className='body'>
    <h1>This is a headline</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nunc. In ante metus, gravida vel, bibendum et, mollis vitae, ipsum. Sed leo nibh, pulvinar dignissim, pretium eget, mattis id, erat.</p>
  </PreviewBox>
)

const PreviewBox = styled.div`
  display: block;
  width: 20em;
  min-height: 10em;
  padding: 1em 2em 3em;
  margin: auto;
  margin-top: 1em;
  text-align: left;

  ${profile => generateCSS(profile, '&')}
`
