import styled from 'styled-components'

import {
  flex,
  flexShrink,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  alignSelf,
  order
} from 'styled-system'

import Base from './base'

const Flex = styled(Base).attrs({ display: 'flex' })`
  ${flex}
  ${flexShrink}
  ${flexDirection}
  ${justifyContent}
  ${alignItems}
  ${alignContent}
  ${alignSelf}
  ${order}
`

export default Flex

