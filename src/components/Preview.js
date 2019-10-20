import React from 'react'
import styled from 'styled-components'

import generateCSS from '../lib/generateCSS'
import HamburgerMenu from './HamburgerMenu'

export default ({ profile }) => (
  <PreviewBox {...profile} className='body'>
    <nav>
      <HamburgerMenu profile={profile} />
      <span>Header</span>
    </nav>
    <main>
      <h1>This is a headline</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href='/' target='_blank'>Nam a nunc</a>. In ante metus, gravida vel, bibendum et, mollis vitae, ipsum. Sed leo nibh, pulvinar dignissim, pretium eget, mattis id, erat.</p>
      <p>
        <input type='text' placeholder='Input' />
      </p>
      <p>
        <button className='primary'>Primary</button>
        <button>Secondary</button>
      </p>
    </main>
  </PreviewBox>
)

const PreviewBox = styled.div`
  display: block;
  width: 20em;
  min-height: 10em;
  margin: auto;
  margin-top: 1em;
  text-align: left;

  @media only screen and (max-width: 480px) {
    width: 90%;
  }

  ${profile => generateCSS(profile, '&')}
`
