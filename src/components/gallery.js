import React from 'react'

import MobileGallery from './gallery-mobile'
import DesktopGallery from './gallery-desktop'
import isDesktop from '../utils/is-desktop'

const Gallery = props => {
  const GalleryComponent = isDesktop() ? DesktopGallery : MobileGallery
  return <GalleryComponent {...props} />
}

export default Gallery
