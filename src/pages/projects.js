import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ScrollToHash from '../components/scroll-to-hash'
import ProjectPreview from '../components/project-preview'
import NextProject from '../components/next-project'

export const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } },
      sort: { fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            color
            images {
              publicURL
            }
          }
        }
      }
    }
  }
`

const ProjectsPage = ({ data, location }) => {
  const title = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout title={title}>
      <ScrollToHash location={location}>
        {projects.map(({ node }) => (
          <ProjectPreview
            key={node.frontmatter.slug}
            project={node}
          />
        ))}
      </ScrollToHash>

      <NextProject hash
        current={location.hash.slice(1)}
        projects={projects}
      />
    </Layout>
  )
}

export default ProjectsPage

