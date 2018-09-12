import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import extractSlug from '../utils/extract-slug'
import Cell from '../system/cell'
import Text from '../system/text'
import Layout from '../components/layout'
import Content from '../components/content'
import JobPreview from '../components/job-preview'
import { gold } from '../system/colors'

export const query = graphql`
  query JobsQuery {
    site {
      siteMetadata {
        title
      }
    }

    jobs: allMarkdownRemark(
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

    nojobs: markdownRemark(frontmatter: { type: { eq: "nojobs" } }) {
      frontmatter {
        text
      }
    }
  }
`

const JobsPage = ({ data }) => {
  const title = data.site.siteMetadata.title
  const jobs = get(data, 'jobs.edges', [])
  const nojobs = data.nojobs.frontmatter.text

  return (
    <Layout title={title} bg={gold}>
      <Content>
        {jobs.length === 0 && (
          <Cell alignSelf="flex-start">
            <Text children={nojobs} fontSize={[24, 32]} />
          </Cell>
        )}

        {jobs.map(({ node }) => (
          <JobPreview key={extractSlug(node)} job={node} mb={5} />
        ))}
      </Content>
    </Layout>
  )
}

export default JobsPage
