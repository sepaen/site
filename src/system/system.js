import React from 'react'
import Styled from 'react-systyle'
import * as theme from './theme'

const withTheme = Themed => props => {
  return <Themed {...props} theme={theme} />
}

export default Styled.wrap(withTheme)
