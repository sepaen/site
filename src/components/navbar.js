import React from 'react'

import Flex from '../system/flex'
import Link from '../system/link'

const Navbar = ({ title, ...props }) => {
  const [titleTop] = title.split(' ')

  return (
    <Flex
      is="nav"
      position="fixed"
      zIndex={2}
      top={0}
      right={0}
      left={0}
      justify="space-between"
      p={20}
      {...props}
    >
      <Link to="/" children={titleTop} textTransform="uppercase" />

      <Flex alignSelf="flex-start">
        <Link to="/projects" children="Projects" mr={3} />
        <Link to="/about" children="About" mr={3} />
        <Link to="/contact" children="Contact" />
      </Flex>
    </Flex>
  )
}

export default Navbar
