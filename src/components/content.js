import Grid from '../system/grid'

const Content = Grid.with({
  gridAutoFlow: ['column', 'row'],
  gridTemplateColumns: ['1fr', 'repeat(6, 1fr)'],
  flex: '1 0 100%',
  maxWidth: '100vw',
  minHeight: '100vh',
  p: [4, 2],
  pt: [10, 19]
})

export default Content
