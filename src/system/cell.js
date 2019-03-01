import Box from './box'

const Cell = Box.with({
  gridColumn: '1/-1',

  desktop: {
    gridColumn: '2/6'
  }
})

export default Cell
