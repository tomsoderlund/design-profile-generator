import { useState, useEffect } from 'preact/hooks'
import { Router, route } from 'preact-router'
import { TabMenu } from 'react-zeroconfig-components'
import '../../../node_modules/react-zeroconfig-components/dist/TabMenu.css'

import { config } from '../../../config/config'

const menuOptions = [
  'Color',
  'Type',
  'Shape'
]

const titleCase = str => str.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())

export default ({ title = config.appName, children }) => {
  const [currentMenu, setCurrentMenu] = useState()

  const navigateTo = (menuOption) => {
    route(`/${menuOption.toLowerCase()}`)
  }

  useEffect(() => {
    setCurrentMenu(titleCase(window.location.pathname.slice(1)))
  }, [window.location.pathname])

  return (
    <header
      className='header color-header-bg color-background-fg'
    >
      <TabMenu
        options={menuOptions}
        value={currentMenu}
        onChange={option => navigateTo(option)}
      />
    </header>
  )
}
