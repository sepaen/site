import styled from 'styled-components'

import {
  fontSize,
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing
} from 'styled-system'

import Base from './base'

const Text = styled(Base).attrs({ is: 'p', m: 0 })`
  ${fontSize}
  ${fontFamily}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
`

export default Text
