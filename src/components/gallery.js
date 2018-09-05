import React from 'react'

import MobileGallery from './gallery-mobile'
import DesktopGallery from './gallery-desktop'
import isDesktop from '../utils/is-desktop'

class Gallery extends React.Component {
  state = {
    isDesktop: true,
  }

  componentDidMount() {
    this.setState({ isDesktop: isDesktop() })
  }

  render() {
    const GalleryComponent = this.state.isDesktop
      ? DesktopGallery
      : MobileGallery

    return <GalleryComponent {...this.props} />
  }
}

export default Gallery
