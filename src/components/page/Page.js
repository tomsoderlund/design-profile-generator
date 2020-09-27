import PageHead from './PageHead'
import Header from './Header'
import Footer from './Footer'

import '../../../node_modules/niceandsimple-css/niceandsimple.css'
import '../../style.css'

function Page ({ title, children, contentClassName, showHeader = true }) {
  return (
    <>
      <PageHead title={title} />

      {showHeader && (
        <Header title={title} />
      )}

      <main className='has-header'>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Page
