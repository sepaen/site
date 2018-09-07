import React from 'react'

import MobileGallery from './gallery-mobile'
import DesktopGallery from './gallery-desktop'
import withMediaQuery from './with-media-query'

const Gallery = ({ isDesktop, ...props }) => {
  const GalleryComponent = isDesktop ? DesktopGallery : MobileGallery
  return <GalleryComponent {...props} />
}

export default withMediaQuery(Gallery)
