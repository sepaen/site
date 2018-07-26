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
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            color
            images
          }
        }
      }
    }
  }
`

function findProject(projects, slug) {
  return slug.length
    ? projects.find(({ node }) => node.frontmatter.slug === slug)
    : projects[0]
}

const ProjectsPage = ({ data, location }) => {
  const slug = location.hash.slice(1)
  const title = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges
  const current = findProject(projects, slug).node

  return (
    <Layout title={title} bg={current.frontmatter.color}>
      <ScrollToHash location={location} anchor="project-preview">
        {projects.map(({ node }) => (
          <ProjectPreview
            key={node.frontmatter.slug}
            project={node}
            className="project-preview"
          />
        ))}
      </ScrollToHash>

      <NextProject hash current={slug} projects={projects} />
    </Layout>
  )
}

export default ProjectsPage
