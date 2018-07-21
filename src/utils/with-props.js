import React from 'react'

export default function withProps(Component, baseProps) {
  return props => <Component {...baseProps} {...props} />
}