import React from 'react'
import extractSlug from '../utils/extract-slug'
import Link from '../system/link'

function nextProject(current = '', projects = [], hash) {
  if (projects.length === 0) {
    return { href: '#' }
  }

  const index = current.length
    ? projects.findIndex(({ node }) => extractSlug(node) === current)
    : 0
  const next = projects[(index + 1) % projects.length].node
  const slug = extractSlug(next)

  return hash ? { href: `/projects#${slug}` } : { to: `/projects/${slug}` }
}

const NextProject = ({ current, projects, hash, ...props }) => (
  <Link
    {...props}
    {...nextProject(current, projects, hash)}
    children="Next Project"
    position="fixed"
    zIndex={2}
    bottom={20}
    right={20}
  />
)

export default NextProject
