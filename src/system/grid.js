import styled from 'styled-components'

import {
  gridTemplateColumns,
  gridTemplateRows,
  gridGap,
  gridAutoFlow
} from 'styled-system'

import Flex from './flex'

const Grid = styled(Flex).attrs({ display: 'grid' })`
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridGap}
  ${gridAutoFlow}
`

export default Grid
