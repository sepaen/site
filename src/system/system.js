import React from 'react'
import ReactSystem from 'systyle/lib/presets/react'
import * as theme from './theme'

export default ReactSystem.extend({ theme })
  .compose(React.memo)
  .system({
    mixBlendMode: true,
    theme: true,
    stroke: true,
    fill: true
  })
