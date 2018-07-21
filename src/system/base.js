import React from 'react'
import styled from 'styled-components'
import pickBy from 'lodash/pickBy'

import {
  display,
  zIndex,
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
  color,
  responsiveStyle
} from 'styled-system'


const CALLBACK_RX = /^on[A-Z][\w]*/

const defaultWhitelist = [
  'id',
  'children',
  'className',
  'style',
  'dangerouslySetInnerHTML'
]

function filterDOMProps(props, whitelist=[]) {
  return pickBy(props, (_, key) => (
    defaultWhitelist.includes(key)
    || whitelist.includes(key))
    || CALLBACK_RX.test(key)
  )
}

const Base = ({ is:Tag='div', domProps, ...props }) => {
  const passedProps = (typeof Tag === 'string')
    ? filterDOMProps(props, domProps)
    : props

  return <Tag {...passedProps} />
}

const transform = responsiveStyle({ prop: 'transform' })
const cursor = responsiveStyle({ prop: 'cursor' })

export default styled(Base)`
  ${display}
  ${zIndex}

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
  ${transform}
  ${cursor}
`

