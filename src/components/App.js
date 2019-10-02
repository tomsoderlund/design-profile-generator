import React from 'react';
import './App.css';

import Inputs from './Inputs'
import Preview from './Preview'

function App() {
  const [profile, setProfile] = React.useState({
    backgroundColor: '#DDDDDD',
    textColor: '#555555'
  })
  return (
    <main className='App'>
      <h1>Design Profile Generator</h1>
      <div>
        <Inputs profile={profile} setProfile={setProfile} />
        <Preview profile={profile} />
      </div>
    </main>
  );
}

export default App;
