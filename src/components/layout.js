import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './navbar'
import Footer from './footer'
import Page from '../system/page'

const Layout = ({ title, children, ...props }) => (
  <Page {...props}>
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
  </Page>
)

export default Layout
