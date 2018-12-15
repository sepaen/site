import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Text from './text'

const PickLink = props => {
  const Component = props.to ? GatsbyLink : 'a'
  return <Component {...props} />
}

const Link = Text.extend({
  as: PickLink,
  display: 'inline-flex',
  textDecoration: 'none',
  $hover: { textDecoration: 'underline' }
})

export default Link
