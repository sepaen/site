import React from 'react'
import get from 'lodash/get'
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
    const projects = get(data, 'allMarkdownRemark.edges', [])
    const current = projects[index].node

    return (
      <Layout title={title} bg={current.frontmatter.color}>
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
