import React from 'react'

import Box from '../system/box'
import Link from '../system/link'
import MenuIcon from './menu-icon'
import SiteTitle from './site-title'
import { readableColor } from 'polished'

const NavbarBox = Box.extend({
  bg: p => (p.opened ? p.bg : 'transparent'),
  bb: p => (p.opened ? '1px solid' : 'none'),
  borderColor: p => readableColor(p.bg)
})

class NavbarMobile extends React.Component {
  state = {
    opened: false
  }

  toggleMenu = () => {
    this.setState({ opened: !this.state.opened })
  }

  render() {
    const { title, ...props } = this.props
    const { opened } = this.state

    return (
      <NavbarBox {...props} opened={opened}>
        {!opened && <SiteTitle children={title} />}

        {opened && (
          <Box alignSelf="center">
            <Link to="/projects" children="Projects" mr={3} />
            <Link to="/about" children="About" mr={3} />
            <Link to="/contact" children="Contact" />
          </Box>
        )}

        <MenuIcon opened={opened} onClick={() => this.toggleMenu()} />
      </NavbarBox>
    )
  }
}

export default NavbarMobile
