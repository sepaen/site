import React from 'react'
import Flex from '../system/flex'
import Grid from '../system/grid'

const Content = ({ children, ...props }) => (
  <Flex
    {...props}
    flex="0 0 100%"
    alignItems="center"
    p={20}
  >
    <Grid
      children={children}
      flex={1}
      gridTemplateColumns="repeat(6, 1fr)"
      height="66%"
    />
  </Flex>
)

export default Content

