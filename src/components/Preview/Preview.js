import React from 'react'
import styled from 'styled-components'

import generateCSS from '../../lib/generateCSS'
import HamburgerMenu from './HamburgerMenu'
import HoverEditPanel from '../Input/HoverEditPanel'
import { CategoriesAndInputs, InputFieldList, headlinesProps, textProps, warningInfoColorProps, headerColor, actionColor } from '../Input/Inputs'

export default ({ profile, setProfile }) => (
  <PreviewBox {...profile} className='body'>
    <HoverEditPanel editChildren={<InputFieldList fields={[headerColor]} profile={profile} setProfile={setProfile} />}>
      <nav>
        <HamburgerMenu profile={profile} />
        <span>Header</span>
      </nav>
    </HoverEditPanel>
    <main>
      <HoverEditPanel editChildren={<CategoriesAndInputs categories={[headlinesProps]} profile={profile} setProfile={setProfile} />}>
        <h1>This is a headline</h1>
      </HoverEditPanel>
      <p>
        <HoverEditPanel editChildren={<CategoriesAndInputs categories={[textProps]} profile={profile} setProfile={setProfile} />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </HoverEditPanel>
        {' '}
        <a href='./'>Nam a nunc</a>.
        In ante metus, gravida vel, bibendum et, mollis vitae, ipsum.
        {' '}
        <HoverEditPanel editChildren={<CategoriesAndInputs categories={[warningInfoColorProps]} profile={profile} setProfile={setProfile} />}>
          <span className='color-warning-bg'>This is a warning</span>,
          but <span className='color-information-bg'>this is just information</span>.
        </HoverEditPanel>
      </p>
      <p>
        <input type='text' placeholder='Input' />
      </p>
      <p>
        <HoverEditPanel editChildren={<InputFieldList fields={[actionColor]} profile={profile} setProfile={setProfile} />}>
          <button className='primary'>Primary</button>
        </HoverEditPanel>
        <HoverEditPanel editChildren={<InputFieldList fields={[headerColor]} profile={profile} setProfile={setProfile} />}>
          <button>Secondary</button>
        </HoverEditPanel>
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
  // transition: all 0.5s;

  * {
    // transition: all 0.5s;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
  }

  ${profile => generateCSS(profile, '&')}
`
