import React from 'react'
import Helmet from 'react-helmet'

import readableColor from '../utils/readable-color'
import Navbar from './navbar'
import Footer from './footer'
import Box from '../system/box'
import Text from '../system/text'

const LayoutBox = Box.with(({ bg, ...props }) => ({
  bg,
  ...props,

  transition: 'background-color ease-in-out 0.5s',

  [`${Text.toString()}, span, p, a`]: {
    color: readableColor(bg),
    transition: 'color ease-in-out 0.3s'
  },

  '& svg *': {
    fill: readableColor(bg),
    stroke: readableColor(bg)
  }
}))

const Layout = ({ title, bg = 'white', children, ...props }) => (
  <LayoutBox {...props} bg={bg}>
    <Helmet title={title} />
    <Navbar title={title} bg={bg} />
    {children}
    <Footer title={title} />
  </LayoutBox>
)

export default Layout
