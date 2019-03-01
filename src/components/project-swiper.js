import React from 'react'

import invoke from '../utils/invoke'
import Box from '../system/box'
import Swiper from './swiper'

const timingFn = 'transform 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000)'

const VerticalSwiper = Box.with(
  {
    as: Swiper,
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },

  props => ({
    ...props,

    '& > *': {
      transform: `translate3d(0, ${-props.index * 100}vh, 0)`,
      transition: timingFn,
      willChange: 'transform'
    }
  })
)

class ProjectSwiper extends React.Component {
  select = index => {
    const size = this.props.children.length
    const newIndex = Math.max(0, Math.min(index, size - 1))
    invoke(this.props, 'onSwipe', newIndex)
  }

  onSwipe = directions => {
    const { index } = this.props

    if (directions.includes(Swiper.UP)) {
      this.select(index + 1)
    } else if (directions.includes(Swiper.DOWN)) {
      this.select(index - 1)
    }
  }

  render() {
    return <VerticalSwiper {...this.props} onSwipe={this.onSwipe} />
  }
}

export default ProjectSwiper
