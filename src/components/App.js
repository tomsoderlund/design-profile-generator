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
    textSize: '14px',
    textWeight: 'normal',
    headlineWeight: 'bold'
  })
  return (
    <main className='App'>
      <h1>Design Profile Generator</h1>
      <div className='Panels'>
        <Inputs profile={profile} setProfile={setProfile} />
        <Preview profile={profile} />
        <OutputCSS profile={profile} />
      </div>
      <p>
        Made by <a href='https://twitter.com/tomsoderlund'>@tomsoderlund</a>. Get the <a href='https://github.com/tomsoderlund/design-profile-generator'>source code on GitHub</a>.
      </p>
    </main>
  )
}

export default App
