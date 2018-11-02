import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './navbar'
import Footer from './footer'
import Flex from '../system/flex'
import Text from '../system/text'
import styled from 'styled-components'
import readableColor from 'polished/lib/color/readableColor'

const LayoutFlex = styled(Flex)`
  transition: background-color ease-in-out 0.5s;

  ${Text}, span, p, a {
    color: ${p => readableColor(p.bg)};
    transition: color ease-in-out 0.3s;
  }
`

const Layout = ({ title, bg = 'white', children, ...props }) => (
  <LayoutFlex {...props} bg={bg}>
    <Helmet title={title} />
    <Navbar title={title} bg={bg} />
    {children}
    <Footer title={title} />
  </LayoutFlex>
)

export default Layout
