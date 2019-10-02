import React from 'react'

export default ({ profile, setProfile }) => {
  return <div >
    <label>
      Background:
      <input type='color' value={profile.backgroundColor} />
    </label>
    <label>
      Text:
      <input type='color' value={profile.textColor} />
    </label>
  </div>
}
