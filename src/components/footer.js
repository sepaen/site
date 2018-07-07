import React from 'react'

import Flex from '../system/flex'
import Text from '../system/text'
import Link from '../system/link'

const Footer = ({ title }) => {
  const [_, titleBottom] = title.split(' ')

  return (
    <Flex
      is="footer"
      position="fixed"
      bottom={0}
      left={0}
      p={20}
    >
      <Link to="/" children={titleBottom} />
    </Flex>
  )
}

export default Footer
