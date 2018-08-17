import React from 'react'
import styled from 'styled-components'

import invoke from '../utils/invoke'
import withProps from '../utils/with-props'
import Swiper from './swiper'

const VerticalSwiper = styled(withProps(Swiper, { flexDirection: 'column' }))`
  > * {
    transform: translate3d(0, ${p => -p.index * 100}vh, 0);
    transition: transform ease-in-out 0.3s;
  }
`

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
    return (
      <VerticalSwiper
        {...this.props}
        onSwipe={this.onSwipe}
        height="100vh"
        overflow="hidden"
      />
    )
  }
}

export default ProjectSwiper
