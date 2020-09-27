import { Router } from 'preact-router'

import Start from './pages/Start'
import Color from './pages/Color'
import Type from './pages/Type'
import Shape from './pages/Shape'

const App = () => {
  return (
    <Router>
      <Start path='/' />
      <Color path='/color' />
      <Type path='/type' />
      <Shape path='/shape' />
    </Router>
  )
}
export default App
