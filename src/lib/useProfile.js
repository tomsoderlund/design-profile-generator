import React from 'react'

import themes from '../config/themes.json'

export default (profile) => React.useState(profile || themes[0].profile)
