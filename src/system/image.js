import React from 'react'
import Box from './box'

const Image = Box.as(({ img, ...props }) => <img src={img} {...props} />).with({
  // background: `url("${src}")`,
  // width: '100%',
  // height: '100%',
  // as: 'img',
  flexShrink: 0,
  border: 'none'
})

export default Image
