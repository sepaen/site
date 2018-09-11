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
  style,
  responsiveStyle,
} from 'styled-system'

const CALLBACK_RX = /^on[A-Z][\w]*/

const defaultWhitelist = [
  'id',
  'children',
  'className',
  'style',
  'dangerouslySetInnerHTML',
]

function filterDOMProps(props, whitelist = []) {
  return pickBy(
    props,
    (_, key) =>
      defaultWhitelist.includes(key) ||
      whitelist.includes(key) ||
      CALLBACK_RX.test(key)
  )
}

const Base = ({ is: Tag = 'div', domProps, ...props }) => {
  const passedProps =
    Boolean(domProps) || typeof Tag === 'string'
      ? filterDOMProps(props, domProps)
      : props

  return <Tag {...passedProps} />
}

const transform = responsiveStyle({ prop: 'transform' })
const transition = responsiveStyle({ prop: 'transition' })
const cursor = responsiveStyle({ prop: 'cursor' })
const outline = style({ prop: 'outline' })
const mixBlendMode = style({
  prop: 'mixBlendMode',
  cssProperty: 'mix-blend-mode',
})
const userSelect = style({ prop: 'userSelect', cssProperty: 'user-select' })

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
  ${cursor}
  ${mixBlendMode}

  ${transform}
  ${transition}

  ${userSelect}
  ${outline}
`
