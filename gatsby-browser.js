// inject global css on first load
exports.onInitialClientRender = () => {
  require('./src/global-style')

  const div = document.createElement('div')
  div.id = 'overlay'
  document.body.appendChild(div)
}
