import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './navbar'
import Footer from './footer'
import Flex from '../system/flex'
import Text from '../system/text'
import styled from 'styled-components'
import readableColor from 'polished/lib/color/readableColor'

const LayoutFlex = styled(Flex)`
  ${Text}, span, p, a {
    color: ${p => readableColor(p.bg)};
    transition: color ease-in-out 0.3s;
  }
`

const Layout = ({ title, bg = 'white', children }) => (
  <LayoutFlex bg={bg}>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Navbar title={title} />
    {children}
    <Footer title={title} />
  </LayoutFlex>
)

export default Layout
