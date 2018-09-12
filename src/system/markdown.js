import React from 'react'
import styled from 'styled-components'

import Text from '../system/text'

const Markdown = ({ html, ...props }) => (
  <Text
    {...props}
    is="section"
    flexDirection="column"
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

export default styled(Markdown)`
  * {
    color: white;
  }

  h1 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`
