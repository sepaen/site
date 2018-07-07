import styled from 'styled-components'

import {
  flex,
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
  ${flexDirection}
  ${justifyContent}
  ${alignItems}
  ${alignContent}
  ${alignSelf}
  ${order}
  ${p => ('flexShrink' in p) && `flex-shrink: ${p.flexShrink};`}
`

export default Flex

