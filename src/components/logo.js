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
    this.timeout = setTimeout(() => {
      this.video.current.play()
    }, 3000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
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
        <source src="/videos/logo.mp4" type="video/mp4" />
        <source src="/videos/logo.webm" type="video/webm" />
        <LogoImage {...this.props} />
      </Flex>
    )
  }
}

export default LogoVideo
