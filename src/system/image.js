import withProps from '../utils/with-props'
import Base from './base'

const Image = withProps(Base, {
  is: 'img',
  domProps: ['src'],
  border: 'none'
})

export default Image

