import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Logo from '../components/logo'
import Cell from '../system/cell'

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
    <Cell gridColumn="1/-1" justifyContent="center" alignItems="center">
      <Logo width={500} height={155} />
    </Cell>
  </Layout>
)

export default IndexPage
