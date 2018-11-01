import get from 'lodash/get'

export default function publishedProjects(data) {
  return get(data, 'allMarkdownRemark.edges', []).filter(
    ({ node }) => node.frontmatter.published
  )
}
