import React from 'react'

import logoImage from '../images/logo.svg'
import Box from '../system/box'
import Image from '../system/image'

const Video = Box.extend({
  as: 'video',
  loop: true,
  muted: true,
  playsInline: true,
  preload: 'auto'
})

const LogoImage = Image.extend({
  src: logoImage
})

class LogoVideo extends React.Component {
  video = React.createRef()

  componentDidMount() {
    this.video.current.play()
  }

  render() {
    return (
      <Video {...this.props} innerRef={this.video}>
        <source src="/videos/logo.webm" type="video/webm" />
        <source src="/videos/logo.mp4" type="video/mp4" />
        <LogoImage {...this.props} />
      </Video>
    )
  }
}

export default LogoVideo
