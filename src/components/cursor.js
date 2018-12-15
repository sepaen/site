import React from 'react'
import Text from '../system/text'

const CursorText = Text.extend({
  $before: {
    content: p => p.content,
    bg: 'red'
  }
})

class Cursor extends React.Component {
  static defaultProps = {
    render: () => null
  }

  state = {
    x: 0,
    y: 0
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
      y: e.pageY
    })
  }

  render() {
    const { render, ...props } = this.props
    const { x, y } = this.state

    const content = render({ ...props, x, y })

    return !content ? null : (
      <CursorText
        {...props}
        zIndex={1000}
        children={content}
        style={{ top: y - 25, left: x - 25 }}
        display={['none', 'flex']}
        color="#fff !important"
        position="fixed"
        width={50}
        height={50}
        justifyContent="center"
        alignItems="center"
        userSelect="none"
        willChange="top, left"
        mixBlendMode="difference"
      />
    )
  }
}

export default Cursor
