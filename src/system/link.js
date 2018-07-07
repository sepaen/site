import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import Base from './base'

const Link = styled(Base).attrs({ is: GatsbyLink })`
  align-self: flex-start;
`

export default Link

