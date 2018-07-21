import React from 'react'
import styled from 'styled-components'

import Base from '../system/base'

const Markdown = ({ html, ...props }) => (
  <Base
    {...props}
    is="section"
    dangerouslySetInnerHTML={{ __html: html }}
  />
)


export default styled(Markdown)`
  h1 {

  }

  p {

  }
`
