import React, { useCallback } from 'react'
import { getSessionValue, setSessionValue } from 'simple-browser-session'

import packageJson from '../../package.json'
import './App.css'

import useProfile from '../lib/useProfile'

import Inputs from './Input/Inputs'
import Preview from './Preview/Preview'
import OutputCSS from './Output/OutputCSS'
import SocialSharing from './SocialSharing'

function App () {
  const savedProfile = getSessionValue('profile', {}, { useHash: false })
  const [profile, setProfile] = useProfile(savedProfile)

  const setProfileAndSession = useCallback(profile => {
    setSessionValue('profile', profile, { updateQuery: true, useHash: false })
    setProfile(profile)
  }, [setProfile])

  return (
    <main className='App'>
      <SocialSharing />
      <h1>Design Profile Generator v{packageJson.version}</h1>
      <div className='Panels'>
        <Inputs profile={profile} setProfile={setProfileAndSession} />
        <Preview profile={profile} setProfile={setProfileAndSession} />
        <OutputCSS profile={profile} />
      </div>
      <p>
        Made by <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/tomsoderlund'>@tomsoderlund</a>. Get the <a target='_blank' rel='noopener noreferrer' href='https://github.com/tomsoderlund/design-profile-generator'>source code on GitHub</a>.
      </p>
    </main>
  )
}

export default App