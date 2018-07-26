import React from 'react'
import Flex from '../system/flex'

class Cursor extends React.Component {
  static defaultProps = {
    render: () => null,
  }

  state = {
    x: 0,
    y: 0,
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.updatePosition)
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.updatePosition)
  }

  updatePosition = e => {
    this.setState({
      x: e.pageX,
      y: e.pageY,
    })
  }

  render() {
    const { render, ...props } = this.props
    const { x, y } = this.state

    const content = render({ ...props, x, y })

    return !content ? null : (
      <Flex
        {...props}
        children={content}
        style={{ top: y - 25, left: x - 25 }}
        color="#fff"
        position="fixed"
        width={50}
        height={50}
        justifyContent="center"
        alignItems="center"
        cursor="none"
        userSelect="none"
      />
    )
  }
}

export default Cursor
