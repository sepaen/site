import React from 'react'
import Link from '../system/link'

function nextProject(current='', projects=[], hash) {
  const index = current.length ? projects.findIndex(({ node }) => node.frontmatter.slug === current) : 0
  const next = projects[(index + 1) % projects.length].node
  const slug = next.frontmatter.slug

  return hash
    ? { href: `/projects#${slug}` }
    : { to: `/projects/${slug}`}
}

const NextProject = ({ current, projects, hash, ...props }) => (
  <Link
    {...props}
    {...nextProject(current, projects, hash)}
    children="Next Project"
    position="fixed"
    bottom={20}
    right={20}
  />
)

export default NextProject