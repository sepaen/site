import Grid from '../system/grid'
import withProps from '../utils/with-props'

const Content = withProps(Grid, {
  gridAutoFlow: ['column', 'row'],
  gridTemplateColumns: ['1fr', 'repeat(6, 1fr)'],
  flex: '1 0 100%',
  maxWidth: '100vw',
  minHeight: '100vh',
  p: [30, 20],
  pt: [80, 150],
})

export default Content
