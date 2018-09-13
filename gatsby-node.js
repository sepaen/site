const path = require('path')
const extractSlug = require('./src/utils/extract-slug')

function relativeImages(node, createNodeField) {
  const images = node.frontmatter.images.map(({ image }) =>
    path.join('../../static', image)
  )

  createNodeField({ node, name: 'images', value: images })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark' && node.frontmatter.images) {
    relativeImages(node, actions.createNodeField, getNode)
  }
}

exports.createPages = ({ graphql, actions }) => {
  const projectTemplate = path.resolve('src/templates/project.js')

  return graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
        edges {
          node {
            fileAbsolutePath
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const slug = extractSlug(node)

      actions.createPage({
        path: `projects/${slug}`,
        component: projectTemplate,
        context: {
          slug,
          fileRx: `/${slug}.md/`,
        },
      })
    })
  })
}
