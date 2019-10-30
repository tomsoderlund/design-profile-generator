import React, { useCallback } from 'react'
import { getSessionValue, setSessionValue } from 'simple-browser-session'

import packageJson from '../../package.json'
import './App.css'

import Inputs from './Inputs'
import Preview from './Preview'
import OutputCSS from './OutputCSS'
import useProfile from '../lib/useProfile'

function App () {
  const savedProfile = getSessionValue('profile', {}, { useHash: false })
  const [profile, setProfile] = useProfile(savedProfile)

  const setProfileAndSession = useCallback(profile => {
    setSessionValue('profile', profile, { updateQuery: true, useHash: false })
    setProfile(profile)
  }, [setProfile])

  return (
    <main className='App'>
      <h1>Design Profile Generator v{packageJson.version}</h1>
      <div className='Panels'>
        <Inputs profile={profile} setProfile={setProfileAndSession} />
        <Preview profile={profile} />
        <OutputCSS profile={profile} />
      </div>
      <p>
        Made by <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/tomsoderlund'>@tomsoderlund</a>. Get the <a target='_blank' href='https://github.com/tomsoderlund/design-profile-generator'>source code on GitHub</a>.
      </p>
    </main>
  )
}

export default App
