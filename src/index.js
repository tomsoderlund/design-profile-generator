import { Router } from 'preact-router'

import Start from './pages/Start'
import Color from './pages/Color'
import Font from './pages/Font'
import Shape from './pages/Shape'

const App = () => {
  return (
    <Router>
      <Start path='/' />
      <Color path='/color' />
      <Font path='/font' />
      <Shape path='/shape' />
    </Router>
  )
}
export default App
