import React from 'react'
import Helmet from 'react-helmet'

import readableColor from '../utils/readable-color'
import Navbar from './navbar'
import Footer from './footer'
import Box from '../system/box'
import Text from '../system/text'

const LayoutBox = Box.extend({
  transition: 'background-color ease-in-out 0.5s',

  $children: p => ({
    [`${Text}, span, p, a`]: {
      color: readableColor(p),
      transition: 'color ease-in-out 0.3s'
    },

    'svg *': {
      fill: readableColor(p),
      stroke: readableColor(p)
    }
  })
})

const Layout = ({ title, bg = 'white', children, ...props }) => (
  <LayoutBox {...props} bg={bg}>
    <Helmet title={title} />
    <Navbar title={title} bg={bg} />
    {children}
    <Footer title={title} />
  </LayoutBox>
)

export default Layout
