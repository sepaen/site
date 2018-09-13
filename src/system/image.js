import withProps from '../utils/with-props'
import Flex from './flex'

const Image = withProps(Flex, {
  is: 'img',
  domProps: ['src'],
  flexShrink: 0,
  border: 'none',
})

export default Image
