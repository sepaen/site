import styled from 'styled-components'

import {
  fontSize,
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  style,
} from 'styled-system'

import withProps from '../utils/with-props'
import Flex from './flex'

const textTransform = style({ prop: 'textTransform' })
const textDecoration = style({ prop: 'textDecoration' })

const Text = styled(
  withProps(Flex, {
    is: 'span',
    display: 'inline-flex',
    color: 'white',
    m: 0,
  })
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
