const SLUG_RX = /\/([a-zA-Z0-9-_]+).md$/

module.exports = function extractSlug(project) {
  const [, slug] = project.fileAbsolutePath.match(SLUG_RX)
  return slug
}
