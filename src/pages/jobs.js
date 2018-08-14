import React from 'react'
import { graphql } from 'gatsby'

import extractSlug from '../utils/extract-slug'
import Layout from '../components/layout'
import Cell from '../system/cell'
import Content from '../components/content'
import Text from '../system/text'
import Flex from '../system/flex'

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

const JobPreview = ({ job, ...props }) => {
  const info = job.frontmatter

  return (
    <Cell
      {...props}
      flexDirection="column"
      gridColumn="2/6"
      borderBottom="1px solid white"
      mixBlendMode="difference"
      pb={5}
      px={2}
    >
      <Text children={info.title} alignSelf="center" fontSize="2em" mb={5} />
      <Flex>
        <Flex width={1 / 2} flexDirection="column" mr={3}>
          <Text children="Description of position" mb={4} />
          <Text children={info.description} />
        </Flex>
        <Flex width={1 / 4} flexDirection="column" mr={3}>
          <Text children="Requirements" mb={4} />
          <Text children={info.requirements} />
        </Flex>
        <Flex width={1 / 4} flexDirection="column">
          <Text children="How to apply" mb={4} />
          <Text children={info.howto} />
        </Flex>
      </Flex>
    </Cell>
  )
}

const JobsPage = ({ data }) => {
  const title = data.site.siteMetadata.title
  const jobs = data.allMarkdownRemark.edges

  return (
    <Layout title={title}>
      <Content height="auto" pt={6}>
        {jobs.length === 0 && (
          <Text children="Sorry, there are no vacancies opened at the moment." />
        )}

        {jobs.map(({ node }) => (
          <JobPreview key={extractSlug(node)} job={node} mb={5} />
        ))}
      </Content>
    </Layout>
  )
}

export default JobsPage
