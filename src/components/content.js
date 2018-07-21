import Grid from '../system/grid'
import withProps from '../utils/with-props'

const Content = withProps(Grid, {
  gridTemplateColumns: 'repeat(6, 1fr)',
  flex: '0 0 100%',
  alignItems: 'center',
  p: 20
})

export default Content

