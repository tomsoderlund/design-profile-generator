import { getSessionValue } from '../../lib/simpleSessionClient'

import Page from '../../components/page/Page'

const FontPage = () => {
  return (
    <Page
      title='Font'
      style={{ backgroundColor: getSessionValue('backgroundColor') }}
    >
      Coming soon
    </Page>
  )
}
export default FontPage
