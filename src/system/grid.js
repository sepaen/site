import styled from 'styled-components'

import {
  gridTemplateColumns,
  gridTemplateRows,
  gridGap,
  gridAutoFlow
} from 'styled-system'

import Base from './base'

const Grid = styled(Base).attrs({ display: 'grid' })`
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridGap}
  ${gridAutoFlow}
`

export default Grid
