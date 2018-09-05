import Grid from '../system/grid'
import withProps from '../utils/with-props'

const Content = withProps(Grid, {
  gridAutoFlow: ['column', 'row'],
  gridTemplateColumns: ['1fr', 'repeat(6, 1fr)'],
  alignItems: 'center',
  flex: '1 0 100%',
  minHeight: '100vh',
  p: [30, 20],
})

export default Content
