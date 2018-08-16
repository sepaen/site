import React from 'react'
import Flex from '../system/flex'
import Text from '../system/text'
import Cursor from './cursor'
import Swiper from './swiper'

function margin(i, size) {
  const isFirst = i === 0
  const isLast = i === size - 1

  return isFirst || isLast ? 0 : ((i % 3) - 1) * 20
}

function winheight() {
  return window ? window.innerHeight : 0
}

class Gallery extends React.Component {
  state = {
    index: 0,
    up: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.children !== this.props.children) {
      this.setState({ index: 0 })
    }

    if (prevState.index !== this.state.index) {
      this.setState({ up: prevState.index > this.state.index })
    }
  }

  select(index) {
    const size = React.Children.count(this.props.children)
    this.setState({ index: Math.max(0, Math.min(index, size - 1)) })
  }

  translate(index) {
    return index <= this.state.index
      ? 'translate3d(0, 0, 0)'
      : 'translate3d(0, 100vh, 0)'
  }

  onSwipe = directions => {
    const { index } = this.state
    if (directions.includes(Swiper.UP)) {
      this.select(index + 1)
    } else if (directions.includes(Swiper.DOWN)) {
      this.select(index - 1)
    }
  }

  getCursorText = ({ y }) => {
    const { index } = this.state
    const size = React.Children.count(this.props.children)

    if (y < 60 || y > winheight() - 60) {
      return null
    } else if (index === 0) {
      return 'Next'
    } else if (index === size - 1) {
      return 'Previous'
    } else {
      return y < winheight() / 2 ? 'Previous' : 'Next'
    }
  }

  onCursorClick = e => {
    const cursor = this.getCursorText({ y: e.pageY })

    if (!cursor) {
      return
    }

    const index = this.state.index + (cursor === 'Next' ? +1 : -1)
    this.select(index)
  }

  render() {
    const { children, ...props } = this.props
    const { index, up } = this.state

    const childArr = React.Children.toArray(children)
    const size = childArr.length
    const firsts = childArr.slice(0, -1)
    const last = childArr[size - 1]

    return (
      <Swiper
        {...props}
        onSwipe={this.onSwipe}
        position="relative"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        cursor="none"
      >
        {firsts.map((child, i) => (
          <Flex
            key={i}
            children={child}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            transform={this.translate(i)}
            transition={(up || index) && 'transform 0.3s ease-in-out'}
            p={30}
            mt={margin(i, size)}
            ml={margin(i, size)}
          />
        ))}

        <Cursor
          is={Text}
          onClick={this.onCursorClick}
          render={this.getCursorText}
          mixBlendMode="difference"
        />

        <Flex
          children={last}
          position="absolute"
          transform={this.translate(size - 1)}
          transition={(up || index) && 'transform 0.3s ease-in-out'}
          p={40}
        />
      </Swiper>
    )
  }
}

export default Gallery
