import { useEffect } from 'preact/hooks'
import { route } from 'preact-router'

import Page from '../../components/page/Page'

const StartPage = () => {
  useEffect(() => {
    route('/color')
  }, [])

  return (
    <Page />
  )
}
export default StartPage
