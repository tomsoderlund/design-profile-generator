import React from 'react'

import themes from '../config/themes.json'

export default () => React.useState(themes[0].profile)
