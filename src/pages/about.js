import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Cell from '../system/cell'
import Markdown from '../system/markdown'
import Text from '../system/text'
import Link from '../system/link'

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(frontmatter: { slug: { eq: "about" } }) {
      html
    }
  }
`

const AboutPage = ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <Cell
      gridColumn="2/6"
      flexDirection="column"
      justifyContent="center"
      alignItems="stretch"
    >
      <Markdown dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} align="justify" />

      <Text>
        Keep up to date by
        <Link children="subscribing to our newsletter" ml={1} />
      </Text>
    </Cell>
  </Layout>
)

export default AboutPage;
