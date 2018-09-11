import React from 'react'
import bowser from 'bowser'
import debounce from 'lodash/debounce'
import omit from 'lodash/omit'
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

  componentDidMount() {
    // prevent chrome mobile pull-to-refresh
    document.body.style.overflowY = 'hidden'
    this.browser = bowser.getParser(navigator.userAgent).getBrowserName()
  }

  componentWillUnmount() {
    document.body.style.overflowY = null
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

    if (directions.length > 0) {
      this.onSwipe(directions)
    }
  }

  onWheel = e => {
    const needsBoost = e.deltaMode !== 0 || this.browser === 'Safari'

    const deltaX = needsBoost ? -e.deltaX * 100 : -e.deltaX
    const deltaY = needsBoost ? -e.deltaY * 100 : -e.deltaY

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
    directions => this.props.onSwipe(directions),
    this.props.delay || 100,
    {
      leading: true,
      trailing: false,
    }
  )

  render() {
    const props = omit(this.props, ['onSwipe'])

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
