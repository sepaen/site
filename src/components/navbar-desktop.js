import React from 'react'

import Flex from '../system/flex'
import Link from '../system/link'

const NavbarDesktop = ({ title, bg, ...props }) => (
  <Flex {...props}>
    <Link
      to="/"
      children={title}
      textTransform="uppercase"
      letterSpacing={10}
      textDecoration="none !important"
    />

    <Flex>
      <Link to="/projects" children="Projects" mr={3} />
      <Link to="/about" children="About" mr={3} />
      <Link to="/contact" children="Contact" />
    </Flex>
  </Flex>
)

export default NavbarDesktop
