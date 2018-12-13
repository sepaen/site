import React from 'react'
import Box from '../system/box'

const MenuIcon = ({ opened, color, ...props }) => (
  <Box {...props} alignItems="center">
    <svg width="36" height="14">
      <g stroke={color} strokeWidth="1.5">
        <line x1={0} y1={2} x2={36} y2={opened ? 12 : 2} />
        <line x1={0} y1={12} x2={36} y2={opened ? 2 : 12} />
      </g>
    </svg>
  </Box>
)

export default MenuIcon
