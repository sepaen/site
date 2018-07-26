const path = require('path')
const extractSlug = require('./src/utils/extract-slug')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

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

      createPage({
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
