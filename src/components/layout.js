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
    {children}
    <Footer title={title} />
  </>
)

export default Layout
