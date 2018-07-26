import React from 'react'
import Flex from '../system/flex'
import Text from '../system/text'
import Cursor from './cursor'

function margin(i, len) {
  const isFirst = i === 0
  const isLast = i === len - 1

  return isFirst || isLast ? 0 : ((i % 3) - 1) * 20
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
    const len = React.Children.count(this.props.children)
    this.setState({ index: Math.max(0, Math.min(index, len)) })
  }

  translate(index) {
    return index <= this.state.index
      ? 'translate3d(0, 0, 0)'
      : 'translate3d(0, 200%, 0)'
  }

  render() {
    const { children, ...props } = this.props
    const { index, up } = this.state
    const len = React.Children.count(children)

    return (
      <Flex {...props} position="relative" flexDirection="column" height="100%">
        {React.Children.map(children, (child, i) => (
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
            mt={margin(i, len)}
            ml={margin(i, len)}
          />
        ))}

        <Cursor
          is={Text}
          onClick={e =>
            this.select(index + (e.pageY < window.innerHeight / 2 ? -1 : 1))
          }
          render={({ y }) =>
            y < 60 || y > window.innerHeight - 60
              ? null
              : y < window.innerHeight / 2
                ? 'Previous'
                : 'Next'
          }
          mixBlendMode="difference"
        />
      </Flex>
    )
  }
}

export default Gallery
