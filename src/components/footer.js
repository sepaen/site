import React from 'react'

import Box from '../system/box'
import SiteTitle from './site-title'

const FooterBox = Box.with({
  as: 'footer',
  position: 'fixed',
  zIndex: 2,
  bottom: 2,
  left: 0,
  p: 2
})

const Footer = ({ title, ...props }) => {
  const [, titleBottom] = title.split(' ')

  return (
    <FooterBox {...props}>
      <SiteTitle children={titleBottom} />
    </FooterBox>
  )
}

export default Footer
