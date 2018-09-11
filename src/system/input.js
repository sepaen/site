import Text from './text'
import withProps from '../utils/with-props'

const Input = withProps(Text, {
  is: 'input',
  domProps: ['placeholder', 'value'],
  border: '1px solid black',
  bg: 'transparent',
  outline: 'none',
  px: 3,
  py: 2,
})

export default Input
