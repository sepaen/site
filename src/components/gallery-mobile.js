import styled from 'styled-components'
import Flex from '../system/flex'

const MobileGallery = styled(Flex).attrs({ flexDirection: 'column' })`
  > * {
    margin-bottom: 30px;
  }
`

export default MobileGallery
