import React from 'react'
import { findDOMNode } from 'react-dom'

import logoImage from '../images/logo.svg'
import Box from '../system/box'
import Image from '../system/image'

const Video = Box.with({
  as: 'video',
  loop: true,
  muted: true,
  playsInline: true,
  preload: 'auto'
})

const LogoImage = Image.with({
  img: logoImage
})

class LogoVideo extends React.Component {
  componentDidMount() {
    findDOMNode(this).play()
  }

  render() {
    return (
      <Video {...this.props}>
        <source src="/videos/logo.webm" type="video/webm" />
        <source src="/videos/logo.mp4" type="video/mp4" />
        <LogoImage {...this.props} />
      </Video>
    )
  }
}

export default LogoVideo
