import styled from 'styled-components'
import { gridColumn, gridRow } from 'styled-system'

import Flex from './flex'
import withProps from '../utils/with-props'

const Cell = styled(Flex)`
  ${gridColumn} ${gridRow};
`

export default withProps(Cell, { gridColumn: ['1/-1', '2/6'] })
