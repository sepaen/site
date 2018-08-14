import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ProjectPreview from '../components/project-preview'
import extractSlug from '../utils/extract-slug'
import ProjectSwiper from '../components/project-swiper'

export const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            color
            images {
              image
            }
          }

          fileAbsolutePath
        }
      }
    }
  }
`

const ProjectsPage = ({ data }) => {
  const title = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout title={title}>
      <ProjectSwiper>
        {projects.map(({ node }) => (
          <ProjectPreview
            key={extractSlug(node)}
            project={node}
            className="project-preview"
          />
        ))}
      </ProjectSwiper>
    </Layout>
  )
}

export default ProjectsPage
