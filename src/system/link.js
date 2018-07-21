import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Flex from './flex'

const Link = props => {
  const Component = props.to ? GatsbyLink : 'a'
  return <Flex is={Component} domProps={['href', 'to']} {...props} />
}

export default Link

