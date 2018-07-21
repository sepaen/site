const path = require( 'path' )

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve('src/templates/project.js')

  return graphql(`{
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `projects/${node.frontmatter.slug}`,
          component: projectTemplate,
          context: {
            slug: node.frontmatter.slug
          }
        })
      })
    })
}