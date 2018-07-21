import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Base from './base'

// const Link = withProps(Base, { is: GatsbyLink })
const Link = props => {
  const Component = props.to ? GatsbyLink : 'a'
  return <Base is={Component} domProps={['href']} {...props} />
}

export default Link

