import React from 'react'
import { graphql } from 'gatsby'

import '../utils/graphql-fragments'

import extractSlug from '../utils/extract-slug'
import publishedProjects from '../utils/published-projects'
import Layout from '../components/layout'
import ProjectPreview from '../components/project-preview'
import ProjectSwiper from '../components/project-swiper'
import Down from '../components/down'
import { color } from '../theme'
import { readableColor } from 'polished'

export const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            published
            title
            fulltitle
            subtitle
            color
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
      }
    }
  }
`

class ProjectsPage extends React.Component {
  state = {
    index: 0,
  }

  next = () => {
    const projects = publishedProjects(this.props.data)

    this.setState({
      index: (this.state.index + 1) % projects.length,
    })
  }

  onSwipe = index => {
    this.setState({ index })
  }

  render() {
    const { data } = this.props
    const { index } = this.state

    const title = data.site.siteMetadata.title
    const projects = publishedProjects(data)

    projects.forEach(({ node }, i) => {
      if (!node.frontmatter.color) {
        node.frontmatter.color = color(i)
      }
    })

    const bg = projects[index].node.frontmatter.color
    const arrowColor = readableColor(bg)

    return (
      <Layout title={title} bg={bg}>
        <ProjectSwiper index={index} onSwipe={this.onSwipe}>
          {projects.map(({ node }) => (
            <ProjectPreview
              key={extractSlug(node)}
              project={node}
              className="project-preview"
            />
          ))}
        </ProjectSwiper>

        <Down
          color={arrowColor}
          onClick={this.next}
          position="fixed"
          zIndex={2}
          width={20}
          height={20}
          bottom={20}
          right={20}
        />
      </Layout>
    )
  }
}

export default ProjectsPage
