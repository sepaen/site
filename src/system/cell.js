import styled from 'styled-components'

import {
  gridColumn,
  gridRow
} from 'styled-system'

import Flex from './flex'

const Cell = styled(Flex)`
  ${gridColumn}
  ${gridRow}
`

export default Cell
