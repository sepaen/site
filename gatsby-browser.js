/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// inject global css on first load
exports.onInitialClientRender = () => {
  require('./src/global-style')
}

