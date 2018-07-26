import logoImage from '../images/logo.png'
import Image from '../system/image'
import withProps from '../utils/with-props'

const Logo = withProps(Image, {
  src: logoImage,
})

export default Logo
