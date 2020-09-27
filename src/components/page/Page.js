import PageHead from './PageHead'
import Header from './Header'
import Footer from './Footer'

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
