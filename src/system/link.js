import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Text from './text'

const PickLink = props => {
  const LinkComponent = props.to ? GatsbyLink : 'a'
  return <LinkComponent {...props} />
}

const Link = Text.with({
  as: PickLink,
  display: 'inline-flex',
  textDecoration: 'none',
  ':hover': { textDecoration: 'underline' }
})

export default Link
