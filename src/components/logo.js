import React from 'react'

import logoImage from '../images/logo.svg'
import Box from '../system/box'
import Image from '../system/image'

const LogoImage = Image.with({
  src: logoImage
})

class LogoVideo extends React.Component {
  video = React.createRef()

  componentDidMount() {
    this.video.current.play()
  }

  render() {
    return (
      <Box
        {...this.props}
        as="video"
        innerRef={this.video}
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/logo.webm" type="video/webm" />
        <source src="/videos/logo.mp4" type="video/mp4" />
        <LogoImage {...this.props} />
      </Box>
    )
  }
}

export default LogoVideo
