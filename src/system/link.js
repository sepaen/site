import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Text from './text'

const Link = props => {
  const Component = props.to ? GatsbyLink : 'a'

  return (
    <Text
      as={Component}
      display="inline-flex"
      textDecoration="none"
      $hover={{ textDecoration: 'underline' }}
      {...props}
    />
  )
}

export default Link
