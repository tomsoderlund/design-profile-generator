import React, { useState } from 'react'
import styled from 'styled-components'

export default ({ children, editChildren }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <HoverElement onMouseEnter={event => setIsVisible(true)}>
      {children}
      <EditPanel onMouseLeave={event => setIsVisible(false)} className={!isVisible && 'hidden'}>
        {editChildren}
      </EditPanel>
    </HoverElement>
  )
}

const HoverElement = styled.span`
`

const EditPanel = styled.span`
  display: block;
  background-color: #f0f0f0;
  box-shadow: 0 2px 2px rgba(0,0,0, 0.2);
  border-radius: 0.5em;
  padding: 1em;
  position: absolute;
  z-index: 100;
  width: 12em;
  margin-top: -2.5em;
  margin-left: 2.5em;
  font-family: 'Source Sans Pro', sans-serif !important;
  font-size: 0.9rem;

  &.hidden {
    // display: none;
    pointer-events: none;
    opacity: 0;
  }

  h3 {
    font-family: 'Source Sans Pro', sans-serif;
  }
`
