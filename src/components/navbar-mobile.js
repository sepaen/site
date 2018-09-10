import React from 'react'

import Flex from '../system/flex'
import Link from '../system/link'
import MenuIcon from './menu-icon'

class NavbarMobile extends React.Component {
  state = {
    opened: false,
  }

  toggleMenu = toggle => {
    this.setState({
      opened: typeof toggle === 'undefined' ? !this.state.opened : toggle,
    })
  }

  render() {
    const { title, color, ...props } = this.props
    const { opened } = this.state

    return (
      <Flex
        {...props}
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
          <Flex alignSelf="center">
            <Link to="/projects" children="Projects" mr={3} />
            <Link to="/about" children="About" mr={3} />
            <Link to="/contact" children="Contact" />
          </Flex>
        )}

        <MenuIcon
          opened={opened}
          onClick={() => this.toggleMenu()}
          color={color}
        />
      </Flex>
    )
  }
}

export default NavbarMobile
