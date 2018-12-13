import React from 'react'

import Box from '../system/box'
import Link from '../system/link'

const Footer = ({ title, ...props }) => {
  const [_, titleBottom] = title.split(' ')

  return (
    <Box
      as="footer"
      position="fixed"
      zIndex={2}
      bottom={0}
      left={0}
      p={2}
      {...props}
    >
      <Link
        to="/"
        children={titleBottom}
        textTransform="uppercase"
        letterSpacing={10}
        textDecoration="none !important"
      />
    </Box>
  )
}

export default Footer
