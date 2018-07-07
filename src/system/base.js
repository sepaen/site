import React from 'react'
import styled from 'styled-components'

import {
  display,
  position,
  top,
  right,
  bottom,
  left,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  space,
  borders,
  borderRadius,
  borderColor,
  color
} from 'styled-system'

const Base = ({ is:Tag, ...props }) => <Tag {...props} />

export default styled(Base)`
  ${display}

  ${position}
  ${top}
  ${right}
  ${bottom}
  ${left}

  ${width}
  ${minWidth}
  ${maxWidth}
  ${height}
  ${minHeight}
  ${maxHeight}

  ${space}

  ${borders}
  ${borderRadius}
  ${borderColor}

  ${color}
`
