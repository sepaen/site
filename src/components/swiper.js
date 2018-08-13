import React from 'react'
import debounce from 'lodash/debounce'
import Flex from '../system/flex'

const NORTH = 'SWIPE_NORTH'
const SOUTH = 'SWIPE_SOUTH'
const EAST = 'SWIPE_EAST'
const WEST = 'SWIPE_WEST'

function pos(touch) {
  return { x: touch.clientX, y: touch.clientY }
}

class Swiper extends React.Component {
  static defaultProps = {
    threshold: 100,
  }

  componentDidMount() {
    // prevent chrome mobile pull-to-refresh
    document.body.style.overflowY = 'hidden'
  }

  detectSwipe = (deltaX, deltaY) => {
    const THRESHOLD = this.props.threshold

    if (deltaY <= -THRESHOLD) {
      this.onSwipe(NORTH)
    } else if (deltaY >= THRESHOLD) {
      this.onSwipe(SOUTH)
    } else if (deltaX >= THRESHOLD) {
      this.onSwipe(EAST)
    } else if (deltaX <= -THRESHOLD) {
      this.onSwipe(WEST)
    }
  }

  onWheel = e => {
    // boosted for firefox
    this.detectSwipe(e.deltaX * 100, e.deltaY * 100)
  }

  onTouchStart = e => {
    this.touchStart = pos(e.touches[0])
  }

  onTouchMove = e => {
    const touchMove = pos(e.touches[0])

    const deltaX = this.touchStart.x - touchMove.x
    const deltaY = this.touchStart.y - touchMove.y

    this.detectSwipe(deltaX, deltaY)
  }

  onSwipe = debounce(direction => {
    this.props.onSwipe(direction)
  }, 50)

  render() {
    const { onSwipe, ...props } = this.props

    return (
      <Flex
        {...props}
        onWheel={this.onWheel}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
      />
    )
  }
}

Swiper.NORTH = NORTH
Swiper.SOUTH = SOUTH
Swiper.EAST = EAST
Swiper.WEST = WEST

export default Swiper
