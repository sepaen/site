import React from 'react'

import logoImage from '../images/logo.svg'
import Flex from '../system/flex'
import Image from '../system/image'
import withProps from '../utils/with-props'

const LogoImage = withProps(Image, {
  src: logoImage,
})

class LogoVideo extends React.Component {
  video = React.createRef()

  componentDidMount() {
    this.video.current.play()
  }

  render() {
    return (
      <Flex
        {...this.props}
        is="video"
        baseRef={this.video}
        loop
        muted
        playsInline
        preload="auto"
        domProps={['src', 'muted', 'loop', 'playsInline', 'preload']}
      >
        <source src="/videos/logo.webm" type="video/webm" />
        <source src="/videos/logo.mp4" type="video/mp4" />
        <LogoImage {...this.props} />
      </Flex>
    )
  }
}

export default LogoVideo
