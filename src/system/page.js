import styled from 'styled-components'
import { readableColor } from 'polished'
import Flex from '../system/flex'
import withProps from '../utils/with-props'

const Page = styled(
  withProps(Flex, { flex: '1 0 100%' })
)`
  * {
    color: ${p => p.bg && readableColor(p.bg)}
  }
`

export default Page

