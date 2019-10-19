import React from 'react'
import styled from 'styled-components'

const HamburgerSVG = ({ color }) => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    x='0px'
    y='0px'
    width='1em'
    height='100%'
    viewBox='0 0 512 512'
    fill={color}
    xmlSpace='preserve'
  >
    <rect y='0' width='512' height='102.4' />
    <rect y='204.8' width='512' height='102.4' />
    <rect y='409.6' width='512' height='102.4' />
  </svg>
)

export default ({ profile }) => {
  return (
    <HamburgerWrapper>
      <HamburgerSVG color={profile.backgroundColor} />
    </HamburgerWrapper>
  )
}

const HamburgerWrapper = styled.div`
  float: left;
  position: absolute;
`
