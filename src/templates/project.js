import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ProjectDetails from '../components/project-details'
import NextProject from '../components/next-project'

export const query = graphql`
  query ProjectDetailsQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html

      frontmatter {
        title
        slug
        description
        client
        date(formatString: "YYYY")
        extra
        url
        color
        images {
          publicURL
        }
      }
    }

    allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
`

const ProjectDetailsPage = ({ data, pageContext }) => {
  const title = data.site.siteMetadata.title
  const project = data.markdownRemark
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout title={title}>
      <ProjectDetails project={project} />

      <NextProject
        current={pageContext.slug}
        projects={projects}
      />
    </Layout>
  )
}

export default ProjectDetailsPage
