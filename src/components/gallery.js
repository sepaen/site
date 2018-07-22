import React from 'react'
import Flex from '../system/flex'

import next from '../images/next.svg'
import previous from '../images/previous.svg'

const Area = ({ disabled, cursor, onClick, ...props}) => (
  <Flex
    {...props}
    flex={1}
    zIndex={2}
    cursor={!disabled && cursor}
    onClick={!disabled && onClick}
  />
)

class Gallery extends React.Component {
  state = {
    index: 0,
    up: false
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
    if (index <= this.state.index) {
      return 'translate3d(0, 0, 0)'
    } else {
      return 'translate3d(0, 100%, 0)'
    }
  }

  render() {
    const { children, ...props } = this.props
    const { index, up } = this.state
    const len = React.Children.count(children)

    return (
      <Flex
        {...props}
        position="relative"
        flexDirection="column"
        height="100%"
      >
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
            p={15}
          />
        ))}

        <Area
          disabled={index === 0}
          onClick={() => this.select(index - 1)}
          cursor={`url(${previous}), auto`}
        />
        <Area
          disabled={index === len - 1}
          onClick={() => this.select(index + 1)}
          cursor={`url(${next}), auto`}
        />
      </Flex>
    )
  }
}

export default Gallery