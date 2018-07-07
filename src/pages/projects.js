import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ProjectPreview from '../components/project-preview'

export const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            images {
              publicURL
            }
          }
        }
      }
    }
  }
`

const ProjectsPage = ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <ProjectPreview project={data.allMarkdownRemark.edges[1].node} />
  </Layout>
)

export default ProjectsPage;
