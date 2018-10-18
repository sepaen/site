import React from 'react'

import logoImage from '../images/logo.svg'
import Flex from '../system/flex'
import Image from '../system/image'
import withProps from '../utils/with-props'

const LogoImage = withProps(Image, {
  src: logoImage,
})

const LogoVideo = props => (
  <Flex
    is="video"
    {...props}
    autoPlay
    muted
    src="/videos/logo.webm"
    domProps={['src', 'autoPlay', 'muted']}
  >
    <LogoImage {...props} />
  </Flex>
)

export default LogoVideo
