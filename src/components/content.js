import withProps from '../utils/with-props';
import Grid from '../system/grid'

const Content = withProps(Grid, {
  flex: 1,
  gridTemplateColumns: 'repeat(6, 1fr)'
})

export default Content

