import React from 'react'

import Box from '../system/box'
import Link from '../system/link'
import MenuIcon from './menu-icon'
import { readableColor } from 'polished'

class NavbarMobile extends React.Component {
  state = {
    opened: false
  }

  toggleMenu = toggle => {
    this.setState({
      opened: typeof toggle === 'undefined' ? !this.state.opened : toggle
    })
  }

  render() {
    const { title, bg, ...props } = this.props
    const { opened } = this.state
    const color = readableColor(bg)

    return (
      <Box
        {...props}
        bg={opened ? bg : 'transparent'}
        borderBottom={opened ? '1px solid' : 'none'}
        borderColor={color}
      >
        {!opened && (
          <Link
            to="/"
            children={title}
            textTransform="uppercase"
            letterSpacing={10}
            textDecoration="none !important"
          />
        )}

        {opened && (
          <Box alignSelf="center">
            <Link to="/projects" children="Projects" mr={3} />
            <Link to="/about" children="About" mr={3} />
            <Link to="/contact" children="Contact" />
          </Box>
        )}

        <MenuIcon
          opened={opened}
          onClick={() => this.toggleMenu()}
          color={color}
        />
      </Box>
    )
  }
}

export default NavbarMobile
