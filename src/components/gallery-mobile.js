import Box from '../system/box'

const MobileGallery = Box.extend({
  flexDirection: 'column',
  $children: {
    '> *': {
      mb: 4
    }
  }
})

export default MobileGallery
