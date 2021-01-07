// next.config.js
// const withSass = require('@zeit/next-sass')
const withPurgeCss = require('next-purgecss')

module.exports = withPurgeCss({
  purgeCssPaths: [
    'src/pages/**/*',
    'src/components/**/*'
  ],
  purgeCss: {
    whitelistPatterns: () => [/^slick/]
  }
})