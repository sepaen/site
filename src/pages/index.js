import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Logo from '../components/logo'
import Content from '../components/content'
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
    <Content>
      <Cell gridColumn="2/6" justifyContent="center">
        <Logo width="100%" height="50%" />
      </Cell>
    </Content>
  </Layout>
)

export default IndexPage
