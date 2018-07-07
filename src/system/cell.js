import styled from 'styled-components'

import {
  gridColumn,
  gridRow
} from 'styled-system'

import Base from './base'

const Cell = styled(Base)`
  ${gridColumn}
  ${gridRow}
`

export default Cell
