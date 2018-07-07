import React from 'react'

import Flex from '../system/flex'
import Text from '../system/text'
import Link from '../system/link'

const Navbar = ({ title }) => {
  const [titleTop] = title.split(' ')

  return (
    <Flex
      is="nav"
      position="fixed"
      top={0}
      right={0}
      left={0}
      p={20}
      justify="space-between"
    >
      <Link to="/" children={titleTop} />

      <Flex alignSelf="flex-start">
        <Link to="/projects" children="Projects" mr={3} />
        <Link to="/about" children="About" mr={3} />
        <Link to="/contact" children="Contact" />
      </Flex>
    </Flex>
  )
}

export default Navbar
