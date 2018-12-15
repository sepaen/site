import React from 'react'

import Box from '../system/box'
import Link from '../system/link'
import SiteTitle from './site-title'

const NavbarDesktop = ({ title, ...props }) => (
  <Box {...props} bg={null}>
    <SiteTitle children={title} />

    <Box>
      <Link to="/projects" children="Projects" mr={3} />
      <Link to="/about" children="About" mr={3} />
      <Link to="/contact" children="Contact" />
    </Box>
  </Box>
)

export default NavbarDesktop
