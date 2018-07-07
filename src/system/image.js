import styled from 'styled-components'

import Base from './base'

const Image = styled(Base).attrs({ is: 'img', domProps: ['src']})`
  border: none;
`

export default Image

