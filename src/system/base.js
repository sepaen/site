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
  opacity,
  boxShadow,
  color,
  style,
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

const Base = ({ is: Tag = 'div', baseRef, domProps, ...props }) => {
  const passedProps =
    Boolean(domProps) || typeof Tag === 'string'
      ? filterDOMProps(props, domProps)
      : props

  return <Tag ref={baseRef} {...passedProps} />
}

const transform = style({ prop: 'transform' })
const transition = style({ prop: 'transition' })
const cursor = style({ prop: 'cursor' })
const outline = style({ prop: 'outline' })
const animation = style({ prop: 'animation' })
const mixBlendMode = style({
  prop: 'mixBlendMode',
  cssProperty: 'mix-blend-mode',
})
const userSelect = style({ prop: 'userSelect', cssProperty: 'user-select' })
const willChange = style({ prop: 'willChange', cssProperty: 'will-change' })

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

  ${boxShadow}

  ${color}
  ${cursor}
  ${mixBlendMode}

  ${transform}
  ${transition}
  ${animation}

  ${userSelect}
  ${outline}
  ${opacity}

  ${willChange}
`
