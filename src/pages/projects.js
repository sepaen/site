import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ScrollToHash from '../components/scroll-to-hash'
import ProjectPreview from '../components/project-preview'
import Link from '../system/link'

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
            images {
              publicURL
            }
          }
        }
      }
    }
  }
`
function next(location, projects=[]) {
  const hash = location.hash.slice(1)

  const index = (hash.length > 0)
    ? projects.findIndex(({ node }) => node.frontmatter.slug === hash)
    : 0

  const nextProject = projects[(index + 1) % projects.length].node
  return `/projects#${nextProject.frontmatter.slug}`
}

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

      <Link
        href={next(location, projects)}
        children="Next Project"
        position="fixed"
        bottom={20}
        right={20}
      />
    </Layout>
  )
}

export default ProjectsPage

