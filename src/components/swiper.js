import React from 'react'
import debounce from 'lodash/debounce'
import Flex from '../system/flex'

const UP = 'SWIPE_UP'
const DOWN = 'SWIPE_DOWN'
const RIGHT = 'SWIPE_RIGHT'
const LEFT = 'SWIPE_LEFT'

function pos(touch) {
  return { x: touch.clientX, y: touch.clientY }
}

class Swiper extends React.Component {
  static defaultProps = {
    threshold: 50,
  }

  detectSwipe = (deltaX, deltaY) => {
    const THRESHOLD = this.props.threshold
    const directions = []

    if (deltaY <= -THRESHOLD) {
      directions.push(UP)
    }

    if (deltaY >= THRESHOLD) {
      directions.push(DOWN)
    }

    if (deltaX >= THRESHOLD) {
      directions.push(RIGHT)
    }

    if (deltaX <= -THRESHOLD) {
      directions.push(LEFT)
    }

    if (directions.length) {
      this.directions = directions
    }

    this.onSwipe()
  }

  onWheel = e => {
    const isPx = e.deltaMode === 0

    const deltaX = isPx ? -e.deltaX : -e.deltaX * 100
    const deltaY = isPx ? -e.deltaY : -e.deltaY * 100

    this.detectSwipe(deltaX, deltaY)
  }

  onTouchStart = e => {
    this.touchStart = pos(e.touches[0])
  }

  onTouchMove = e => {
    const touchMove = pos(e.touches[0])

    const deltaX = touchMove.x - this.touchStart.x
    const deltaY = touchMove.y - this.touchStart.y

    this.detectSwipe(deltaX, deltaY)
  }

  onSwipe = debounce(
    () => {
      this.props.onSwipe(this.directions)
      this.directions = []
    },
    100,
    { leading: true, trailing: false }
  )

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

Swiper.UP = UP
Swiper.DOWN = DOWN
Swiper.RIGHT = RIGHT
Swiper.LEFT = LEFT

export default Swiper
