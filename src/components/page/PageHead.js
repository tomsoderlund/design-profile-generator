import Helmet from 'preact-helmet'

import { config } from '../../../config/config'

const PageHead = ({ title, appInTitle = true, description = config.appDescription }) => {
  const { appName, appTagline, appUrl, locale, thumbnailUrl } = config
  const pageTitle = title
    ? title + (appInTitle ? ` – ${appName}` : '')
    : `${appName} – ${appTagline}`

  const fonts = []

  const websiteUrl = `${appUrl}` // ${router.asPath.slice(1)}
  const pageThumbnailUrl = `${thumbnailUrl}${websiteUrl}`
  // const iconUrl = '/icon.png'

  return (
    <Helmet
      title={pageTitle}
      meta={[
        { name: 'description', content: description },
        { charSet: 'utf-8' },
        { httpEquiv: 'content-language', content: locale.split('_')[0] },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { property: 'og:site_name', content: appName },
        { property: 'og:title', content: pageTitle },
        { property: 'og:description', content: description },
        { property: 'og:locale', content: locale },
        { property: 'og:image', content: pageThumbnailUrl },
        { property: 'og:url', content: websiteUrl },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: appName }
      ]}
      link={fonts.map(fontString => ({ rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=${fontString.replace(' ', '+')}&display=swap` }))}
    />
  )
}
export default PageHead

/*
  <link rel='manifest' href='/manifest.json' />

  {cssFiles.map(cssFile => <link key={cssFile} rel='stylesheet' href={cssFile} />)}

  <link rel='shortcut icon' type='image/x-icon' href={iconUrl} />

  <link rel='apple-touch-icon' href={iconUrl} />
  {(manifest.display === 'standalone') ? <meta name='apple-mobile-web-app-capable' content='yes' /> : null}
  <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
  <meta name='apple-mobile-web-app-title' content={appName} />

  {googleSiteVerification ? <meta name='google-site-verification' content={googleSiteVerification} /> : null}
*/
