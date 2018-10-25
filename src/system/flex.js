import styled from 'styled-components'

import {
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  alignSelf,
  order,
  fontSize,
  style,
} from 'styled-system'

import withProps from '../utils/with-props'
import Base from './base'

const flexShrink = style({ prop: 'flexShrink' })
const overflow = style({ prop: 'overflow' })

const Flex = styled(withProps(Base, { display: 'flex' }))`
  ${flex}
  ${flexDirection}
  ${flexShrink}
  ${justifyContent}
  ${alignItems}
  ${alignContent}
  ${alignSelf}
  ${order}
  ${overflow}
  ${fontSize}
`

export default Flex
