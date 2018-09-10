import logoImage from '../images/logo.svg'
import Image from '../system/image'
import withProps from '../utils/with-props'

const Logo = withProps(Image, {
  src: logoImage,
})

export default Logo
