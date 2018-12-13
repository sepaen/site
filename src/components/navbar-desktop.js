import React from 'react'

import Box from '../system/box'
import Link from '../system/link'

const NavbarDesktop = ({ title, bg, ...props }) => (
  <Box {...props}>
    <Link
      to="/"
      children={title}
      textTransform="uppercase"
      letterSpacing={10}
      textDecoration="none !important"
    />

    <Box>
      <Link to="/projects" children="Projects" mr={3} />
      <Link to="/about" children="About" mr={3} />
      <Link to="/contact" children="Contact" />
    </Box>
  </Box>
)

export default NavbarDesktop
