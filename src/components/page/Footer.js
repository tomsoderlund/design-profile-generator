import React from 'react'

const Footer = () => {
  return (
    <footer
      className='color-header-bg color-background-fg'
    >
      {/*
      <Link href='/about'><a>About & Docs</a></Link>
      {' | '}
      <Link href='/projects'><a>Log in</a></Link>
      {' | '}
   */}
      This is an early access product from <a href='http://www.tomorroworld.com' target='_blank' rel='noopener noreferrer'>Tomorroworld</a>
      {' | '}
      <a href='mailto:contact+startupguide@tomorroworld.com' target='_blank' rel='noopener noreferrer'>Contact</a>
    </footer>
  )
}
export default Footer
