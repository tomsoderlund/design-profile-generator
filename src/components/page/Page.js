import PageHead from './PageHead'
import Header from './Header'
import Footer from './Footer'

import '../../../node_modules/niceandsimple-css/niceandsimple.css'
import '../../style.css'

function Page ({ title, children, className, style, showHeader = true }) {
  return (
    <>
      <PageHead title={title} />

      {showHeader && (
        <Header title={title} />
      )}

      <main
        className='has-header'
        style={style}
      >
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Page
