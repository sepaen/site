import Box from '../system/box'

const MobileGallery = Box.with({
  flexDirection: 'column',
  $children: {
    '> *': {
      mb: 4
    }
  }
})

export default MobileGallery
