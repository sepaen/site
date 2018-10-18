import React from 'react'
import { graphql } from 'gatsby'

import publishedProjects from '../utils/published-projects'
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
            draft
            title
            fulltitle
            subtitle
            color
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
      }
    }
  }
`

class ProjectsPage extends React.Component {
  state = {
    index: 0,
  }

  onSwipe = index => {
    this.setState({ index })
  }

  render() {
    const { data } = this.props
    const { index } = this.state

    const title = data.site.siteMetadata.title
    const projects = publishedProjects(data)
    const bg = projects[index].node.frontmatter.color

    return (
      <Layout title={title} bg={bg}>
        <ProjectSwiper index={index} onSwipe={this.onSwipe}>
          {projects.map(
            ({ node }) =>
              !node.draft && (
                <ProjectPreview
                  key={extractSlug(node)}
                  project={node}
                  className="project-preview"
                />
              )
          )}
        </ProjectSwiper>
      </Layout>
    )
  }
}

export default ProjectsPage
