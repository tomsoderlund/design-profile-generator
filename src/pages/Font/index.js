import { getSessionValue } from 'simple-browser-session'

import Page from '../../components/page/Page'

const FontPage = () => {
  return (
    <Page
      style={{ backgroundColor: getSessionValue('backgroundColor') }}
    >
      Coming soon
    </Page>
  )
}
export default FontPage
