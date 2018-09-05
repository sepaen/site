import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import extractSlug from '../utils/extract-slug'
import Cell from '../system/cell'
import Text from '../system/text'
import Layout from '../components/layout'
import Content from '../components/content'
import JobPreview from '../components/job-preview'

export const query = graphql`
  query JobsQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "job" } } }
      sort: { fields: frontmatter___date }
    ) {
      edges {
        node {
          fileAbsolutePath

          frontmatter {
            title
            description
            requirements
            howto
          }
        }
      }
    }
  }
`

const JobsPage = ({ data }) => {
  const title = data.site.siteMetadata.title
  const jobs = get(data, 'allMarkdownRemark.edges')

  return (
    <Layout title={title}>
      <Content height="auto" minHeight="100vh" pt={6} bg="#b19964">
        {!jobs && (
          <Cell gridColumn="2/6" alignSelf="flex-start" mt={20}>
            <Text
              children="Sorry, there are no vacancies opened at the moment."
              fontSize={32}
            />
          </Cell>
        )}

        {jobs &&
          jobs.map(({ node }) => (
            <JobPreview key={extractSlug(node)} job={node} mb={5} />
          ))}
      </Content>
    </Layout>
  )
}

export default JobsPage
