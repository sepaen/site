import React from 'react'
import { graphql } from 'gatsby'

import publishedProjects from '../utils/published-projects'
import Layout from '../components/layout'
import ProjectDetails from '../components/project-details'
import NextProject from '../components/next-project'
import { keyframes } from 'styled-components'

export const query = graphql`
  query ProjectDetailsQuery($fileRx: String!) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(fileAbsolutePath: { regex: $fileRx }) {
      html

      frontmatter {
        title
        fulltitle
        subtitle
        color
        images {
          image
        }
      }

      fields {
        images {
          childImageSharp {
            fluid(maxWidth: 1000) {
              src
            }
          }
        }
      }

      fileAbsolutePath
    }

    allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            draft
          }
        }
      }
    }
  }
`

const fadein = keyframes`
  from { opacity: 0.1; }
  to   { opacity: 1; }
`

const ProjectDetailsPage = ({ data, pageContext }) => {
  const title = data.site.siteMetadata.title
  const project = data.markdownRemark
  const projects = publishedProjects(data)

  return (
    <Layout title={title} bg={project.frontmatter.color}>
      <ProjectDetails
        key={Math.random()}
        project={project}
        animation={`${fadein} 0.5s`}
      />

      <NextProject current={pageContext.slug} projects={projects} />
    </Layout>
  )
}

export default ProjectDetailsPage
