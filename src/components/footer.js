import React from 'react'

import Flex from '../system/flex'
import Link from '../system/link'

const Footer = ({ title, ...props }) => {
  const [_, titleBottom] = title.split(' ')

  return (
    <Flex
      is="footer"
      position="fixed"
      zIndex={2}
      bottom={0}
      left={0}
      mixBlendMode="difference"
      p={20}
      {...props}
    >
      <Link to="/" children={titleBottom} textTransform="uppercase" />
    </Flex>
  )
}

export default Footer
