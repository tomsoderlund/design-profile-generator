const manifest = require('../manifest.json')

const appSlug = 'design-profile-generator'
const process = { env: { } }
const serverPort = process.env.PORT || 3111

const completeConfig = {

  default: {
    serverPort,
    appSlug,
    appUrl: process.env.APP_URL || 'https://www.amazingstartup.guide/',
    appName: manifest.name,
    appTagline: manifest.tagline,
    appDescription: manifest.description,
    features: [
      {
        name: 'Validate your business ideas',
        description: 'Design your value proposition with the Napkin Business Canvas.'
      },
      {
        name: 'Todo list for your launch',
        description: 'A guide for launching your product or service.'
      },
      {
        name: 'Tools',
        description: 'Find your product name, branding, design, etc.'
      }
    ],
    locale: 'en_US',
    googleAnalyticsId: false,
    googleSiteVerification: false,
    thumbnailUrl: 'https://screens.tomorroworld.com/?width=1280&height=823&dpr={dpr}&time=networkidle0&url=',
    leadService: `https://login-as-a-service.now.sh/api/${appSlug}/lead`,
    social: {}
  },

  development: {
    appUrl: `http://localhost:${serverPort}/`,
    googleAnalyticsId: null
  },

  production: {
  }

}

// Public API
module.exports = {
  config: { ...completeConfig.default, ...completeConfig[process.env.NODE_ENV] },
  completeConfig
}
