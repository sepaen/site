import Grid from '../system/grid'
import withProps from '../utils/with-props'

const Content = withProps(Grid, {
  gridTemplateColumns: 'repeat(6, 1fr)',
  alignItems: 'center',
  flex: '0 0 100%',
  height: '100vh',
  p: 20
})

export default Content

