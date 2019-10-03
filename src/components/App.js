import React from 'react'
import './App.css'

import Inputs from './Inputs'
import Preview from './Preview'
import OutputCSS from './OutputCSS'

function App () {
  const [profile, setProfile] = React.useState({
    backgroundColor: '#FFFFFF',
    textColor: '#555555',
    textFont: 'Open Sans',
    textSize: '14px'
  })
  return (
    <main className='App'>
      <h1>Design Profile Generator</h1>
      <div className='Panels'>
        <Inputs profile={profile} setProfile={setProfile} />
        <Preview profile={profile} />
        <OutputCSS profile={profile} />
      </div>
    </main>
  )
}

export default App
