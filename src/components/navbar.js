import React from 'react'
import readableColor from 'polished/lib/color/readableColor'

import MobileNavbar from './navbar-mobile'
import DesktopNavbar from './navbar-desktop'
import withMediaQuery from './with-media-query'

const Navbar = ({ title, isDesktop, ...props }) => {
  const [titleTop] = title.split(' ')
  const NavbarComponent = isDesktop ? DesktopNavbar : MobileNavbar

  return (
    <NavbarComponent
      {...props}
      title={titleTop}
      is="nav"
      position="fixed"
      zIndex={2}
      top={0}
      right={0}
      left={0}
      justifyContent="space-between"
      p={20}
    />
  )
}
export default withMediaQuery(Navbar)
