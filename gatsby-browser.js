// inject global css on first load
exports.onInitialClientRender = () => {
  require('./src/global-style')
}
