import React from 'react'

import Flex from '../system/flex'
import Image from '../system/image'

class Gallery extends React.Component {
  state = {
    index: 0
  }

  render() {
    const { images } = this.props

    return (
      <>
        {images.map((image, i) => (
          <Image key={i} src={image.publicURL} />
        ))}
      </>
    )
  }
}

export default Gallery
