import React from 'react'
import { ReactSystem } from 'systyle/lib/helpers'
import * as theme from './theme'

export default ReactSystem.system({ mixBlendMode: true, theme: true })
  .compose(React.memo)
  .with({ theme })
