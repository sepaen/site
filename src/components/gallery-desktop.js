import React from 'react'
import winHeight from '../utils/win-height'
import Flex from '../system/flex'
import Text from '../system/text'
import Cursor from './cursor'
import Swiper from './swiper'

function margin(i) {
  return i === 0 ? 0 : (i % 3) * 20
}

class DesktopGallery extends React.Component {
  state = {
    index: -1,
    up: false,
    finished: false,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ index: 0 }), 1)
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

    if (!this.state.finished && index === size - 1) {
      this.setState({ finished: true })
    }
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
    const { index, finished } = this.state
    const size = React.Children.count(this.props.children)

    if (y < 60 || y > winHeight() - 60) {
      return null
    } else if (index === 0 || !finished) {
      return 'Next'
    } else if (index === size - 1) {
      return 'Previous'
    } else {
      return y < winHeight() / 2 ? 'Previous' : 'Next'
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
            transition={'transform 750ms ease-in-out'}
            willChange="transform"
            p={30}
            mt={margin(i)}
            ml={margin(i)}
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
          justifyContent="center"
          alignItems="center"
          transform={this.translate(size - 1)}
          transition={'transform 750ms ease-in-out'}
          willChange="transform"
          p={40}
        />
      </Swiper>
    )
  }
}

export default DesktopGallery
