import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Logo from '../components/logo'
import Flex from '../system/flex'

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
    <Flex flex={1} justify="center" align="center">
      <Logo width={500} height={155} />
    </Flex>
  </Layout>
)

export default IndexPage
