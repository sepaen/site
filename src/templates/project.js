import React from 'react'
import { graphql } from 'gatsby'

import '../utils/graphql-fragments'

import publishedProjects from '../utils/published-projects'
import Layout from '../components/layout'
import ProjectDetails from '../components/project-details'
import NextProject from '../components/next-project'
import { keyframes } from 'styled-components'
import { color } from '../theme'

function findIndex(list = [], id) {
  return list.findIndex(el => el.node.id === id)
}

export const query = graphql`
  query ProjectDetailsQuery($fileRx: String!) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(fileAbsolutePath: { regex: $fileRx }) {
      id
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
        cover {
          ...ProjectImage
        }

        images {
          ...ProjectImage
        }
      }

      fileAbsolutePath
    }

    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            published
          }
        }
      }
    }
  }
`

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const ProjectDetailsPage = ({ data, pageContext }) => {
  const title = data.site.siteMetadata.title
  const project = data.markdownRemark
  const projects = publishedProjects(data)

  if (!project.frontmatter.color) {
    const index = findIndex(projects, project.id)
    project.frontmatter.color = color(index)
  }

  return (
    <Layout title={title} bg={project.frontmatter.color}>
      <ProjectDetails
        key={Math.random()}
        project={project}
        animation={`${fadein} ease-in 1s`}
      />

      <NextProject current={pageContext.slug} projects={projects} />
    </Layout>
  )
}

export default ProjectDetailsPage
