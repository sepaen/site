import styled from 'styled-components'

import {
  fontSize,
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing
} from 'styled-system'

import withProps from '../utils/with-props'
import Base from './base'

const Text = styled(
  withProps(Base, { is: 'p', m: 0 })
)`
  ${fontSize}
  ${fontFamily}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
`

export default Text
