import styled from 'styled-components'

import {
  gridTemplateColumns,
  gridTemplateRows,
  gridGap,
  gridAutoFlow
} from 'styled-system'

import withProps from '../utils/with-props'
import Flex from './flex'

const Grid = styled(
  withProps(Flex, { display: 'grid' })
)`
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridGap}
  ${gridAutoFlow}
`

export default Grid
