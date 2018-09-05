import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import Text from './text'

const Link = props => {
  const Component = props.to ? GatsbyLink : 'a'

  return (
    <Text
      is={Component}
      domProps={['href', 'to', 'target']}
      display="inline-flex"
      textDecoration="none"
      {...props}
    />
  )
}

export default styled(Link)`
  :hover {
    text-decoration: underline;
  }
`
