import React from 'react'

import Layout from '../components/layout'

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <h1>Hi people</h1>
  </Layout>
)

export default IndexPage
