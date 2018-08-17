import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/content'
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

    markdownRemark(frontmatter: { type: { eq: "about" } }) {
      html
    }
  }
`

const NEWSLETTER_EMAIL = ''

const AboutPage = ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <Content>
      <Cell gridColumn="2/6" flexDirection="column">
        <Markdown html={data.markdownRemark.html} mb={4} />

        <Text>
          Keep up to date by
          <Link to="#" children="subscribing to our newsletter" ml={1} />
        </Text>
      </Cell>
    </Content>
  </Layout>
)

export default AboutPage
