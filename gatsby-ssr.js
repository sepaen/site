const React = require('react')
const { styleSheetToString } = require('systyle')

exports.onRenderBody = ({ setHeadComponents }) => {
  const style = <style children={styleSheetToString()} />
  setHeadComponents([style])
}
