import styled from 'styled-components'

import logoImage from '../images/logo.png'
import Image from '../system/image'

const Logo = styled(Image).attrs({ url: logoImage })`
  flex-shrink: 0;
  background-size: ${p => p.width}px ${p => p.height}px;
`

export default Logo

