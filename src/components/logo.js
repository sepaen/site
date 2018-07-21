import styled from 'styled-components'

import logoImage from '../images/logo.png'
import Image from '../system/image'
import withProps from '../utils/with-props'

const Logo = styled(
  withProps(Image, { src: logoImage, flexShrink: 0 })
)`
  background-size: ${p => p.width}px ${p => p.height}px;
`

export default Logo

