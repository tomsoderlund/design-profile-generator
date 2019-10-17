import React, { useCallback } from 'react'
import styled from 'styled-components'

import GoogleFontLink from './GoogleFontLink'

export const themes = [
  {
    name: 'Default',
    profile: {
      backgroundColor: '#FFFFFF',
      actionColor: 'dodgerblue',
      headerColor: '#555555',
      textColor: '#555555',
      textFont: 'Open Sans',
      textSize: '14px',
      textWeight: 'normal',
      headlineWeight: 'bold'
    }
  },
  {
    name: 'Donuts',
    profile: {
      backgroundColor: '#f6e8ce',
      actionColor: '#f11f30',
      textColor: '#242321',
      textFont: 'Nunito',
      headlineFont: 'Bungee',
      headlineColor: '#f11f30',
      headlineWeight: 'normal'
    }
  },
  {
    name: 'Fb',
    profile: {
      backgroundColor: '#ffffff',
      textColor: '#4b4f56',
      actionColor: '#4267b2',
      headerColor: '#4267b2',
      textFont: 'system-ui'
    }
  },
  {
    name: 'Economy',
    profile: {
      backgroundColor: '#ffffff',
      textColor: '#121212',
      actionColor: '#e3120a',
      headerColor: '#383e42',
      textFont: 'Georgia',
      headlineFont: 'Roboto',
      headlineWeight: 'normal'
    }
  }
]

export default ({ setProfile }) => {
  const onSelectTheme = useCallback(index => {
    setProfile(Object.assign({}, themes[0].profile, themes[index].profile))
  }, [setProfile])

  return (
    <div>
      <h2>Themes</h2>
      <div>
        {themes.map((theme, index) => (
          <ThemeButton key={theme.name} onClick={event => onSelectTheme(index)} {...theme.profile}>
            {theme.name}
            <GoogleFontLink family={theme.profile.headlineFont || theme.profile.textFont} />
          </ThemeButton>
        ))}
      </div>
    </div>
  )
}

const ThemeButton = styled.button`
  margin: 0 0.8em 0.8em 0;
  border-radius: 0.2em;
  border: none;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  outline: none;
  font-size: 1em;
  min-width: 5em;
  min-height: 5em;
  border: 2px solid transparent;
  background-color: ${profile => profile.actionColor};
  color: ${profile => profile.backgroundColor};
  font-family: ${profile => profile.headlineFont || profile.textFont};
  font-weight: ${profile => profile.headlineWeight};
  ${profile => profile.headlineItalic ? 'font-style: italic;' : ''}
  ${profile => profile.headlineUppercase ? 'text-transform: uppercase;' : ''}

  &:hover {
    border: 2px solid rgba(0,0,0, 0.4);
  }
`
