import styled from 'styled-components'

import {
  fontSize,
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  responsiveStyle,
} from 'styled-system'

import withProps from '../utils/with-props'
import Flex from './flex'

const textTransform = responsiveStyle({ prop: 'textTransform' })
const textDecoration = responsiveStyle({ prop: 'textDecoration' })

const Text = styled(
  withProps(Flex, { is: 'p', display: 'inline-flex', color: 'white', m: 0 })
)`
  ${fontSize}
  ${fontFamily}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
  ${textTransform}
  ${textDecoration}
`

export default Text
