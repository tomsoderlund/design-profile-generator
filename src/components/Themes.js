import React, { useCallback } from 'react'
import styled from 'styled-components'

import GoogleFontLink from './GoogleFontLink'
import themes from '../config/themes.json'

export default ({ setProfile }) => {
  const onSelectTheme = useCallback(index => {
    setProfile(Object.assign({}, themes[0].profile, themes[index].profile))
  }, [setProfile])

  return (
    <div>
      <h2>Themes</h2>
      <div>
        {themes.map((theme, index) => (
          <ThemeButton key={theme.name} title={theme.description} onClick={event => onSelectTheme(index)} {...theme.profile}>
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
  padding: 0;
  border-radius: 0.2em;
  border: none;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  outline: none;
  font-size: 1em;
  width: 5em;
  height: 5em;
  border: 2px solid transparent;
  overflow: hidden;
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
