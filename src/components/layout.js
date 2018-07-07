import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './navbar'
import Footer from './footer'
import Grid from '../system/grid'

const Layout = ({ title, children }) => (
  <>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Navbar title={title} />

    <Grid
      flex={1}
      gridTemplateColumns="repeat(6, 1fr)"
      children={children}
    />

    <Footer title={title} />
  </>
)

export default Layout
